const paths: Record<string, string> = {
  mind: "M12 4a7 7 0 0 0-7 7v2a3 3 0 0 0 3 3h1v-5H7a5 5 0 0 1 10 0h-2v5h1a3 3 0 0 0 3-3v-2a7 7 0 0 0-7-7Zm0 0v-2",
  heart: "M20.8 8.8c0 4.1-8.8 10.2-8.8 10.2S3.2 12.9 3.2 8.8A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z",
  leaf: "M19 4c-8 0-13 3.7-13 10a6 6 0 0 0 6 6c6.3 0 7-8 7-16Zm-12 14 9-9",
  talk: "M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v7a2.5 2.5 0 0 1-2.5 2.5H10l-5 4v-4.5a2.5 2.5 0 0 1-1-2Z",
  sleep: "M19.5 15.5A8.5 8.5 0 0 1 8.5 4.5 8 8 0 1 0 19.5 15.5Z",
  focus: "M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z",
  growth: "M12 20V9m0 0c-5 0-7-3-7-6 4 0 7 2 7 6Zm0 3c0-4 3-6 7-6 0 4-2 6-7 6Z",
  waves: "M3 8c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2M3 13c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2M3 18c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2",
  balance: "M12 4v16m-7-2h14M7 8l-3 5h6L7 8Zm10 0-3 5h6l-3-5Z",
  sun: "M12 3v2m0 14v2m9-9h-2M5 12H3m15.4-6.4-1.4 1.4M7 17l-1.4 1.4m12.8 0L17 17M7 7 5.6 5.6M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
  hands: "M12 8V4m0 4 4-2m-4 2-4-2M5 12l-2 2 4 6h10l4-6-2-2-4 3H9l-4-3Zm7-4v7",
  star: "m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1-6.2L3 9.6l6.2-.9L12 3Z",
  circle: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-3 9h6m-3-3v6",
  cloud: "M6 17a4 4 0 0 1-.4-8A6.5 6.5 0 0 1 18 10a3.5 3.5 0 0 1-.5 7H6Z"
};

const iconKeys = ["mind", "waves", "focus", "heart", "leaf", "circle", "talk", "growth", "balance", "sleep", "hands", "star", "sun", "cloud"];

export function iconFor(index: number) {
  return iconKeys[index % iconKeys.length];
}

export default function LineIcon({ name }: { name: string }) {
  return (
    <span className="line-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">
        <path d={paths[name] || paths.mind} />
      </svg>
    </span>
  );
}
