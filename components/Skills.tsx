import { skillGroups } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Reveal className="sec-head">
          <SectionHead
            tag="02. Skills"
            title={
              <>
                My <em>tech toolbox</em>
              </>
            }
            sub="Everything I use to take an idea from a Figma frame to a fast, responsive, production-ready interface."
          />
        </Reveal>
        <div className="skill-groups">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} className="skill-group" delay={(i % 2) * 0.05 + Math.floor(i / 2) * 0.05}>
              <div className="sg-head">
                <div className={group.tone ? `sg-ico ${group.tone}` : "sg-ico"}>{group.icon}</div>
                <div>
                  <h3>{group.title}</h3>
                  <span className="sg-sub">{group.subtitle}</span>
                </div>
              </div>
              <div className="pills">
                {group.skills.map((skill) => (
                  <span className="pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
