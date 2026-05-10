import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles, ShieldCheck, Award } from "lucide-react";
import hero from "@/assets/hero-model.jpg";
import { CLINIC } from "./constants";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-28 pb-16 overflow-hidden bg-gradient-hero">
      {/* floating glow blobs */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gradient-rose opacity-30 blur-3xl animate-float" />
      <div className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-gradient-gold opacity-25 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-rose/30 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-[0.2em] uppercase text-brown shadow-soft">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Pune's Premium Skin & Laser Clinic
            </div>
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.05] text-brown">
              Transform your <span className="italic text-gradient-rose font-medium">skin, hair</span> & confidence
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Advanced dermatology, laser & aesthetic treatments — designed around you, delivered with science, science and care by {CLINIC.doctor}.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-rose px-7 py-4 text-primary-foreground shadow-luxe hover:shadow-glow transition-all"
              >
                Book Consultation
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={CLINIC.whatsapp()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-foreground hover:bg-white transition-all"
              >
                <MessageCircle className="h-4 w-4 text-primary" />
                WhatsApp Now
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { icon: Award, k: "10+", v: "Years Expertise" },
                { icon: ShieldCheck, k: "5000+", v: "Happy Patients" },
                { icon: Sparkles, k: "30+", v: "Treatments" },
              ].map((s) => (
                <div key={s.v} className="text-center">
                  <s.icon className="h-5 w-5 mx-auto text-primary" />
                  <div className="mt-2 font-display text-2xl text-brown">{s.k}</div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-gold opacity-40 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-luxe gold-border">
                <img
                  src={hero}
                  alt="Glowing radiant skin transformation"
                  width={1080}
                  height={1920}
                  className="h-[560px] w-full object-cover"
                />
              </div>

              {/* floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-6 top-12 glass rounded-2xl px-4 py-3 shadow-soft"
              >
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-rose flex items-center justify-center text-primary-foreground text-xs">★</div>
                  <div>
                    <div className="text-xs font-semibold text-brown">4.9 / 5.0</div>
                    <div className="text-[10px] text-muted-foreground">500+ Reviews</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -right-4 bottom-16 glass rounded-2xl px-4 py-3 shadow-soft"
              >
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">FDA-Approved</div>
                <div className="text-sm font-semibold text-brown">Laser Technology</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
