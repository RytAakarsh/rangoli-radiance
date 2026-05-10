import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { CLINIC } from "./constants";

const offers = [
  { title: "6 Full Body LHR Sessions", price: "₹59,999", strike: "₹89,999", tag: "Best Value", featured: false },
  { title: "12 MediFacial Sessions", price: "₹49,999", strike: "₹72,000", tag: "Glow Plan" },
  { title: "6 Underarm Pigmentation Peel + 6 LHR Free", price: "₹29,999", strike: "₹45,000", tag: "Most Loved", featured: true },
  { title: "Laser Carbon Toning — 6 Sessions", price: "₹24,000", strike: "₹36,000", tag: "Celebrity Glow" },
];

export function Offers() {
  return (
    <section id="offers" className="py-24 sm:py-32 bg-gradient-soft relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.88_0.09_80/0.25),transparent_60%)]" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-rose px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary-foreground shadow-luxe">
            <Sparkles className="h-3.5 w-3.5" /> Limited Time
          </div>
          <h2 className="mt-5 text-4xl sm:text-5xl font-light text-brown">
            Special <span className="italic text-gradient-rose">Offers</span> of the Month
          </h2>
          <p className="mt-5 text-muted-foreground">
            Indulge in luxury skincare at exclusive clinic prices. *Terms &amp; conditions apply.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-3xl p-7 shadow-soft hover:shadow-luxe transition-all ${
                o.featured ? "bg-gradient-rose text-primary-foreground" : "bg-card"
              }`}
            >
              {o.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-gold text-white text-[10px] uppercase tracking-widest shadow-glow">
                  Bestseller
                </div>
              )}
              <div className={`text-[10px] uppercase tracking-[0.25em] ${o.featured ? "text-white/80" : "text-primary"}`}>
                {o.tag}
              </div>
              <h3 className={`mt-3 text-lg font-medium leading-snug ${o.featured ? "" : "text-brown"}`}>{o.title}</h3>
              <div className="mt-6">
                <div className={`font-display text-4xl ${o.featured ? "" : "text-gradient-rose"}`}>{o.price}</div>
                <div className={`text-sm line-through mt-1 ${o.featured ? "text-white/70" : "text-muted-foreground"}`}>
                  {o.strike}
                </div>
              </div>
              <a
                href={CLINIC.whatsapp(`Hi, I'd like to claim the offer: ${o.title}.`)}
                target="_blank"
                rel="noreferrer"
                className={`mt-6 inline-flex items-center justify-center gap-2 w-full rounded-full px-5 py-3 text-sm transition-all ${
                  o.featured
                    ? "bg-white text-primary hover:scale-105"
                    : "bg-gradient-rose text-primary-foreground hover:shadow-luxe"
                }`}
              >
                Claim Offer <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
