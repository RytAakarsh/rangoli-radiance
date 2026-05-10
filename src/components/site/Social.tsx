import { Instagram, Youtube, Play } from "lucide-react";
import { CLINIC } from "./constants";
import beforeAfter from "@/assets/before-after.jpg";
import hero from "@/assets/hero-model.jpg";
import doctor from "@/assets/doctor.png";

const reels = [
  { img: hero, label: "Skin Glow Routine" },
  { img: beforeAfter, label: "Acne Transformation" },
  { img: doctor, label: "Doctor Q&A" },
  { img: hero, label: "Laser Treatment" },
];

const videos = [
  { id: "dQw4w9WgXcQ", title: "Skincare myths busted by a Dermatologist" },
  { id: "kJQP7kiw5Fk", title: "How Laser Hair Reduction actually works" },
];

export function Social() {
  return (
    <section className="py-24 sm:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Instagram */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Latest from Instagram</div>
            <h2 className="text-4xl sm:text-5xl font-light text-brown">
              <span className="italic text-gradient-rose">@dr.rangoli_jirwankar</span>
            </h2>
          </div>
          <a
            href={CLINIC.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-rose px-6 py-3 text-sm text-primary-foreground shadow-luxe"
          >
            <Instagram className="h-4 w-4" /> Follow
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {reels.map((r, i) => (
            <a
              key={i}
              href={CLINIC.instagram}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-[9/14] rounded-3xl overflow-hidden shadow-soft"
            >
              <img src={r.img} alt={r.label} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                <div className="flex items-center gap-2">
                  <Play className="h-4 w-4 fill-white" />
                  <span className="text-xs">{r.label}</span>
                </div>
              </div>
              <div className="absolute top-3 right-3 h-8 w-8 rounded-full glass flex items-center justify-center">
                <Instagram className="h-4 w-4 text-white" />
              </div>
            </a>
          ))}
        </div>

        {/* YouTube */}
        <div className="mt-24 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-primary mb-3">From our YouTube</div>
            <h2 className="text-4xl sm:text-5xl font-light text-brown">
              Skincare <span className="italic text-gradient-rose">Education</span>
            </h2>
          </div>
          <a
            href={CLINIC.youtube}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm text-foreground"
          >
            <Youtube className="h-4 w-4 text-primary" /> Subscribe
          </a>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {videos.map((v) => (
            <div key={v.id} className="rounded-3xl overflow-hidden shadow-luxe gold-border bg-card">
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-5">
                <div className="font-medium text-brown">{v.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
