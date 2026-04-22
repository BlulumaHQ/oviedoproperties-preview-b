import { Link, createFileRoute } from "@tanstack/react-router";

import { ProjectCard } from "@/components/site/project-card";
import { Button } from "@/components/ui/button";
import { categoryHeroVideos, getProjectsByCategory } from "@/lib/project-data";
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
  const projects = getProjectsByCategory("rental");

  return (
    <>
      <section className="page-banner site-section-tight">
        <div className="site-container grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
          <p className="eyebrow">Rental</p>
          <h1 className="page-title max-w-3xl">Rental projects with real availability context and project details.</h1>
          <p className="mt-6 lede">
            View the actual Oviedo rental portfolio, using the real project summaries, status labels, and photo galleries from the original website.
          </p>
          </div>
          <div className="split-visual min-h-[18rem] overflow-hidden">
            <video className="h-full w-full object-cover" autoPlay loop muted playsInline preload="metadata">
              <source src={categoryHeroVideos.rental} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Portfolio</p>
              <h2 className="section-title">{projects.length} real rental projects</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
              Every rental card opens its own project page with authentic imagery and source-derived details.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
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
            <Button asChild size="lg" variant="inverse">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
