import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import { FiTool } from "react-icons/fi";
import {
  SiC,
  SiCss,
  SiFigma,
  SiGithub,
  SiGradio,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiTailwindcss,
} from "react-icons/si";
import Window from "@/components/Window";
import { skillGroups } from "@/lib/data";

/** Map data.ts icon keys -> { icon component, brand color } */
const ICONS: Record<string, { Icon: IconType; color: string }> = {
  python: { Icon: SiPython, color: "#3776AB" },
  java: { Icon: FaJava, color: "#E76F00" },
  c: { Icon: SiC, color: "#283593" },
  html: { Icon: SiHtml5, color: "#E34F26" },
  css: { Icon: SiCss, color: "#1572B6" },
  javascript: { Icon: SiJavascript, color: "#F7DF1E" },
  react: { Icon: SiReact, color: "#61DAFB" },
  nextjs: { Icon: SiNextdotjs, color: "#000000" },
  tailwind: { Icon: SiTailwindcss, color: "#06B6D4" },
  scikitlearn: { Icon: SiScikitlearn, color: "#F7931E" },
  mysql: { Icon: SiMysql, color: "#4479A1" },
  github: { Icon: SiGithub, color: "#181717" },
  figma: { Icon: SiFigma, color: "#F24E1E" },
  gradio: { Icon: SiGradio, color: "#FF7C00" },
};

const FALLBACK = { Icon: FiTool, color: "#6b7280" };

export default function Skills() {
  return (
    <section id="skills" aria-label="Skills">
      <Window title="skills.exe" icon="🧩">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-lg border border-line bg-panel-bar/50 p-4"
            >
              <h3 className="font-display text-xl text-accent-deep">
                {group.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => {
                  const { Icon, color } = ICONS[skill.icon] ?? FALLBACK;
                  return (
                    <li
                      key={skill.name}
                      className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-3 py-1.5 text-sm font-medium text-ink shadow-sm"
                    >
                      <Icon
                        aria-hidden="true"
                        style={{ color }}
                        className="text-lg"
                      />
                      {skill.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </Window>
    </section>
  );
}
