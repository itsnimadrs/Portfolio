import { education } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <Reveal className="sec-head">
          <SectionHead
            tag="05. Education"
            title={
              <>
                Learning <em>never stops</em>
              </>
            }
          />
        </Reveal>
        <div className="edu-grid">
          {education.map((item, i) => (
            <Reveal className="edu" key={item.title} delay={i * 0.08}>
              <div className="edu-ico">{item.icon}</div>
              <div>
                <span className="edate">{item.date}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {item.certs?.map((cert) => (
                  <span className="cert" key={cert}>
                    {cert}
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
