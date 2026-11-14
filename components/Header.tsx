"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data";
import { MenuIcon, MoonIcon } from "./Icons";

export default function Header() {
  const [open, setOpen] = useState(false);

  /* Highlight the nav link of the section currently on screen. */
  useEffect(() => {
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-links a"));
    const sections = document.querySelectorAll<HTMLElement>("section[id]");
    const so = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((l) =>
              l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`)
            );
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => so.observe(s));
    return () => so.disconnect();
  }, []);

  function toggleTheme() {
    const root = document.documentElement;
    root.classList.toggle("light");
    try {
      localStorage.setItem("nr-theme", root.classList.contains("light") ? "light" : "dark");
    } catch {
      /* private mode — ignore */
    }
  }

  return (
    <header>
      <div className="container nav-inner">
        <a href="#home" className="logo">
          {"<"}
          <span>itsnimadrs</span>
          {" />"}
        </a>
        <ul className={open ? "nav-links open" : "nav-links"}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme" title="Toggle theme">
            <MoonIcon width={17} height={17} />
          </button>
          <a href={`mailto:${profile.email}`} className="resume-btn">
            Hire Me
          </a>
          <button
            id="hamburger"
            className="icon-btn"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <MenuIcon width={18} height={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
