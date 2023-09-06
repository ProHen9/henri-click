import type { NextraThemeLayoutProps } from "nextra";
import Link from "next/link";
export default function Layout({ children }: NextraThemeLayoutProps) {
  return (
    <div>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="h-10"
      >
        <h2 className="ml-5 text-2xl  left-0">henri</h2>
        <nav className="mr-5  right-0">
          <Link className="mr-5" href="#projects">
            Projekte
          </Link>
          <Link href="/contakt">Kontaktieren</Link>
        </nav>
      </header>
      <div className="ml-5 mr-5">{children}</div>
    </div>
  );
}
