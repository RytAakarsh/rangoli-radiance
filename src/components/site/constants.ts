export const CLINIC = {
  name: "Dr. Rangoli's Skin, Hair & Laser Clinic",
  doctor: "Dr. Rangoli Jirwankar",
  phone: "+91 98811 10356",
  phoneRaw: "919881110356",
  address: "Shop No. D-08, Botanica Society, Ivy Estate Rd, Wagholi, Pune 412207",
  shortAddress: "Wagholi, Pune",
  timings: "Mon–Sun · 11 AM – 2 PM & 6 PM – 10 PM (Thu Closed)",
  instagram: "https://www.instagram.com/dr.rangoli_jirwankar/",
  youtube: "https://www.youtube.com/@dr.rangolijirwankar1408",
  whatsapp: (msg = "Hi Dr. Rangoli, I'd like to book a consultation.") =>
    `https://wa.me/919881110356?text=${encodeURIComponent(msg)}`,
  mapsEmbed:
    "https://www.google.com/maps?q=Botanica+Society+Ivy+Estate+Wagholi+Pune&output=embed",
};
