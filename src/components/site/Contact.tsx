import { useState } from "react";
import { MapPin, Phone, Clock, Instagram, Youtube, Send } from "lucide-react";
import { CLINIC } from "./constants";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", concern: "", treatment: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Dr. Rangoli, I'd like to book a consultation.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0ATreatment: ${form.treatment}%0AConcern: ${form.concern}`;
    window.open(`https://wa.me/${CLINIC.phoneRaw}?text=${msg}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-gradient-soft relative overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Visit · Call · Book</div>
          <h2 className="text-4xl sm:text-5xl font-light text-brown">
            Begin your <span className="italic text-gradient-rose">transformation</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Book a personalised consultation with Dr. Rangoli today.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          {/* Form */}
          <form onSubmit={submit} className="rounded-3xl bg-card p-8 shadow-luxe gold-border">
            <h3 className="text-2xl font-medium text-brown">Book a Consultation</h3>
            <div className="mt-6 grid gap-4">
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your Name" className="w-full rounded-2xl bg-muted border border-border px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone Number" className="w-full rounded-2xl bg-muted border border-border px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              <select value={form.treatment} onChange={(e) => setForm({ ...form, treatment: e.target.value })} className="w-full rounded-2xl bg-muted border border-border px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="">Preferred Treatment</option>
                <option>Laser Hair Reduction</option>
                <option>Acne / Pigmentation</option>
                <option>MediFacial / Hydrafacial</option>
                <option>PRP / Hair Restoration</option>
                <option>Anti-Ageing / Botox</option>
                <option>Other</option>
              </select>
              <textarea value={form.concern} onChange={(e) => setForm({ ...form, concern: e.target.value })} placeholder="Tell us briefly about your concern…" rows={4} className="w-full rounded-2xl bg-muted border border-border px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-rose px-7 py-4 text-primary-foreground shadow-luxe hover:shadow-glow transition-all">
                <Send className="h-4 w-4" /> Send via WhatsApp
              </button>
              {sent && <div className="text-sm text-primary text-center">Opening WhatsApp… we'll respond shortly.</div>}
            </div>
          </form>

          {/* Info + map */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <InfoCard icon={MapPin} title="Visit us" lines={[CLINIC.address]} />
              <InfoCard icon={Phone} title="Call us" lines={[CLINIC.phone]} />
              <InfoCard icon={Clock} title="Timings" lines={["Mon–Sun · 11–2, 6–10", "Thursday Closed"]} />
              <InfoCard icon={Instagram} title="Social" lines={["@dr.rangoli_jirwankar"]} href={CLINIC.instagram} extraIcon={Youtube} extraHref={CLINIC.youtube} />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-luxe gold-border h-72">
              <iframe src={CLINIC.mapsEmbed} loading="lazy" className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, lines, href, extraIcon: Extra, extraHref }: any) {
  const Tag = href ? "a" : "div";
  return (
    <Tag href={href} target={href ? "_blank" : undefined} rel="noreferrer" className="block rounded-3xl bg-card p-5 shadow-soft hover:shadow-luxe transition-all">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-2xl bg-gradient-gold flex items-center justify-center"><Icon className="h-5 w-5 text-white" /></div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{title}</div>
      </div>
      <div className="mt-3 text-sm text-brown space-y-1">
        {lines.map((l: string) => <div key={l}>{l}</div>)}
      </div>
      {Extra && extraHref && (
        <a href={extraHref} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs text-primary"><Extra className="h-3.5 w-3.5" /> YouTube</a>
      )}
    </Tag>
  );
}
