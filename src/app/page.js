import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Biography from "@/components/Biography";
import Skills from "@/components/skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Biography/>
      <Education/>
      <Skills/>
      <Contact/>
    </main>
  );
}
