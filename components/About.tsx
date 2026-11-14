import { facts, stats, type Fact } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal className="sec-head">
          <SectionHead
            tag="01. About Me"
            title={
              <>
                A developer who <em>cares about the details</em>
              </>
            }
          />
        </Reveal>
        <Reveal className="stats-row">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </Reveal>
        <div className="about-grid">
          <Reveal className="about-text">
            <p>
              I&apos;m a front-end developer based in <strong>Tehran, Iran</strong>, holding a B.Sc.
              in Computer Engineering (Software) and currently pursuing my Master&apos;s degree. I
              specialize in <strong>React and JavaScript</strong>, designing and developing
              attractive, efficient websites with a strong focus on UI/UX quality.
            </p>
            <p>
              My journey runs from a <strong>+400-hour React bootcamp at Maktab Sharif</strong>{" "}
              through hands-on industry work: building a Help Center UI with React &amp; TypeScript
              at <strong>TOSSAM</strong>, managing organizational networks as an IT Administrator,
              and currently supporting <strong>Laboratory Information Systems</strong> with heavy
              SQL and reporting work.
            </p>
            <p>
              I&apos;m highly motivated to keep expanding my skills — currently deepening{" "}
              <strong>TypeScript, Next.js and full-stack development</strong> — and I&apos;m looking
              for opportunities where I can build great products with great people.
            </p>
          </Reveal>
          <Reveal className="facts" delay={0.15}>
            {facts.map((f: Fact) => (
              <div className="fact" key={f.key}>
                <span className="k">{f.key}</span>
                <span className="v" style={f.highlight ? { color: "#34d399" } : undefined}>
                  {f.value}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
