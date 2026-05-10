import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles, Scissors, Zap, Flame, HeartPulse, Droplet, Sun, Wand2, ArrowRight,
} from "lucide-react";
import { CLINIC } from "./constants";

type Cat = "All" | "Skin" | "Hair" | "Laser" | "Anti-Ageing" | "Slimming";

const services: { title: string; cat: Exclude<Cat, "All">; icon: any; desc: string }[] = [
  { title: "Acne & Acne Scar Treatment", cat: "Skin", icon: Droplet, desc: "Targeted peels, lasers & medical-grade therapy for clear, even-toned skin." },
  { title: "Pigmentation & Melasma", cat: "Skin", icon: Sun, desc: "Q-Switched laser, advanced peels & customised topicals for radiant tone." },
  { title: "MediFacial & Hydrafacial", cat: "Skin", icon: Sparkles, desc: "Deep-cleanse, hydrate and glow with premium med-spa facials." },
  { title: "Laser Hair Reduction", cat: "Laser", icon: Zap, desc: "Painless, US-FDA approved diode laser for smooth, hair-free skin." },
  { title: "Carbon Laser Toning", cat: "Laser", icon: Flame, desc: "Pore refining, oil control & instant glow with celebrity carbon facial." },
  { title: "Tattoo & Mole Removal", cat: "Laser", icon: Wand2, desc: "Pico laser tattoo removal & RF mole/skin tag treatment." },
  { title: "PRP Hair Regrowth", cat: "Hair", icon: HeartPulse, desc: "Growth-factor therapy to restore hair density & thickness naturally." },
  { title: "Hair Transplant", cat: "Hair", icon: Scissors, desc: "FUE hair transplant by an experienced surgeon — natural, permanent." },
  { title: "Hair Loss & Dandruff", cat: "Hair", icon: Droplet, desc: "Mesotherapy, derma-roller & medical haircare protocols." },
  { title: "Botox & Fillers", cat: "Anti-Ageing", icon: Sparkles, desc: "Subtle enhancements — wrinkle smoothing, lip & cheek refinement." },
  { title: "Skin Tightening", cat: "Anti-Ageing", icon: Flame, desc: "HIFU & RF tightening for a lifted, youthful contour without surgery." },
  { title: "Inch Loss & Body Contouring", cat: "Slimming", icon: Wand2, desc: "Non-surgical slimming, inch-loss & cellulite reduction." },
];

const cats: Cat[] = ["All", "Skin", "Hair", "Laser", "Anti-Ageing", "Slimming"];

export function Services() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? services : services.filter((s) => s.cat === active);

  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 bg-gradient-soft relative overflow-hidden">
      <div className="absolute top-1/4 -left-24 h-72 w-72 rounded-full bg-rose/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Signature Treatments</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-brown">
            Crafted for your <span className="italic text-gradient-rose">skin story</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            From clinical dermatology to luxe aesthetic care — every protocol is personalised, scientific and safe.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm transition-all ${
                active === c
                  ? "bg-gradient-rose text-primary-foreground shadow-luxe"
                  : "glass text-foreground/70 hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((s, i) => (
              <motion.article
                key={s.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group relative rounded-3xl bg-card p-7 shadow-soft hover:shadow-luxe transition-all hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-3xl bg-gradient-gold opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="relative">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-glow">
                    <s.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="mt-5 text-xl font-medium text-brown">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <a
                    href={CLINIC.whatsapp(`Hi, I'd like to know more about ${s.title}.`)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all"
                  >
                    Enquire <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
