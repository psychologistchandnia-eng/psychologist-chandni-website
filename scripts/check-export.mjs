import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('out');
const errors = [];
const decode = (text) => text.replaceAll('&amp;', '&').replaceAll('&quot;', '"').replaceAll('&#x27;', "'").replaceAll('&lt;', '<').replaceAll('&gt;', '>');
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => decode(match[1]));
const origin = 'https://www.besttherapistnearme.in';
const titles = new Set();
const descriptions = new Set();
const fileFor = (pathname) => {
  const localPath = decodeURIComponent(pathname).replace(/^\/+/, '');
  return path.resolve(root, path.extname(localPath) ? localPath : path.join(localPath, 'index.html'));
};
for (const url of urls) {
  const parsed = new URL(url);
  if (parsed.origin !== origin) errors.push(`Wrong sitemap host: ${url}`);
  const file = fileFor(parsed.pathname);
  if (!fs.existsSync(file)) { errors.push(`Missing page: ${url}`); continue; }
  const html = fs.readFileSync(file, 'utf8');
  const title = decode(html.match(/<title>(.*?)<\/title>/s)?.[1] || '');
  const description = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] || '');
  const canonical = decode(html.match(/<link rel="canonical" href="([^"]*)"/)?.[1] || '');
  if (!title || titles.has(title)) errors.push(`Empty or duplicate title: ${url}`);
  if (!description || descriptions.has(description)) errors.push(`Empty or duplicate description: ${url}`);
  titles.add(title); descriptions.add(description);
  if (canonical !== url) errors.push(`Canonical mismatch: ${url} -> ${canonical}`);
  if ((html.match(/<h1(?:\s|>)/g) || []).length !== 1) errors.push(`Expected one H1: ${url}`);
  if (/<meta name="robots" content="[^"]*noindex/.test(html)) errors.push(`Sitemap contains noindex page: ${url}`);
  for (const match of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
    try { JSON.parse(match[1]); } catch { errors.push(`Invalid JSON-LD: ${url}`); }
  }
  for (const match of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="[^"]*"/.test(match[0])) errors.push(`Missing image alt: ${url}`);
  }
  for (const match of html.matchAll(/\b(?:href|src)="([^"]*)"/g)) {
    const target = new URL(decode(match[1]), url);
    if (target.origin !== origin) continue;
    const targetFile = fileFor(target.pathname);
    if (!targetFile.startsWith(root + path.sep) || !fs.existsSync(targetFile)) {
      errors.push(`Broken local link or asset: ${url} -> ${target.href}`); continue;
    }
    if (target.hash && targetFile.endsWith('.html')) {
      const targetHtml = fs.readFileSync(targetFile, 'utf8');
      const id = decodeURIComponent(target.hash.slice(1));
      if (!targetHtml.includes(`id="${id}"`)) errors.push(`Missing fragment: ${url} -> ${target.href}`);
    }
  }
}
if (!/User-Agent: OAI-SearchBot\s+Allow: \//i.test(fs.readFileSync(path.join(root, 'robots.txt'), 'utf8'))) errors.push('OAI-SearchBot rule missing');
const notFound = fs.readFileSync(path.join(root, '404.html'), 'utf8');
if (!/<meta name="robots" content="[^"]*noindex/.test(notFound)) errors.push('404 must be noindex');
if (urls.length !== new Set(urls).size) errors.push('Duplicate sitemap URL');
if (errors.length) { console.error(errors.join('\n')); process.exitCode = 1; }
else console.log(`Verified ${urls.length} sitemap pages: unique metadata, canonicals, headings, JSON-LD, image alt text and local links. Robots and 404 checks passed.`);
