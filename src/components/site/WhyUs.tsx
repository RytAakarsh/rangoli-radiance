import { motion } from "framer-motion";
import { Microscope, UserCheck, ShieldCheck, Sparkles, Award, Heart } from "lucide-react";

const items = [
  { icon: Microscope, t: "Advanced Technology", d: "US-FDA approved lasers and cutting-edge dermatology equipment." },
  { icon: UserCheck, t: "Personalised Care", d: "Customised plans tailored to your skin, hair and lifestyle." },
  { icon: Award, t: "Expert Doctor", d: "10+ years of experience with international fellowships." },
  { icon: ShieldCheck, t: "Safe Procedures", d: "Strict hygiene, sterile protocols and patient-first safety." },
  { icon: Sparkles, t: "Luxury Experience", d: "A serene, world-class clinic environment for every visit." },
  { icon: Heart, t: "Honest Pricing", d: "Transparent packages with no hidden charges — ever." },
];

export function WhyUs() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Why Choose Us</div>
          <h2 className="text-4xl sm:text-5xl font-light text-brown">
            The <span className="italic text-gradient-rose">Dr. Rangoli</span> difference
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-3xl glass p-7 shadow-soft hover:shadow-luxe transition-all"
            >
              <div className="h-12 w-12 rounded-2xl bg-gradient-rose flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <it.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-medium text-brown">{it.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
