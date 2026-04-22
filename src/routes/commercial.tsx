import { Link, createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { buildMeta } from "@/lib/site-content";

export const Route = createFileRoute("/commercial")({
  head: () =>
    buildMeta(
      "Commercial",
      "Learn about Oviedo Properties commercial development services for retail, industrial, and office spaces in Surrey, British Columbia.",
      "/commercial",
    ),
  component: CommercialPage,
});

function CommercialPage() {
  return (
    <>
      <section className="page-banner site-section-tight">
        <div className="site-container max-w-5xl">
          <p className="eyebrow">Commercial</p>
          <h1 className="page-title max-w-3xl">Commercial spaces shaped around quality and user experience.</h1>
          <p className="mt-6 lede">
            We specialize in building quality and managing retail, industrial, and office spaces, prioritizing the user experiences.
          </p>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="split-visual min-h-[28rem] order-last lg:order-first">
            <img src="/assets/oviedo-building.png" alt="Commercial development exterior from Oviedo Properties" loading="lazy" />
          </div>
          <div>
            <h2 className="section-title max-w-2xl">Commercial development backed by integrated oversight.</h2>
            <p className="mt-6 lede">
              From retail settings to industrial and office environments, our work emphasizes sound execution,
              operational functionality, and an experience that serves both businesses and the people who use the space every day.
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="surface-panel p-6">
                <p className="eyebrow">Retail</p>
                <p className="text-sm leading-7 text-muted-foreground">
                  Spaces designed to support visibility, access, and a smooth customer journey.
                </p>
              </div>
              <div className="surface-panel p-6">
                <p className="eyebrow">Industrial</p>
                <p className="text-sm leading-7 text-muted-foreground">
                  Practical facilities planned around performance, flow, and day-to-day usability.
                </p>
              </div>
              <div className="surface-panel p-6 md:col-span-2">
                <p className="eyebrow">Office</p>
                <p className="text-sm leading-7 text-muted-foreground">
                  Professional environments that balance efficient layouts with a refined experience for teams and visitors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section bg-section-tint/45">
        <div className="site-container grid gap-6 md:grid-cols-3">
          <article className="service-card">
            <p className="eyebrow">Development</p>
            <h2 className="text-2xl leading-tight text-foreground">End-to-end coordination</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              An integrated model helps keep development aligned from planning to delivery.
            </p>
          </article>
          <article className="service-card">
            <p className="eyebrow">Construction</p>
            <h2 className="text-2xl leading-tight text-foreground">Quality-first execution</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Strong attention to build quality supports durability, presentation, and long-term performance.
            </p>
          </article>
          <article className="service-card">
            <p className="eyebrow">Management</p>
            <h2 className="text-2xl leading-tight text-foreground">User-centered spaces</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Each environment is approached with the end user experience as a key priority.
            </p>
          </article>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <div className="cta-band grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow text-primary-foreground/80">Commercial Inquiry</p>
              <h2 className="section-title max-w-2xl text-primary-foreground">
                Talk with Oviedo Properties about commercial development and management opportunities.
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
