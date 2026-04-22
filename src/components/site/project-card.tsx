import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { type ProjectRecord, categoryLabels } from "@/lib/project-data";

export function ProjectCard({ project }: { project: ProjectRecord }) {
  return (
    <article className="service-card gap-6 overflow-hidden p-0">
      <div className="aspect-[4/3] overflow-hidden border-b border-border">
        <img src={project.cardImage} alt={project.title} className="h-full w-full object-cover" loading="lazy" />
      </div>

      <div className="flex h-full flex-col gap-5 px-6 pb-6 pt-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className="eyebrow mb-0">{project.status}</span>
          {project.categories.map((category) => (
            <span key={category} className="rounded-md bg-section-tint px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {categoryLabels[category]}
            </span>
          ))}
        </div>

        <div>
          <h2 className="text-2xl leading-tight text-foreground">{project.title}</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">{project.cardSummary}</p>
        </div>

        <Button asChild variant="ghost" className="mt-auto justify-start px-0 text-primary hover:bg-transparent">
          <Link to="/projects/$projectSlug" params={{ projectSlug: project.slug }}>
            View Project
          </Link>
        </Button>
      </div>
    </article>
  );
}