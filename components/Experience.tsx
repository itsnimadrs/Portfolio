import { experience } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal className="sec-head">
          <SectionHead
            tag="04. Experience"
            title={
              <>
                Where I&apos;ve <em>worked</em>
              </>
            }
            sub="A mix of front-end development and IT infrastructure — which makes me the rare front-end dev who also understands the network it runs on."
          />
        </Reveal>
        <div className="timeline">
          {experience.map((item) => (
            <Reveal className="titem" key={item.title}>
              <span className="tdate">{item.date}</span>
              {item.badge ? <span className="tbadge">{item.badge}</span> : null}
              <h3>{item.title}</h3>
              <span className="tcompany">{item.company}</span>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
