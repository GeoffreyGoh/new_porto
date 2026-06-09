import Image from "next/image";
import { FiArrowUpRight, FiImage } from "react-icons/fi";
import Window from "@/components/Window";
import { projects, type Project } from "@/lib/data";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-line bg-white shadow-sm">
      {/* Screenshot / placeholder slot */}
      <div className="relative aspect-[16/9] w-full border-b border-line bg-panel-bar">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? `${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1 text-muted">
            <FiImage aria-hidden="true" className="text-3xl" />
            <span className="font-display text-sm">screenshot.png</span>
          </div>
        )}
        {project.badge && (
          <span className="absolute right-2 top-2 rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-white shadow-sm">
            {project.badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl leading-tight text-accent-deep">
          {project.title}
        </h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-accent">
          {project.role}
        </p>

        {project.metric && (
          <p className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-md border border-line bg-panel-bar px-2.5 py-1 font-display text-sm text-accent-deep">
            <span aria-hidden="true">📈</span>
            {project.metric}
          </p>
        )}

        <p className="mt-3 text-sm leading-relaxed text-ink">
          {project.description}
        </p>

        {/* Tags */}
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded border border-line bg-panel-bar px-2 py-0.5 text-xs font-medium text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* Link button pinned to bottom */}
        {project.link && (
          <div className="mt-auto pt-5">
            <a
              href={project.link.href}
              {...(project.link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="inline-flex items-center gap-1.5 rounded-md border border-accent/40 bg-white px-3 py-1.5 text-sm font-semibold text-accent-deep transition-colors hover:bg-accent/10"
            >
              {project.link.label}
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" aria-label="Projects">
      <Window title="projects/" icon="🗂️">
        <div className="grid items-stretch gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Window>
    </section>
  );
}
