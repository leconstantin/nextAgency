import ServiceComparison from "@/components/home/compare";
import CtaAbout from "@/components/home/cta";

import DoAbout from "@/components/home/do";
import Hero from "@/components/home/hero";
import PerformanceAbout from "@/components/home/perfomance";
import People from "@/components/home/testimonial";
import LatestWorkShowcase from "@/components/home/work";
export default function Home() {
  return (
    <main className="text-white min-h-screen">
      <Hero />
      <svg
        className="fill-customback"
        viewBox="0 0 1440 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1440 0H0V57C720 0 1440 57 1440 57V0Z"></path>
      </svg>

      <DoAbout />
      <svg
        className="fill-gray-50 rotate-180"
        viewBox="0 0 1440 57"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1440 0H0V57C720 0 1440 57 1440 57V0Z"></path>
      </svg>
      <LatestWorkShowcase />
      <PerformanceAbout />
      <ServiceComparison />
      <People />
      <CtaAbout />
    </main>
  );
}
