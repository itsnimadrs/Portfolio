"use client";

import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import { profile } from "@/lib/data";
import { GithubIcon, MailIcon, PhoneIcon, PinIcon, SendIcon } from "./Icons";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef(0);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  async function copyEmail(e: ReactMouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      /* clipboard unavailable — still show feedback so the mailto link works */
    }
    setCopied(true);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button className="copy-email" type="button" onClick={copyEmail} title="Click to copy">
      {copied ? "[ copied ✓ ]" : "[ click to copy ]"}
    </button>
  );
}

export default function Contact() {
  return (
    <section id="contact">
      <div className="container contact-wrap">
        <Reveal className="sec-head">
          <SectionHead
            tag="06. Contact"
            title={
              <>
                Let&apos;s build something <em>great together</em>
              </>
            }
            sub="I'm currently open to front-end and React developer opportunities. Whether you have a job offer, a project idea, or just want to say hi — my inbox is always open."
          />
        </Reveal>
        <Reveal className="contact-cards">
          <a className="ccard" href={`mailto:${profile.email}`}>
            <div className="ci">
              <MailIcon />
            </div>
            <span className="ck">Email</span>
            <span className="cv">{profile.email}</span>
            <CopyEmailButton />
          </a>
          <a className="ccard" href={profile.phoneHref}>
            <div className="ci">
              <PhoneIcon />
            </div>
            <span className="ck">Phone</span>
            <span className="cv">{profile.phone}</span>
          </a>
          <a className="ccard" href={profile.github} target="_blank" rel="noopener noreferrer">
            <div className="ci">
              <GithubIcon />
            </div>
            <span className="ck">GitHub</span>
            <span className="cv">@itsnimadrs</span>
          </a>
          <div className="ccard">
            <div className="ci">
              <PinIcon />
            </div>
            <span className="ck">Location</span>
            <span className="cv">{profile.location}</span>
          </div>
        </Reveal>
        <Reveal className="big-cta">
          <h3>
            Open to work — <span className="grad-text">remote &amp; on-site</span>
          </h3>
          <p>Front-End Developer · React · TypeScript · Based in Tehran</p>
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            Say Hello <SendIcon width={15} height={15} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
