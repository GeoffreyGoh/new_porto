import Image from "next/image";
import { FiDownload, FiFolder } from "react-icons/fi";
import Window from "@/components/Window";
import PixelButton from "@/components/PixelButton";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="about" aria-label="About">
      <Window title="about.me" icon="📄">
        <div className="grid items-center gap-8 md:grid-cols-[1.6fr_1fr]">
          {/* Left: name, tagline, summary, actions */}
          <div className="order-2 md:order-1">
            <h1 className="font-display text-5xl leading-none text-accent-deep sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-3 font-display text-xl text-accent">
              {profile.tagline}
            </p>
            <p className="mt-4 max-w-prose leading-relaxed text-ink">
              {profile.summary}
            </p>

            {/* Stat chip */}
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-panel-bar px-4 py-1.5 font-display text-base text-accent-deep">
              <span aria-hidden="true">⭐</span>
              {profile.statChip}
            </p>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap gap-3">
              <PixelButton href="#projects" icon={<FiFolder />}>
                View Projects
              </PixelButton>
              <PixelButton
                href={profile.cv}
                variant="ghost"
                icon={<FiDownload />}
                download
              >
                Download CV
              </PixelButton>
            </div>
          </div>

          {/* Right: avatar in a small framed window */}
          <div className="order-1 mx-auto md:order-2">
            <div className="overflow-hidden rounded-xl border-4 border-white shadow-[var(--shadow-window)]">
              <Image
                src={profile.avatar}
                alt="Portrait of Geoffrey Gohtama"
                width={320}
                height={400}
                priority
                className="h-auto w-44 object-cover sm:w-56"
              />
            </div>
          </div>
        </div>
      </Window>
    </section>
  );
}
