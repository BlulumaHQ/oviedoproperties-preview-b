import { Link, createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { getProjectBySlug } from "@/lib/project-data";
import { buildMeta } from "@/lib/site-content";

export const Route = createFileRoute("/projects/$projectSlug")({
  head: ({ params }) => {
    const project = getProjectBySlug(params.projectSlug);

    if (!project) {
      return buildMeta("Project", "Explore Oviedo Properties projects.", `/projects/${params.projectSlug}`);
    }

    return buildMeta(project.title, project.intro, `/projects/${project.slug}`);
  },
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { projectSlug } = Route.useParams();
  const project = getProjectBySlug(projectSlug);

  if (!project) {
    return (
      <section className="site-section">
        <div className="site-container max-w-3xl">
          <p className="eyebrow">Project</p>
          <h1 className="page-title">Project not found.</h1>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="site-section-tight border-b border-border bg-section-tint/55">
        <div className="site-container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="eyebrow">{project.status}</p>
            <h1 className="page-title max-w-4xl">{project.title}</h1>
            <p className="mt-6 lede max-w-3xl">{project.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.categories.map((category) => (
                <span key={category} className="rounded-md bg-background px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="split-visual min-h-[22rem]">
            <img src={project.gallery[0] ?? project.cardImage} alt={project.title} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="surface-panel p-8">
            <p className="eyebrow">Project Details</p>
            <ul className="bullet-list">
              {project.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Highlights</p>
            <div className="grid gap-4 md:grid-cols-2">
              {project.highlights.map((highlight) => (
                <div key={highlight} className="surface-panel p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">Feature</p>
                  <p className="mt-3 text-lg leading-8 text-foreground">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="site-section bg-section-tint/45">
        <div className="site-container">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Gallery</p>
              <h2 className="section-title">Real project imagery from Oviedo Properties</h2>
            </div>
            <Button asChild variant="ghost" className="px-0 text-primary hover:bg-transparent">
              <Link to={`/${project.categories[0]}` as "/residential" | "/commercial" | "/rental"}>Back to category</Link>
            </Button>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {project.gallery.map((image, index) => (
              <div key={image} className="split-visual min-h-[18rem]">
                <img src={image} alt={`${project.title} gallery image ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}