import { Link, createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { buildMeta } from "@/lib/site-content";

export const Route = createFileRoute("/rental")({
  head: () =>
    buildMeta(
      "Rental",
      "Discover Oviedo Properties rental homes in desirable Surrey-area neighborhoods, managed by a dedicated in-house team.",
      "/rental",
    ),
  component: RentalPage,
});

function RentalPage() {
  return (
    <>
      <section className="page-banner site-section-tight">
        <div className="site-container max-w-5xl">
          <p className="eyebrow">Rental</p>
          <h1 className="page-title max-w-3xl">Rental homes managed with care by our dedicated in-house team.</h1>
          <p className="mt-6 lede">
            We offer rental homes in desirable neighborhoods, managed by our dedicated in-house team.
          </p>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <h2 className="section-title max-w-2xl">A rental experience built on responsiveness and quality.</h2>
            <p className="mt-6 lede">
              Oviedo Properties combines development knowledge with hands-on management so rental communities can be
              supported with consistency, practical care, and a strong standard for the resident experience.
            </p>
            <ul className="bullet-list mt-8 max-w-xl">
              <li>Homes located in desirable neighborhoods with a focus on comfort and livability.</li>
              <li>Dedicated in-house team support for ongoing property oversight and resident care.</li>
              <li>A quality-driven approach that helps maintain long-term value across the portfolio.</li>
            </ul>
          </div>
          <div className="split-visual min-h-[28rem]">
            <img src="/assets/oviedo-building.png" alt="Rental property managed by Oviedo Properties" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="site-section bg-section-tint/45">
        <div className="site-container grid gap-6 md:grid-cols-3">
          <article className="service-card">
            <p className="eyebrow">Neighborhoods</p>
            <h2 className="text-2xl leading-tight text-foreground">Well-situated homes</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Rental opportunities are centered in desirable locations that support daily convenience and comfort.
            </p>
          </article>
          <article className="service-card">
            <p className="eyebrow">Management</p>
            <h2 className="text-2xl leading-tight text-foreground">In-house oversight</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              A dedicated team manages operations with close attention to care, consistency, and responsiveness.
            </p>
          </article>
          <article className="service-card">
            <p className="eyebrow">Experience</p>
            <h2 className="text-2xl leading-tight text-foreground">Resident-focused service</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              The goal is a rental experience that feels stable, well maintained, and thoughtfully supported.
            </p>
          </article>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <div className="cta-band grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow text-primary-foreground/80">Rental Inquiries</p>
              <h2 className="section-title max-w-2xl text-primary-foreground">
                Reach out to our team for rental information and property-related support.
              </h2>
            </div>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/6 text-primary-foreground hover:bg-white/12 hover:text-primary-foreground">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
