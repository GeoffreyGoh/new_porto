import { FiAward } from "react-icons/fi";
import Window from "@/components/Window";
import { org } from "@/lib/data";

export default function Organization() {
  return (
    <section id="organization" aria-label="Leadership">
      <Window title="leadership.exe" icon="🏆">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
          {/* Left: current role */}
          <div>
            <div className="flex items-start gap-3">
              <FiAward
                aria-hidden="true"
                className="mt-1 shrink-0 text-2xl text-accent"
              />
              <div>
                <h2 className="font-display text-2xl leading-tight text-accent-deep">
                  {org.title}
                </h2>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-accent">
                  {org.timeframe}
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-prose leading-relaxed text-ink">
              {org.description}
            </p>

            {/* Prior roles */}
            <div className="mt-6">
              <h3 className="font-display text-lg text-muted">Prior roles</h3>
              <ul className="mt-2 flex flex-col gap-2">
                {org.priorRoles.map((r) => (
                  <li
                    key={`${r.role}-${r.org}`}
                    className="flex flex-wrap items-baseline gap-x-2 text-sm"
                  >
                    <span className="font-semibold text-accent-deep">
                      {r.role}
                    </span>
                    <span className="text-muted">— {r.org}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: metric stat blocks */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            {org.metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-lg border border-line bg-panel-bar/60 p-5 text-center"
              >
                <p className="font-display text-4xl leading-none text-accent">
                  {m.value}
                </p>
                <p className="mt-2 text-sm font-medium text-muted">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Window>
    </section>
  );
}
