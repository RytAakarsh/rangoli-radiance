import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { CLINIC } from "./constants";

type Msg = { from: "bot" | "user"; text: string; options?: string[] };
type Step = "lang" | "name" | "phone" | "treatment" | "concern" | "done";

const t = {
  en: {
    greet: "Hi 👋 I'm Aria, your skin & hair assistant at Dr. Rangoli's clinic. Shall we begin?",
    lang: "Please choose a language",
    name: "What's your good name?",
    phone: "Thanks! Your WhatsApp number please:",
    treatment: "Which treatment are you interested in?",
    concern: "Briefly tell me your concern (optional)",
    done: "Thank you! We'll connect with you shortly. Tap below to chat with us on WhatsApp.",
  },
  hi: {
    greet: "नमस्ते 👋 मैं आरिया हूँ, Dr. Rangoli की क्लिनिक की assistant। शुरू करें?",
    lang: "कृपया भाषा चुनें",
    name: "आपका शुभ नाम क्या है?",
    phone: "धन्यवाद! कृपया WhatsApp नंबर दें:",
    treatment: "कौनसा treatment चाहिए?",
    concern: "अपनी concern बताइए (optional)",
    done: "धन्यवाद! हम जल्द संपर्क करेंगे। WhatsApp पर chat करें:",
  },
};

const treatments = ["Laser Hair Reduction", "Acne / Pigmentation", "MediFacial", "Hair / PRP", "Anti-Ageing", "Other"];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "hi">("en");
  const [step, setStep] = useState<Step>("lang");
  const [data, setData] = useState({ name: "", phone: "", treatment: "", concern: "" });
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "bot", text: t.en.greet },
    { from: "bot", text: t.en.lang, options: ["English", "हिंदी"] },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 99999, behavior: "smooth" });
  }, [msgs]);

  const push = (m: Msg) => setMsgs((p) => [...p, m]);

  const handleOption = (opt: string) => {
    push({ from: "user", text: opt });
    if (step === "lang") {
      const l = opt === "हिंदी" ? "hi" : "en";
      setLang(l);
      setStep("name");
      setTimeout(() => push({ from: "bot", text: t[l].name }), 400);
    } else if (step === "treatment") {
      setData((d) => ({ ...d, treatment: opt }));
      setStep("concern");
      setTimeout(() => push({ from: "bot", text: t[lang].concern }), 400);
    }
  };

  const send = () => {
    if (!input.trim()) return;
    const v = input.trim();
    push({ from: "user", text: v });
    setInput("");
    if (step === "name") {
      setData((d) => ({ ...d, name: v }));
      setStep("phone");
      setTimeout(() => push({ from: "bot", text: t[lang].phone }), 400);
    } else if (step === "phone") {
      setData((d) => ({ ...d, phone: v }));
      setStep("treatment");
      setTimeout(() => push({ from: "bot", text: t[lang].treatment, options: treatments }), 400);
    } else if (step === "concern") {
      setData((d) => ({ ...d, concern: v }));
      setStep("done");
      setTimeout(() => push({ from: "bot", text: t[lang].done }), 400);
    }
  };

  const waLink = () =>
    CLINIC.whatsapp(
      `Hi Dr. Rangoli,%0AName: ${data.name}%0APhone: ${data.phone}%0ATreatment: ${data.treatment}%0AConcern: ${data.concern}`
    );

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Chat with us"
        className="fixed bottom-20 lg:bottom-6 right-4 lg:right-6 z-50 h-14 w-14 rounded-full bg-gradient-rose shadow-luxe flex items-center justify-center text-primary-foreground animate-glow hover:scale-110 transition-transform"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-36 lg:bottom-24 right-4 lg:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-h-[70vh] rounded-3xl shadow-luxe gold-border bg-card flex flex-col overflow-hidden"
          >
            <div className="bg-gradient-rose p-4 text-primary-foreground flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium">Aria · Clinic Assistant</div>
                <div className="text-[11px] opacity-80">Online · Replies in seconds</div>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-soft">
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${m.from === "user" ? "bg-gradient-rose text-primary-foreground" : "bg-card shadow-soft text-foreground"}`}>
                    {m.text}
                    {m.options && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {m.options.map((o) => (
                          <button key={o} onClick={() => handleOption(o)} className="rounded-full bg-gradient-gold px-3 py-1 text-xs text-white hover:scale-105 transition-transform">
                            {o}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {step === "done" && (
                <a href={waLink()} target="_blank" rel="noreferrer" className="block text-center rounded-full bg-gradient-rose text-primary-foreground py-3 text-sm shadow-luxe">
                  Continue on WhatsApp →
                </a>
              )}
            </div>

            {step !== "done" && step !== "lang" && step !== "treatment" && (
              <div className="p-3 border-t border-border bg-card flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  placeholder="Type your message…"
                  className="flex-1 rounded-full bg-muted px-4 py-2.5 text-sm focus:outline-none"
                />
                <button onClick={send} className="h-10 w-10 rounded-full bg-gradient-rose flex items-center justify-center text-primary-foreground">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
