import { Instagram, Youtube, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";
import { CLINIC } from "./constants";

export function Footer() {
  return (
    <footer className="bg-brown text-cream pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.78_0.12_55/0.2),transparent_60%)]" />
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="" className="h-12 w-12 object-contain bg-cream rounded-full p-1" />
              <div>
                <div className="font-display text-xl">Dr. Rangoli's Clinic</div>
                <div className="text-xs tracking-widest uppercase opacity-70">Skin · Hair · Laser</div>
              </div>
            </div>
            <p className="mt-5 text-sm opacity-80 max-w-md leading-relaxed">
              A premium dermatology and aesthetic clinic in Wagholi, Pune — combining advanced technology with heartfelt, personalised care.
            </p>
            <div className="mt-6 flex gap-3">
              <a href={CLINIC.instagram} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full glass-dark flex items-center justify-center hover:bg-gradient-rose transition-all"><Instagram className="h-4 w-4" /></a>
              <a href={CLINIC.youtube} target="_blank" rel="noreferrer" className="h-10 w-10 rounded-full glass-dark flex items-center justify-center hover:bg-gradient-rose transition-all"><Youtube className="h-4 w-4" /></a>
            </div>
          </div>
          <div>
            <div className="font-display text-lg mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm opacity-80">
              {["About", "Services", "Results", "Offers", "Contact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-gold transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-display text-lg mb-4">Get in touch</div>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" />{CLINIC.address}</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" />{CLINIC.phone}</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 text-xs opacity-60 text-center">
          © {new Date().getFullYear()} Dr. Rangoli's Skin, Hair & Laser Clinic. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
