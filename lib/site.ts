export const site = {
  name: "Psychologist Chandni Akhenia",
  practitioner: "Chandni Akhenia",
  title: "Psychologist",
  credential: "M.A. in Clinical Psychology",
  experienceYears: 3,
  baseUrl: "https://www.besttherapistnearme.in",
  phoneDisplay: "+91 77188 05593",
  phone: "+917718805593",
  whatsapp: "https://wa.me/917718805593?text=Hi%20Chandni%2C%20I%27d%20like%20to%20book%20a%20psychology%20consultation.",
  email: "psychologistchandnia@gmail.com",
  instagram: "https://www.instagram.com/psychologistchandni/",
  googleBusiness: "https://maps.app.goo.gl/vszs8PiPLsGHpra67",
  googleMapsPlace: "https://www.google.com/maps/place/Chandni+Akhenia/@19.1902985,72.8415679,16z/data=!4m6!3m5!1s0x41e1231c282f8c23:0xe9e83c5c652944dc!8m2!3d19.1902326!4d72.8418725!16s%2Fg%2F11xgbf6qkm",
  address: "Sun Multispeciality Hospital, BJ Patel Road, near SNDT College and Liberty Garden, Malad, Kanchpada, Malad West, Mumbai, Maharashtra 400064",
  streetAddress: "Sun Multispeciality Hospital, BJ Patel Road, near SNDT College and Liberty Garden, Kanchpada, Malad West",
  locality: "Mumbai",
  region: "Maharashtra",
  postalCode: "400064",
  latitude: 19.1902326,
  longitude: 72.8418725,
  mapEmbed: "https://maps.google.com/maps?q=19.1902326%2C72.8418725&z=16&output=embed",
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], open: "11:00", close: "21:00", label: "Monday–Saturday, 11:00 am–9:00 pm" },
    { days: ["Sunday"], open: "11:00", close: "15:00", label: "Sunday, 11:00 am–3:00 pm" }
  ],
  googleRating: "4.9",
  googleReviewCount: 42,
  portrait: "/images/chandni-akhenia.jpg",
  areasServed: ["Malad", "Kandivali", "Kandivali West", "Goregaon", "Borivali", "Andheri", "Bandra", "Mumbai"],
  profileLinks: {
    practo: "",
    youtube: ""
  }
} as const;

export const appointmentHoursText = site.hours.map((hour) => hour.label).join(" · ");

export function absoluteUrl(path: string) {
  return site.baseUrl + (path.startsWith("/") ? path : "/" + path);
}
