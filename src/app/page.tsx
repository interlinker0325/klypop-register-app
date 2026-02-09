import { Hero } from "@/app/components/Hero";
import { HowItWorks } from "@/app/components/HowItWorks";
import { Benefits } from "@/app/components/Benefits";
import { FAQ } from "@/app/components/FAQ";
import { CTA } from "@/app/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Benefits />
      <FAQ />
      <CTA />
    </>
  );
}
