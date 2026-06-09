import Window from "@/components/Window";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" aria-label="Education">
      <Window title="education.log" icon="🎓">
        {/* Desktop: horizontal timeline */}
        <ol className="relative hidden md:block">
          {/* Track line */}
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-2 h-0.5 bg-line"
          />
          <div className="grid grid-cols-3 gap-6">
            {education.map((item) => (
              <li key={item.institution} className="relative pt-8">
                {/* Node */}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-0.5 h-4 w-4 rounded-full border-2 border-white shadow ${
                    item.current ? "bg-hill" : "bg-accent"
                  }`}
                />
                <p className="font-display text-xl text-accent">
                  {item.year}
                  {item.current && (
                    <span className="ml-2 rounded-full bg-hill/20 px-2 py-0.5 align-middle font-sans text-xs font-semibold text-hill">
                      Current
                    </span>
                  )}
                </p>
                <h3 className="mt-1 font-semibold text-accent-deep">
                  {item.institution}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  {item.detail}
                </p>
              </li>
            ))}
          </div>
        </ol>

        {/* Mobile: vertical timeline */}
        <ol className="relative ml-2 md:hidden">
          <span
            aria-hidden="true"
            className="absolute bottom-2 left-2 top-2 w-0.5 bg-line"
          />
          {education.map((item) => (
            <li key={item.institution} className="relative pb-6 pl-8 last:pb-0">
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-white shadow ${
                  item.current ? "bg-hill" : "bg-accent"
                }`}
              />
              <p className="font-display text-lg text-accent">
                {item.year}
                {item.current && (
                  <span className="ml-2 rounded-full bg-hill/20 px-2 py-0.5 align-middle font-sans text-xs font-semibold text-hill">
                    Current
                  </span>
                )}
              </p>
              <h3 className="mt-0.5 font-semibold text-accent-deep">
                {item.institution}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {item.detail}
              </p>
            </li>
          ))}
        </ol>
      </Window>
    </section>
  );
}
