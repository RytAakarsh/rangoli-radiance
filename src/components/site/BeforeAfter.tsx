import { useRef, useState } from "react";
import { motion } from "framer-motion";
import beforeAfter from "@/assets/before-after.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };

  return (
    <section id="results" className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Real Transformations</div>
          <h2 className="text-4xl sm:text-5xl font-light text-brown">
            Results that <span className="italic text-gradient-rose">speak louder</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Drag the slider to explore real before & after results from our clinic.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div
            ref={ref}
            onMouseMove={(e) => e.buttons === 1 && onMove(e.clientX)}
            onTouchMove={(e) => onMove(e.touches[0].clientX)}
            onMouseDown={(e) => onMove(e.clientX)}
            className="relative aspect-[3/2] rounded-[2rem] overflow-hidden shadow-luxe gold-border cursor-ew-resize select-none"
          >
            <img src={beforeAfter} alt="After treatment" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
              <img src={beforeAfter} alt="Before treatment" className="absolute inset-0 h-full w-full object-cover" style={{ filter: "saturate(0.7) brightness(0.9)" }} />
            </div>
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-xs uppercase tracking-widest">Before</div>
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-rose text-primary-foreground text-xs uppercase tracking-widest">After</div>
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-glow"
              style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-gradient-gold flex items-center justify-center text-white shadow-luxe">
                ⇄
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
