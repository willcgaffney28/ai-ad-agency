import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { Values } from "@/components/sections/Values";
import { Objectives } from "@/components/sections/Objectives";
import { Space } from "@/components/sections/Space";
import { Footer } from "@/components/sections/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Mission />
      <Values />
      <Objectives />
      <Space />
      <Footer />
    </main>
  );
}
