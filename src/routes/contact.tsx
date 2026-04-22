import { createFileRoute } from "@tanstack/react-router";

import { ContactForm } from "@/components/site/contact-form";
import { buildMeta, primaryEmail, primaryPhone, streetAddress } from "@/lib/site-content";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildMeta(
      "Contact",
      "Contact Oviedo Properties in Surrey, British Columbia for residential, commercial, rental, and property management inquiries.",
      "/contact",
    ),
  component: ContactPage,
});

function ContactPage() {
  const mapQuery = encodeURIComponent(streetAddress);

  return (
    <>
      <section className="page-banner site-section-tight">
        <div className="site-container max-w-5xl">
          <p className="eyebrow">Contact</p>
          <h1 className="page-title max-w-3xl">Connect with Oviedo Properties in Surrey, British Columbia.</h1>
          <p className="mt-6 lede">
            Reach out for residential, commercial, rental, or property management inquiries and our team will help guide the conversation.
          </p>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="contact-card">
              <p className="eyebrow">Office</p>
              <h2 className="text-3xl leading-tight text-foreground">Oviedo Properties</h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground">
                <p>{streetAddress}</p>
                <p>
                  <span className="font-semibold text-foreground">Phone:</span>{' '}
                  <a className="footer-link" href={`tel:${primaryPhone.replace(/\./g, "")}`}>
                    {primaryPhone}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-foreground">Email:</span>{' '}
                  <a className="footer-link" href={`mailto:${primaryEmail}`}>
                    {primaryEmail}
                  </a>
                </p>
              </div>
            </div>
            <div className="map-frame min-h-[22rem]">
              <iframe
                title="Oviedo Properties location map"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-full min-h-[22rem] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
