import { Link, createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import {
  buildMeta,
  buildingImage,
  heroBackgroundVideo,
  heroShowcaseVideo,
  overviewImage,
  services,
  trustSignals,
} from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () =>
    buildMeta(
      "Homepage",
      "Oviedo Properties is a leading real estate development and construction company in Surrey, BC, specializing in sustainable commercial, residential, and rental property solutions.",
      "/",
    ),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="site-section">
        <div className="site-container">
          <div className="hero-frame">
            <div className="grid min-h-[38rem] lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative flex flex-col justify-between gap-10 overflow-hidden px-6 py-12 text-primary-foreground sm:px-10 lg:px-12 lg:py-14">
                <video
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src={heroBackgroundVideo} type="video/mp4" />
                </video>
                <div className="hero-overlay absolute inset-0" />
                <div className="relative z-10 max-w-3xl">
                  <span className="eyebrow text-primary-foreground/82">Property Management Company</span>
                  <h1 className="display-title max-w-3xl">Crafting Quality, Creating Legacy</h1>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-primary-foreground/82 md:text-lg">
                    Oviedo Properties is an integrated development and construction company based in Surrey,
                    British Columbia, delivering residential, commercial, and rental properties with a focus on
                    innovative and sustainable real estate solutions.
                  </p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Button asChild size="lg" variant="hero">
                      <Link to="/company">Learn More About Us</Link>
                    </Button>
                    <Button asChild size="lg" variant="inverse">
                      <Link to="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>

                <div className="relative z-10 grid gap-4 sm:grid-cols-3">
                  <div className="metric-card">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/70">
                      Residential
                    </p>
                    <p className="mt-3 text-sm leading-7 text-primary-foreground/84">
                      Spaces for lasting memories, designed to stand the test of time.
                    </p>
                  </div>
                  <div className="metric-card">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/70">
                      Commercial
                    </p>
                    <p className="mt-3 text-sm leading-7 text-primary-foreground/84">
                      Retail, industrial, and office environments with user experience in mind.
                    </p>
                  </div>
                  <div className="metric-card">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/70">
                      Rental
                    </p>
                    <p className="mt-3 text-sm leading-7 text-primary-foreground/84">
                      Desirable neighborhoods managed by our dedicated in-house team.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between bg-card px-6 py-10 sm:px-10 lg:px-12">
                <div>
                  <span className="eyebrow">Integrated Expertise</span>
                  <h2 className="section-title max-w-xl">A real estate partner built around quality and continuity.</h2>
                  <p className="mt-6 lede max-w-xl">
                    We invest, develop, and manage diverse properties with an approach that balances strong
                    execution, lasting value, and a refined experience for owners, residents, and commercial users.
                  </p>
                  <div className="split-visual mt-8 min-h-[16rem] overflow-hidden">
                    <video className="h-full w-full object-cover" autoPlay loop muted playsInline preload="metadata">
                      <source src={heroShowcaseVideo} type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className="trust-strip mt-10">
                  {trustSignals.map((signal) => (
                    <div key={signal} className="rounded-md border border-border/70 bg-background px-5 py-5">
                      <p className="text-sm font-semibold leading-7 text-foreground">{signal}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section pt-0">
        <div className="site-container grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="service-card gap-8">
              <div>
                <p className="eyebrow">{service.title}</p>
                <h2 className="text-3xl leading-tight text-foreground">{service.title}</h2>
                <p className="mt-5 text-base leading-8 text-muted-foreground">{service.summary}</p>
              </div>
              <Button asChild variant="ghost" className="justify-start px-0 text-primary hover:bg-transparent">
                <Link to={service.to}>{service.cta}</Link>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="site-section bg-section-tint/45">
        <div className="site-container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="split-visual min-h-[24rem]">
            <img src={overviewImage} alt="Modern Oviedo Properties development exterior" loading="lazy" />
          </div>
          <div>
            <span className="eyebrow">About Us</span>
            <h2 className="section-title max-w-2xl">Building and managing places that are meant to last.</h2>
            <p className="mt-6 lede">
              Oviedo Properties brings together development insight, construction discipline, and day-to-day
              property management under one roof. That integration allows us to guide projects with consistency
              from planning through long-term stewardship.
            </p>
            <ul className="bullet-list mt-8 max-w-2xl">
              <li>Residential communities shaped for comfort, durability, and long-term livability.</li>
              <li>Commercial environments designed around retail, industrial, and office user needs.</li>
              <li>Rental homes supported by a responsive in-house team and thoughtful ongoing management.</li>
            </ul>
            <div className="mt-8">
              <Button asChild size="lg" variant="hero">
                <Link to="/company">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <div className="cta-band grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow text-primary-foreground/80">Surrey, British Columbia</p>
              <h2 className="section-title max-w-2xl text-primary-foreground">
                Ready to connect with a property team focused on quality, innovation, and lasting value?
              </h2>
            </div>
            <Button asChild size="lg" variant="inverse">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
