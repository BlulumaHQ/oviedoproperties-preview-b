import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

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
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const headerNavigationItems = navigationItems.filter(
    (item) => item.to !== "/" && item.to !== "/contact",
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="site-container flex min-h-24 items-center justify-between gap-6 py-4">
          <Link aria-label="Oviedo Properties home" className="shrink-0" to="/">
            <img
              src="/assets/oviedo-logo.png"
              alt="Oviedo Properties"
              className="h-[75px] w-auto object-contain"
            />
          </Link>

          <div className="hidden flex-1 items-center justify-end gap-8 xl:flex">
            <nav className="flex items-center gap-4 2xl:gap-6" aria-label="Primary navigation">
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

            <Button asChild size="lg" variant="hero">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-border px-4 py-3 text-sm font-semibold tracking-[0.14em] text-foreground uppercase xl:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label="toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            Menu
          </button>
        </div>

        {menuOpen && (
          <div id="mobile-navigation" className="border-t border-border bg-background xl:hidden">
            <div className="site-container flex flex-col gap-2 py-5">
              {headerNavigationItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-md px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-foreground transition-colors hover:bg-accent"
                  activeProps={{ className: "rounded-md bg-accent px-4 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-primary" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild size="lg" variant="hero" className="mt-3 w-full">
                <Link to="/contact" onClick={() => setMenuOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        )}
      </header>

      <main key={pathname}>{children}</main>

      <footer className="border-t border-border bg-muted/35">
        <div className="site-container site-section-tight">
          <div className="footer-grid">
            <div className="space-y-5">
              <p className="footer-wordmark">{SITE_NAME}</p>
              <p className="max-w-sm text-sm leading-7 text-muted-foreground">
                Crafting quality, creating legacy through integrated residential, commercial,
                rental, and property management solutions across Surrey, British Columbia.
              </p>
            </div>

            <div aria-hidden="true" className="hidden lg:block" />

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground">
                Navigation
              </p>
              <div className="mt-4 flex flex-col">
                {navigationItems.map((item) => (
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
