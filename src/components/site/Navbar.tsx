import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { CLINIC } from "./constants";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#results", label: "Results" },
  { href: "#offers", label: "Offers" },
  { href: "#testimonials", label: "Stories" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-2 transition-all duration-500 ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2">
            <img src={logo} alt="" className="h-10 w-10 object-contain" />
            <div className="hidden sm:block leading-tight">
              <div className="font-display text-base font-semibold text-brown">Dr. Rangoli's</div>
              <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Skin · Hair · Laser</div>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-foreground/80 hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gradient-gold hover:after:w-full after:transition-all"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${CLINIC.phoneRaw}`}
              className="hidden md:inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary"
            >
              <Phone className="h-4 w-4" /> {CLINIC.phone}
            </a>
            <a
              href={CLINIC.whatsapp()}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center rounded-full bg-gradient-rose px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-luxe hover:scale-105 transition-transform"
            >
              Book Now
            </a>
            <button
              className="lg:hidden p-2 rounded-full glass"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden mt-2 glass rounded-3xl p-6 shadow-luxe">
            <div className="flex flex-col gap-4">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-foreground/80">
                  {l.label}
                </a>
              ))}
              <a
                href={CLINIC.whatsapp()}
                target="_blank"
                rel="noreferrer"
                className="mt-2 rounded-full bg-gradient-rose px-5 py-3 text-center text-primary-foreground"
              >
                Book Consultation
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
