import { profile } from "@/lib/data";

export default function Footer() {
  /* Rendered at build time — the year is the year of the last build. */
  return (
    <footer>
      <div className="container">
        <p>
          Designed &amp; built with <span className="heart">♥</span> by{" "}
          <strong>{profile.name}</strong> · © {new Date().getFullYear()} ·{" "}
          <a href={profile.github} target="_blank" rel="noopener noreferrer" style={{ color: "var(--acc2)" }}>
            github.com/itsnimadrs
          </a>
        </p>
      </div>
    </footer>
  );
}
