import { Link, createFileRoute } from "@tanstack/react-router";

import { ContactForm } from "@/components/site/contact-form";
import { Button } from "@/components/ui/button";
import { buildMeta, primaryEmail, primaryPhone, streetAddress } from "@/lib/site-content";

export const Route = createFileRoute("/customer-care")({
  head: () =>
    buildMeta(
      "Customer Care",
      "Connect with Oviedo Properties customer care for rental, residential, commercial, and property management support in Surrey, British Columbia.",
      "/customer-care",
    ),
  component: CustomerCarePage,
});

function CustomerCarePage() {
  return (
    <>
      <section className="page-banner site-section-tight">
        <div className="site-container max-w-5xl">
          <p className="eyebrow">Customer Care</p>
          <h1 className="page-title max-w-3xl">Support shaped by responsiveness, clarity, and an in-house standard of care.</h1>
          <p className="mt-6 lede">
            Our dedicated in-house team is here to help with property-related questions and direct you to the right next step.
          </p>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="contact-card">
              <p className="eyebrow">Reach Our Team</p>
              <div className="space-y-3 text-sm leading-7 text-muted-foreground">
                <p>{streetAddress}</p>
                <p>
                  Phone:{' '}
                  <a className="footer-link" href={`tel:${primaryPhone.replace(/\./g, "")}`}>
                    {primaryPhone}
                  </a>
                </p>
                <p>
                  Email:{' '}
                  <a className="footer-link" href={`mailto:${primaryEmail}`}>
                    {primaryEmail}
                  </a>
                </p>
              </div>
            </div>
            <div className="surface-panel p-8">
              <p className="eyebrow">Customer Care Focus</p>
              <ul className="bullet-list">
                <li>Helpful guidance for rental, residential, and commercial property questions.</li>
                <li>Support routed through a dedicated in-house team for continuity and accountability.</li>
                <li>Clear communication to help move requests toward the right solution.</li>
              </ul>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <section className="site-section bg-section-tint/45">
        <div className="site-container grid gap-6 md:grid-cols-3">
          <article className="service-card">
            <p className="eyebrow">Residential</p>
            <h2 className="text-2xl leading-tight text-foreground">Project inquiries</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Speak with the team about residential communities, availability, or general project information.
            </p>
          </article>
          <article className="service-card">
            <p className="eyebrow">Commercial</p>
            <h2 className="text-2xl leading-tight text-foreground">Property questions</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Connect regarding retail, industrial, or office property interests and management-related questions.
            </p>
          </article>
          <article className="service-card">
            <p className="eyebrow">Rental</p>
            <h2 className="text-2xl leading-tight text-foreground">Resident support</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              Reach our in-house team for rental property support and assistance with ongoing needs.
            </p>
          </article>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <div className="cta-band grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow text-primary-foreground/80">Need Direct Contact?</p>
              <h2 className="section-title max-w-2xl text-primary-foreground">
                Prefer a direct conversation? Reach out to our team by phone or email.
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
