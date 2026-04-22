import { Link, createFileRoute } from "@tanstack/react-router";

import { ProjectCard } from "@/components/site/project-card";
import { Button } from "@/components/ui/button";
import { categoryHeroVideos, getProjectsByCategory } from "@/lib/project-data";
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
  const projects = getProjectsByCategory("commercial");

  return (
    <>
      <section className="page-banner site-section-tight">
        <div className="site-container grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
          <p className="eyebrow">Commercial</p>
          <h1 className="page-title max-w-3xl">Commercial projects with real leasing and property information.</h1>
          <p className="mt-6 lede">
            Explore Oviedo Properties&apos; commercial portfolio using the original project imagery, status labels, and individual project detail content from the live website.
          </p>
          </div>
          <div className="split-visual min-h-[18rem] overflow-hidden">
            <video className="h-full w-full object-cover" autoPlay loop muted playsInline preload="metadata">
              <source src={categoryHeroVideos.commercial} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Portfolio</p>
              <h2 className="section-title">{projects.length} real commercial projects</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
              Includes live leasing-oriented properties and direct links to each dedicated project detail page.
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
