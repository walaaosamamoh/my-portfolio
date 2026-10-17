import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/#contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (!target.closest(".dropdown")) {
        setOpenMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setActiveSection(href.slice(1));
    setOpenMenu(false);
  };

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-5xl rounded-2xl border border-white/10 bg-slate-950/70 shadow-xl shadow-teal-950/10 backdrop-blur-xl">
      <nav className="flex h-18 items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick("#home")}
          className="text-xl font-bold tracking-tight"
        >
          <span className="text-primary">&lt;</span>Walaa
          <span className="text-primary"> {"  "}/&gt;</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);

            return (
              <>
                {link.label === "Contact" ? (
                  <a
                    href={link.href}
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    aria-current={isActive ? "location" : undefined}
                    className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-hover"
                  >
                    Get In Touch
                  </a>
                ) : (
                  <a
                    href={link.href}
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    aria-current={isActive ? "location" : undefined}
                    className={`border-b-2 py-2 text-sm font-medium transition ${
                      isActive
                        ? "border-primary text-text"
                        : "border-transparent text-text-secondary hover:border-primary hover:text-text"
                    }`}
                  >
                    {link.label}
                  </a>
                )}
              </>
            );
          })}
        </div>

        {/* Mobile navigation */}
        <div className="relative md:hidden dropdown">
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
                  const isActive = activeSection === link.href.slice(1);

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`block px-4 py-2 text-sm font-medium transition ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-text-secondary hover:bg-white/10 hover:text-text"
                      }`}
                    >
                      {link.label}
                    </a>
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
