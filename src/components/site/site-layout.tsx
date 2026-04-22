import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  navigationItems,
  primaryEmail,
  primaryPhone,
  services,
  SITE_NAME,
  streetAddress,
} from "@/lib/site-content";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const headerNavigationItems = navigationItems.filter((item) =>
    ["/", "/company", "/contact"].includes(item.to),
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border/60 bg-background/92 shadow-[var(--shadow-soft)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="site-container py-4">
          <div
            className={`flex min-h-20 items-center justify-between gap-4 rounded-full px-4 md:px-6 ${
              scrolled ? "bg-background/70" : "bg-background/20 backdrop-blur-md"
            }`}
          >
          <Link aria-label="Oviedo Properties home" className="shrink-0" to="/">
            <img
              src="/assets/oviedo-logo.png"
              alt="Oviedo Properties"
              className="h-[58px] w-auto object-contain md:h-[64px]"
            />
          </Link>

          <div className="hidden flex-1 items-center justify-end gap-5 xl:flex">
            <nav className="flex items-center gap-8" aria-label="Primary navigation">
              {headerNavigationItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="site-nav-link"
                  activeProps={{ className: "site-nav-link text-primary" }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Button asChild size="lg" variant="hero" className="min-w-[13rem] rounded-full px-7">
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/70 bg-background/80 text-foreground backdrop-blur xl:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label="toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Menu size={20} />
          </button>
        </div>
        </div>

        {menuOpen && (
          <div id="mobile-navigation" className="border-t border-border/60 bg-background/95 backdrop-blur-xl xl:hidden">
            <div className="site-container flex flex-col gap-2 py-5">
              {headerNavigationItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-accent"
                  activeProps={{ className: "rounded-2xl bg-accent px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild size="lg" variant="hero" className="mt-3 h-12 w-full rounded-full">
                <Link to="/contact" onClick={() => setMenuOpen(false)}>
                  Get Free Valuation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 w-full rounded-full">
                <Link to="/contact" onClick={() => setMenuOpen(false)}>
                  <Phone />
                  Book Consultation
                </Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      <main key={pathname}>{children}</main>

      <footer className="border-t border-border/60 bg-section-tint/35">
        <div className="site-container site-section-tight">
          <div className="footer-grid">
            <div className="space-y-5">
              <p className="footer-wordmark">{SITE_NAME}</p>
              <p className="max-w-sm text-sm leading-7 text-muted-foreground">
                Premium real estate development, leasing, and property expertise across Surrey and the Lower Mainland.
              </p>
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                <span>Trusted development partner</span>
                <span className="h-1 w-1 rounded-full bg-primary" />
                <span>Surrey, BC</span>
              </div>
            </div>

            <div aria-hidden="true" className="hidden lg:block" />

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
                Navigation
              </p>
              <div className="mt-4 flex flex-col">
                {headerNavigationItems.map((item) => (
                  <Link key={item.to} to={item.to} className="footer-link" activeOptions={{ exact: item.to === "/" }}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
                Services
              </p>
              <div className="mt-4 flex flex-col">
                {services.map((service) => (
                  <Link key={service.to} to={service.to} className="footer-link">
                    {service.title}
                  </Link>
                ))}
                <Link to="/customer-care" className="footer-link">
                  Customer Care
                </Link>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
                Contact
              </p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                <p>{streetAddress}</p>
                <p>
                  <a className="footer-link" href={`tel:${primaryPhone.replace(/\./g, "")}`}>
                    {primaryPhone}
                  </a>
                </p>
                <p>
                  <a className="footer-link" href={`mailto:${primaryEmail}`}>
                    {primaryEmail}
                  </a>
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-border/70 bg-background/80 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">Start the conversation</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Book a private consultation to discuss development, leasing, or investment opportunities.
              </p>
              <Button asChild size="lg" variant="hero" className="mt-5 h-11 w-full rounded-full">
                <Link to="/contact">Book Consultation</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border/70">
          <div className="site-container flex flex-col gap-2 py-5 md:flex-row md:items-center md:justify-between">
            <p className="footer-credit">
              © {new Date().getFullYear()} {SITE_NAME}. All rights reserved. | Web Design by{' '}
              <a
                className="transition-colors hover:text-primary"
                href="https://bluluma.com"
                rel="noreferrer"
                target="_blank"
              >
                Bluluma
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
