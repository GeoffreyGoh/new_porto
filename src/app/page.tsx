import Taskbar from "@/components/Taskbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import Organization from "@/components/Organization";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Taskbar />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-4 py-12 sm:px-6">
        {/* §2 Hero */}
        <Hero />

        {/* §3 Skills */}
        <Skills />

        {/* §4 Certifications */}
        <Certifications />

        {/* §5 Projects */}
        <Projects />

        {/* §6 Organization */}
        <Organization />

        {/* §7 Education */}
        <Education />
      </main>

      {/* §8 Footer */}
      <Footer />
    </>
  );
}
