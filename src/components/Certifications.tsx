import { FiExternalLink } from "react-icons/fi";
import { SiGooglecloud } from "react-icons/si";
import Window from "@/components/Window";
import PixelButton from "@/components/PixelButton";
import { certifications } from "@/lib/data";

export default function Certifications() {
  const { heading, intro, profileUrl, paths } = certifications;

  return (
    <section id="certifications" aria-label="Certifications">
      <Window title="certifications.exe" icon="🏅">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl text-accent-deep">{heading}</h2>
            <p className="mt-2 max-w-prose text-ink">{intro}</p>
          </div>
          <PixelButton
            href={profileUrl}
            variant="ghost"
            icon={<FiExternalLink />}
            external
          >
            View all on Google Skills
          </PixelButton>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {paths.map((path) => (
            <div
              key={path.title}
              className="flex flex-col rounded-lg border border-line bg-panel-bar/50 p-5"
            >
              <div className="flex items-center gap-3">
                <SiGooglecloud
                  aria-hidden="true"
                  className="text-2xl"
                  style={{ color: "#4285F4" }}
                />
                <h3 className="font-display text-xl leading-tight text-accent-deep">
                  {path.title}
                  {path.level && (
                    <span className="ml-2 rounded-full bg-accent/15 px-2 py-0.5 align-middle font-sans text-xs font-semibold text-accent-deep">
                      {path.level}
                    </span>
                  )}
                </h3>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-ink">
                {path.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {path.badges.map((badge) => (
                  <li
                    key={badge}
                    className="inline-flex items-center gap-1.5 rounded-md border border-line bg-white px-2.5 py-1 text-xs font-medium text-ink shadow-sm"
                  >
                    <span aria-hidden="true">🎖️</span>
                    {badge}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Window>
    </section>
  );
}
