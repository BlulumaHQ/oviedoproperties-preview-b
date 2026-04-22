import { Link, createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { buildMeta, buildingImage, overviewImage, trustSignals } from "@/lib/site-content";

export const Route = createFileRoute("/company")({
  head: () =>
    buildMeta(
      "Company",
      "Learn more about Oviedo Properties, an integrated development and construction company based in Surrey, British Columbia.",
      "/company",
    ),
  component: CompanyPage,
});

function CompanyPage() {
  return (
    <>
      <section className="page-banner site-section-tight">
        <div className="site-container max-w-5xl">
          <p className="eyebrow">Company</p>
          <h1 className="page-title max-w-3xl">An integrated development and construction company with a long-view mindset.</h1>
          <p className="mt-6 lede">
            Oviedo Properties is based in Surrey, British Columbia and specializes in the investment, development,
            and management of diverse commercial, residential, and rental properties.
          </p>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="split-visual min-h-[28rem] order-last lg:order-first">
            <img src={overviewImage} alt="Oviedo Properties development project exterior" loading="lazy" />
          </div>
          <div>
            <h2 className="section-title max-w-2xl">Creating innovative and sustainable real estate solutions.</h2>
            <p className="mt-6 lede">
              We approach every property with a commitment to quality, thoughtful execution, and lasting stewardship.
              By combining development, construction, and management capabilities, we are able to move with clarity and continuity.
            </p>
            <p className="mt-6 lede">
              That integrated structure helps protect the intent of every project while supporting a consistent standard
              across residential, commercial, and rental environments.
            </p>
          </div>
        </div>
      </section>

      <section className="site-section bg-section-tint/45">
        <div className="site-container grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-stretch">
          <div className="split-visual min-h-[24rem]">
            <img src={buildingImage} alt="Oviedo Properties exterior architecture detail" loading="lazy" />
          </div>
          <div className="grid gap-6 md:grid-cols-1">
          {trustSignals.map((signal) => (
            <article key={signal} className="service-card">
              <p className="eyebrow">Our Foundation</p>
              <h2 className="text-2xl leading-tight text-foreground">{signal}</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                This principle informs how we plan, build, and manage every property experience.
              </p>
            </article>
          ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">What We Do</p>
            <h2 className="section-title max-w-2xl">Residential, commercial, rental, and property management expertise in one team.</h2>
          </div>
          <div className="surface-panel p-8">
            <ul className="bullet-list">
              <li>Residential development built around quality and everyday livability.</li>
              <li>Commercial spaces supporting retail, industrial, and office uses.</li>
              <li>Rental properties managed with dedicated in-house attention.</li>
              <li>Property management informed by hands-on operational understanding.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="site-section pt-0">
        <div className="site-container">
          <div className="cta-band grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow text-primary-foreground/80">Let&apos;s Connect</p>
              <h2 className="section-title max-w-2xl text-primary-foreground">
                Learn more about Oviedo Properties and the work we do across Surrey and beyond.
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
