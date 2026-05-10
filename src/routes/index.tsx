import { createFileRoute } from "@tanstack/react-router";
import { Preloader } from "@/components/site/Preloader";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Offers } from "@/components/site/Offers";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Social } from "@/components/site/Social";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { StickyCta } from "@/components/site/StickyCta";
import { Chatbot } from "@/components/site/Chatbot";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Dr. Rangoli's Skin, Hair & Laser Clinic | Wagholi, Pune" },
      {
        name: "description",
        content:
          "Premium skin, hair & laser clinic in Wagholi, Pune. Advanced dermatology, laser hair reduction, PRP, MediFacial, anti-ageing & more by Dr. Rangoli Jirwankar.",
      },
      { property: "og:title", content: "Dr. Rangoli's Skin, Hair & Laser Clinic — Wagholi, Pune" },
      {
        property: "og:description",
        content:
          "Luxury dermatology & aesthetic care in Pune. Personalised skin, hair, laser & anti-ageing treatments by an experienced dermatologist.",
      },
      { property: "og:type", content: "website" },
      { name: "keywords", content: "Skin Clinic Pune, Hair Treatment Pune, Laser Clinic Wagholi, PRP Treatment Pune, Skin Specialist Pune, Hair Regrowth Clinic Pune, Dermatologist Wagholi" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: "Dr. Rangoli's Skin, Hair & Laser Clinic",
          image: "/favicon.ico",
          telephone: "+91-9881110356",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Shop No. D-08, Botanica Society, Ivy Estate Rd",
            addressLocality: "Wagholi",
            addressRegion: "Pune",
            postalCode: "412207",
            addressCountry: "IN",
          },
          openingHours: ["Mo-We 11:00-14:00", "Mo-We 18:00-22:00", "Fr-Su 11:00-14:00", "Fr-Su 18:00-22:00"],
          sameAs: [
            "https://www.instagram.com/dr.rangoli_jirwankar/",
            "https://www.youtube.com/@dr.rangolijirwankar1408",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="bg-background">
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <BeforeAfter />
        <Offers />
        <WhyUs />
        <Testimonials />
        <Social />
        <Contact />
      </main>
      <Footer />
      <StickyCta />
      <Chatbot />
    </div>
  );
}
