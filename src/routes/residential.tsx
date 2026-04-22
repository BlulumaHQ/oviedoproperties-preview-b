import { Link, createFileRoute } from "@tanstack/react-router";

import { ProjectCard } from "@/components/site/project-card";
import { Button } from "@/components/ui/button";
import { categoryHeroVideos, getProjectsByCategory } from "@/lib/project-data";
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
  const projects = getProjectsByCategory("residential");

  return (
    <>
      <section className="page-banner site-section-tight">
        <div className="site-container grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
          <p className="eyebrow">Residential</p>
          <h1 className="page-title max-w-3xl">Residential projects backed by real Oviedo developments.</h1>
          <p className="mt-6 lede">
            Browse the original residential portfolio, including active developments, completed communities, and individual project pages built from Oviedo Properties&apos; real website content and imagery.
          </p>
          </div>
          <div className="split-visual min-h-[18rem] overflow-hidden">
            <video className="h-full w-full object-cover" autoPlay loop muted playsInline preload="metadata">
              <source src={categoryHeroVideos.residential} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Portfolio</p>
              <h2 className="section-title">{projects.length} real residential projects</h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
              Each card links to an individual project page with original project descriptions and gallery images.
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
