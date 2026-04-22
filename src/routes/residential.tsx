import { Link, createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { buildMeta } from "@/lib/site-content";

export const Route = createFileRoute("/residential")({
  head: () =>
    buildMeta(
      "Residential",
      "Explore Oviedo Properties residential development services in Surrey, British Columbia, focused on quality homes and lasting value.",
      "/residential",
    ),
  component: ResidentialPage,
});

function ResidentialPage() {
  return (
    <>
      <section className="page-banner site-section-tight">
        <div className="site-container max-w-5xl">
          <p className="eyebrow">Residential</p>
          <h1 className="page-title max-w-3xl">Homes designed for lasting memories and enduring quality.</h1>
          <p className="mt-6 lede">
            We build more than homes, we create spaces for lasting memories, designed to stand the test of time.
          </p>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <h2 className="section-title max-w-2xl">Thoughtful residential development with a clear long-term view.</h2>
            <p className="mt-6 lede">
              Oviedo Properties approaches residential development with an integrated perspective that connects
              planning, construction, and ongoing property stewardship. The result is a home experience shaped by
              quality materials, practical design, and enduring value.
            </p>
            <ul className="bullet-list mt-8 max-w-xl">
              <li>Integrated development and construction oversight from concept through completion.</li>
              <li>Quality-focused homes created to serve residents today and stand strong over time.</li>
              <li>Local expertise rooted in Surrey, British Columbia and surrounding communities.</li>
            </ul>
          </div>
          <div className="split-visual min-h-[28rem]">
            <img src="/assets/oviedo-building.png" alt="Residential property exterior developed by Oviedo Properties" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="site-section bg-section-tint/45">
        <div className="site-container grid gap-6 md:grid-cols-3">
          <article className="service-card">
            <div>
              <p className="eyebrow">Built to Last</p>
              <h2 className="text-2xl leading-tight text-foreground">Durable execution</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Every project is shaped with careful attention to build quality, practical use, and long-term performance.
              </p>
            </div>
          </article>
          <article className="service-card">
            <div>
              <p className="eyebrow">Livable Design</p>
              <h2 className="text-2xl leading-tight text-foreground">Comfort first</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Homes are planned for everyday living, with spaces that support both routine life and memorable moments.
              </p>
            </div>
          </article>
          <article className="service-card">
            <div>
              <p className="eyebrow">Local Focus</p>
              <h2 className="text-2xl leading-tight text-foreground">Surrey perspective</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                Our local understanding helps shape developments that feel rooted, relevant, and responsive to the market.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <div className="cta-band grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow text-primary-foreground/80">Next Step</p>
              <h2 className="section-title max-w-2xl text-primary-foreground">
                Connect with our team to learn more about residential opportunities.
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
