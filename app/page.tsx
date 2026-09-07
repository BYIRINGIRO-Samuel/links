import { Comparison } from "./components/comparison";
import { Countdown } from "./components/countdown";
import { Faq } from "./components/faq";
import { FinalCta } from "./components/final-cta";
import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { HowItWorks } from "./components/how-it-works";
import { Navbar } from "./components/navbar";
import { Pricing } from "./components/pricing";
import { EditorDemo } from "./components/editor-demo";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-1 flex-col bg-background">
      <Navbar />
      <Hero />
      <Countdown />
      <HowItWorks />
      <EditorDemo />
      <Comparison />
      <Pricing />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
