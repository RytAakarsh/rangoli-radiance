import { Preloader } from "@/components/site/Preloader";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Offers } from "@/components/site/Offers";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { Social } from "@/components/site/Social";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { StickyCta } from "@/components/site/StickyCta";
import { Chatbot } from "@/components/site/Chatbot";

function App() {
  return (
    <div className="bg-background">
      <Preloader />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <BeforeAfter />
        <Offers />
        <WhyUs />
        <Testimonials />
        <Social />
        <Contact />
      </main>

      <Footer />
      <StickyCta />
      <Chatbot />
    </div>
  );
}

export default App;