import { motion } from "framer-motion";
import { GraduationCap, Stethoscope, Heart, Award } from "lucide-react";
import doctor from "@/assets/doctor.png";
import { CLINIC } from "./constants";

const creds = [
  { icon: GraduationCap, label: "M.B.B.S, DDV Dermatology" },
  { icon: Award, label: "Fellowship — EADV (Europe)" },
  { icon: Stethoscope, label: "Cosmetic & Laser Surgeon" },
  { icon: Heart, label: "Hair Transplant Surgeon" },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-rose opacity-20 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-luxe gold-border">
              <img src={doctor} alt={CLINIC.doctor} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-luxe max-w-[200px]">
              <div className="text-3xl font-display text-gradient-rose">10+</div>
              <div className="text-xs text-muted-foreground">Years of dermatology excellence</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Meet your specialist</div>
            <h2 className="text-4xl sm:text-5xl font-light text-brown leading-tight">
              {CLINIC.doctor}
              <span className="block text-base mt-3 font-sans tracking-widest uppercase text-muted-foreground">
                Dermatologist · Cosmetologist · Laser Surgeon
              </span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              With over a decade of clinical experience and international fellowships in dermatology
              and aesthetic medicine, Dr. Rangoli combines evidence-based science with an artist's eye —
              delivering safe, personalised, transformative results for every patient.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From advanced laser treatments to hair restoration and anti-ageing therapies, every
              consultation begins with one belief: <em className="text-brown">your skin deserves expert care</em>.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {creds.map((c) => (
                <div key={c.label} className="flex items-center gap-3 glass rounded-2xl p-4 shadow-soft">
                  <div className="h-10 w-10 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                    <c.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-sm text-brown">{c.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
