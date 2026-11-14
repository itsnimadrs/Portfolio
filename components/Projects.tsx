import type { ReactElement } from "react";
import { profile, projects, type Project, type ProjectIcon } from "@/lib/data";
import {
  ArrowRightIcon,
  BagIcon,
  CheckIcon,
  CodeIcon,
  GithubIcon,
  ListIcon,
  StarIcon,
} from "./Icons";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const projectIcons: Record<ProjectIcon, ReactElement> = {
  bag: <BagIcon />,
  list: <ListIcon />,
  check: <CheckIcon />,
  code: <CodeIcon />,
};

const topClass = (i: number) => `proj-top pt-${(i % 5) + 1}`;

function Card({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal className={project.featured ? "proj featured" : "proj"} delay={(index % 2) * 0.1}>
      <div className={topClass(index)}>{projectIcons[project.icon]}</div>
      <div className="proj-body">
        <div className="proj-meta">
          <span>
            <span className="lang-dot" style={{ background: project.langColor }} />
            {project.lang}
          </span>
          {project.stars ? (
            <span>
              <StarIcon width={13} height={13} style={{ verticalAlign: "-2px", color: "#f1e05a" }} />{" "}
              {project.stars}
            </span>
          ) : null}
          {project.featured ? <span>Featured</span> : null}
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="proj-links">
          <a href={project.href} target="_blank" rel="noopener noreferrer">
            <GithubIcon />
            Source Code
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <Reveal className="sec-head">
          <SectionHead
            tag="03. Projects"
            title={
              <>
                Things I&apos;ve <em>built</em>
              </>
            }
            sub="Selected work from my GitHub — every card links straight to the source code."
          />
        </Reveal>
        <div className="proj-grid">
          {projects.map((project, i) => (
            <Card key={project.name} project={project} index={i} />
          ))}
          <Reveal className="more-card" delay={0.15}>
            <div>
              <b>And more on GitHub →</b>
              <span>
                back-server, bootcamp homework series &amp; experiments
                <br />
                18 public repositories and growing.
              </span>
              <a href={profile.reposUrl} target="_blank" rel="noopener noreferrer">
                Browse all repositories <ArrowRightIcon width={14} height={14} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
