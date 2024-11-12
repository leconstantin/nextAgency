import AboutHero from "@/components/about/abouthero";
import AboutMission from "@/components/about/mission";
import Principles from "@/components/about/principles";
import Process from "@/components/about/process";
import AboutStory from "@/components/about/story";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
};
export default function Contact() {
  return (
    <main className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <AboutHero />
      <AboutStory />
      <Principles />
      <Process />
      <AboutMission />
    </main>
  );
}
