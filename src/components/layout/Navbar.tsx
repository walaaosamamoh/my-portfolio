import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const [scrollSection, setScrollSection] = useState("home");

  // Derived while rendering: no state or effect needed
  const activeSection =
    pathname === "/"
      ? scrollSection
      : pathname.startsWith("/projects")
        ? "projects"
        : "";

  // Close the mobile menu when clicking outside it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".dropdown")) setOpenMenu(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Scroll spy: only runs on the home page
  useEffect(() => {
    if (pathname !== "/") return;

    const update = () => {
      const offset = 140; // a bit more than the navbar height
      let current = navLinks[0].id;

      for (const { id } of navLinks) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) current = id;
      }

      // Short last section (Contact) may never reach the offset
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) current = navLinks[navLinks.length - 1].id;

      setScrollSection(current);
    };

    // Run once after mount, inside a callback instead of the effect body
    const frame = requestAnimationFrame(update);

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-5xl rounded-2xl border border-white/10 bg-slate-950/70 shadow-xl shadow-teal-950/10 backdrop-blur-xl">
      <nav className="flex h-18 items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          to="/#home"
          onClick={() => setOpenMenu(false)}
          className="text-xl font-bold tracking-tight"
        >
          <span className="text-primary">&lt;</span>Walaa
          <span className="text-primary"> /&gt;</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            if (link.id === "contact") {
              return (
                <Link
                  key={link.id}
                  to={`/#${link.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-hover ${
                    isActive
                      ? "bg-primary-hover ring-2 ring-primary/50"
                      : "bg-primary"
                  }`}
                >
                  Get In Touch
                </Link>
              );
            }

            return (
              <Link
                key={link.id}
                to={`/#${link.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`border-b-2 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border-primary text-text"
                    : "border-transparent text-text-secondary hover:border-primary hover:text-text"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile navigation */}
        <div className="dropdown relative md:hidden">
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={openMenu}
            onClick={() => setOpenMenu((prev) => !prev)}
            className="text-text transition"
          >
            <Menu className="h-5 w-5" />
          </button>

          {openMenu && (
            <div className="absolute right-0 z-50 mt-3 w-48 overflow-hidden rounded-xl border border-white/20 bg-slate-950 shadow-xl">
              <div className="py-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;

                  return (
                    <Link
                      key={link.id}
                      to={`/#${link.id}`}
                      onClick={() => setOpenMenu(false)}
                      aria-current={isActive ? "location" : undefined}
                      className={`block px-4 py-2 text-sm font-medium transition ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-text-secondary hover:bg-white/10 hover:text-text"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}