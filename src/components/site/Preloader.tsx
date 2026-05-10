import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

export function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-soft"
        >
          <div className="relative">
            <div className="absolute inset-0 -m-10 rounded-full bg-gradient-gold opacity-30 blur-3xl animate-glow" />
            <motion.img
              src={logo}
              alt="Dr. Rangoli's Clinic"
              className="relative h-32 w-32 object-contain"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <div className="mt-6 h-px w-40 mx-auto overflow-hidden bg-border">
              <div className="h-full w-1/3 bg-gradient-gold animate-shimmer" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
