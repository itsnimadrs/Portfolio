"use client";

import { useEffect, useRef } from "react";
import { profile, typewriterRoles } from "@/lib/data";
import { ArrowDownIcon, GithubIcon, MailIcon, PhoneIcon, ReposIcon } from "./Icons";

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  /* Typewriter loop — starts by deleting the SSR-rendered first role. */
  useEffect(() => {
    const el = typedRef.current;
    if (!el) return;
    let roleIndex = 0;
    let charIndex = typewriterRoles[0].length;
    let deleting = true;
    let timer = 0;

    const tick = () => {
      const current = typewriterRoles[roleIndex];
      if (deleting) {
        charIndex--;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % typewriterRoles.length;
          timer = window.setTimeout(tick, 420);
          return;
        }
        timer = window.setTimeout(tick, 34);
      } else {
        charIndex++;
        el.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          timer = window.setTimeout(tick, 1900);
          return;
        }
        timer = window.setTimeout(tick, 75);
      }
    };

    timer = window.setTimeout(tick, 1900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow mono">Hi, my name is</div>
          <h1>
            {profile.name}
            <span className="grad-text">.</span>
          </h1>
          <h2>
            I&apos;m a{" "}
            <span className="typed" ref={typedRef}>
              {typewriterRoles[0]}
            </span>
          </h2>
          <p>
            I design and build attractive, efficient and responsive web experiences with{" "}
            <strong>React</strong>, <strong>TypeScript</strong> and modern{" "}
            <strong>JavaScript</strong>. Passionate about clean UI/UX, always learning new
            technologies — currently expanding into full-stack development.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View My Work <ArrowDownIcon width={15} height={15} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get In Touch
            </a>
          </div>
          <div className="socials">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
              <GithubIcon />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" title="Email">
              <MailIcon />
            </a>
            <a href={profile.phoneHref} aria-label="Phone" title="Phone">
              <PhoneIcon />
            </a>
            <a href={profile.reposUrl} target="_blank" rel="noopener noreferrer" aria-label="Repositories" title="All repositories">
              <ReposIcon />
            </a>
          </div>
        </div>
        <div className="avatar-col">
          <div className="avatar-wrap">
            <div className="avatar-ring" />
            <div className="avatar-mono">NR</div>
            <span className="chip chip-1">React ⚛</span>
            <span className="chip chip-2">TypeScript</span>
            <span className="chip chip-3">Next.js</span>
          </div>
        </div>
      </div>
      <div className="scroll-hint">scroll</div>
    </section>
  );
}
