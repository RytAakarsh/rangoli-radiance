import { MessageCircle, Calendar } from "lucide-react";
import { CLINIC } from "./constants";

export function StickyCta() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 p-3 pointer-events-none">
      <div className="glass shadow-luxe rounded-full p-1.5 flex gap-1 pointer-events-auto">
        <a href="#contact" className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-rose px-4 py-3 text-sm text-primary-foreground">
          <Calendar className="h-4 w-4" /> Book
        </a>
        <a href={CLINIC.whatsapp()} target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-card text-foreground px-4 py-3 text-sm">
          <MessageCircle className="h-4 w-4 text-primary" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
