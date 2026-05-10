import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const reviews = [
  { name: "Priya S.", treatment: "Laser Hair Reduction", text: "Truly the best clinic in Pune! Painless, professional and results from session 2 itself. Dr. Rangoli is so caring." },
  { name: "Aditi M.", treatment: "Acne & Pigmentation", text: "Years of acne scars finally faded. The team is honest about timelines — no false promises, just real results." },
  { name: "Sneha P.", treatment: "MediFacial", text: "Felt like a 5-star spa experience. My skin has never glowed like this. Booking my next session already!" },
  { name: "Rohan K.", treatment: "PRP Hair Therapy", text: "Hair fall reduced drastically in 3 sessions. Doctor explains everything in detail. Highly recommended." },
  { name: "Kavya R.", treatment: "Carbon Laser", text: "Instant glow before my wedding! The clinic is gorgeous and the staff treats you like royalty." },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 lg:py-32 bg-gradient-soft relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Patient Stories</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-brown">
            Loved by <span className="italic text-gradient-rose">5000+</span> patients
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-3xl bg-card p-7 shadow-soft hover:shadow-luxe transition-all"
            >
              <Quote className="absolute -top-3 left-6 h-8 w-8 text-primary opacity-30" />
              <div className="flex gap-1">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-4 text-foreground/80 leading-relaxed italic">"{r.text}"</p>
              <div className="mt-6 pt-5 border-t border-border">
                <div className="font-medium text-brown">{r.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{r.treatment}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
