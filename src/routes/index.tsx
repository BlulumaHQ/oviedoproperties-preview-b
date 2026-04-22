import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeDollarSign,
  Building2,
  ChartNoAxesCombined,
  CircleCheckBig,
  HandCoins,
  KeyRound,
  ShieldCheck,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { buildMeta, heroBackgroundVideo, overviewImage } from "@/lib/site-content";
import { getProjectsByCategory, projects } from "@/lib/project-data";

export const Route = createFileRoute("/")({
  head: () =>
    buildMeta(
      "Premium Real Estate Development in Surrey",
      "Explore premium residential, commercial, and rental properties shaped for better living, lasting value, and confident investment.",
      "/",
    ),
  component: Index,
});

function Index() {
  const featuredProjects = [
    ...getProjectsByCategory("residential").slice(0, 2),
    ...getProjectsByCategory("commercial").slice(0, 1),
    ...getProjectsByCategory("rental").slice(0, 1),
  ];

  const serviceItems = [
    {
      icon: KeyRound,
      title: "Buying",
      body: "Browse real projects with clearer positioning, stronger presentation, and direct access to the right next conversation.",
      cta: "Explore Properties",
      to: "/residential" as const,
    },
    {
      icon: BadgeDollarSign,
      title: "Selling",
      body: "Showcase opportunities with a premium brand experience that helps serious buyers move from interest to inquiry faster.",
      cta: "Book Consultation",
      to: "/contact" as const,
    },
    {
      icon: Building2,
      title: "Property Management",
      body: "Support rental and mixed-use properties with an in-house team focused on continuity, care, and long-term value.",
      cta: "View Rental Portfolio",
      to: "/rental" as const,
    },
    {
      icon: ChartNoAxesCombined,
      title: "Investment Consulting",
      body: "Understand the project mix, development direction, and portfolio potential with a more strategic overview.",
      cta: "View Company",
      to: "/company" as const,
    },
  ];

  const trustStats = [
    { value: `${projects.length}+`, label: "real project pages" },
    { value: `${projects.filter((project) => /now|coming/i.test(project.status)).length}+`, label: "active opportunities" },
    { value: `${projects.filter((project) => /leasing/i.test(project.status)).length}+`, label: "leasing projects" },
    { value: "1:1", label: "consultation-led experience" },
  ];

  const credibilityItems = [
    "Real project inventory with authentic images and individual project detail pages.",
    "Residential, commercial, and rental experience presented through one cohesive premium brand.",
    "Clean decision-making paths that direct buyers, tenants, and partners toward action quickly.",
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discover the right fit",
      body: "Start with curated residential, commercial, or rental opportunities that match your goals.",
    },
    {
      number: "02",
      title: "Review with clarity",
      body: "See the project story, imagery, status, and details in a cleaner, higher-trust presentation.",
    },
    {
      number: "03",
      title: "Move forward confidently",
      body: "Book a direct consultation and continue with the team best suited to your next step.",
    },
  ];

  return (
    <>
      <section className="site-section pb-14 pt-5 md:pb-18 md:pt-7 lg:pb-20 lg:pt-8">
        <div className="site-container">
          <div className="hero-frame min-h-[40rem] md:min-h-[44rem]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            >
              <source src={heroBackgroundVideo} type="video/mp4" />
            </video>
            <div className="hero-overlay absolute inset-0" />

            <div className="relative z-10 grid min-h-[40rem] items-end gap-8 px-6 py-10 sm:px-8 md:min-h-[44rem] md:px-10 md:py-12 lg:grid-cols-[1.1fr_0.55fr] lg:px-14 lg:py-14">
              <div className="max-w-3xl self-center">
                <span className="eyebrow text-primary-foreground/80">Premium Real Estate Service</span>
                <h1 className="display-title max-w-4xl">Helping You Buy &amp; Sell Real Estate with Confidence</h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-primary-foreground/82 md:text-lg">
                  A more refined way to explore Oviedo Properties — real developments, stronger trust signals, and a cleaner path to serious inquiry.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Button asChild size="lg" variant="hero" className="rounded-full px-8">
                    <Link to="/contact">Book a Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="inverse" className="rounded-full px-8">
                    <Link to="/residential">View Listings</Link>
                  </Button>
                </div>

                <div className="mt-8 flex flex-wrap gap-3 text-sm text-primary-foreground/82">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/8 px-4 py-2 backdrop-blur-sm">
                    <ShieldCheck size={16} />
                    <span>Trusted real portfolio</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/8 px-4 py-2 backdrop-blur-sm">
                    <CircleCheckBig size={16} />
                    <span>Premium presentation</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/8 px-4 py-2 backdrop-blur-sm">
                    <Star size={16} className="fill-current" />
                    <span>Clear next steps</span>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 self-end">
                {trustStats.map((item) => (
                  <div key={item.label} className="metric-card">
                    <p className="text-3xl font-semibold text-primary-foreground md:text-4xl">{item.value}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/68">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="site-section pt-0 scroll-mt-28">
        <div className="site-container">
          <div className="mb-10 max-w-3xl">
            <p className="eyebrow">Services</p>
            <h2 className="section-title">A clearer real estate experience built around trust, quality, and decisive action.</h2>
            <p className="mt-5 lede">
              Positioned immediately below the hero, these services create stronger hierarchy and make the brand&apos;s value obvious on first scroll.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceItems.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="service-card gap-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-section-tint text-primary">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-[1.55rem] leading-tight text-foreground">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.body}</p>
                  </div>
                  <Button asChild variant="ghost" className="mt-auto justify-start px-0 text-primary hover:bg-transparent">
                    <Link to={item.to}>
                      {item.cta}
                      <ArrowRight />
                    </Link>
                  </Button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="site-section bg-section-tint/45">
        <div className="site-container grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <p className="eyebrow">Properties / Listings</p>
            <h2 className="section-title max-w-2xl">Real projects, presented with the polish a premium brand should have.</h2>
            <p className="mt-5 lede">
              The homepage now surfaces authentic listings and project opportunities immediately, with stronger visual hierarchy and less friction.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" variant="hero" className="rounded-full px-8">
                <Link to="/residential">Browse Residential</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                <Link to="/commercial">View Commercial</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {featuredProjects.map((project) => (
              <article key={project.slug} className="listing-card">
                <div className="aspect-[4/3] overflow-hidden border-b border-border/70">
                  <img src={project.cardImage} alt={project.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="flex h-full flex-col gap-4 p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="eyebrow mb-0">{project.status}</span>
                  </div>
                  <div>
                    <h3 className="text-[1.45rem] leading-tight text-foreground">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.cardSummary}</p>
                  </div>
                  <Button asChild variant="ghost" className="mt-auto justify-start px-0 text-primary hover:bg-transparent">
                    <Link to="/projects/$projectSlug" params={{ projectSlug: project.slug }}>
                      View Project
                      <ArrowRight />
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="site-section scroll-mt-28">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">Trust</p>
            <h2 className="section-title">Built to feel more credible, more structured, and more valuable at first glance.</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {credibilityItems.map((item) => (
              <article key={item} className="service-card gap-5">
                <div className="flex items-center gap-1 text-primary">
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                </div>
                <p className="text-base leading-8 text-foreground">{item}</p>
              </article>
            ))}
          </div>

          <div className="trust-strip mt-6">
            {trustStats.map((item) => (
              <div key={item.label}>
                <p className="text-3xl font-semibold text-foreground">{item.value}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section bg-section-tint/45">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">Process</p>
            <h2 className="section-title">A premium path from first impression to consultation.</h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {processSteps.map((step) => (
              <article key={step.number} className="service-card gap-6">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background text-lg font-semibold text-primary">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-[1.6rem] leading-tight text-foreground">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="split-visual min-h-[28rem]">
            <img src={overviewImage} alt="Oviedo Properties development exterior" loading="lazy" />
          </div>
          <div>
            <p className="eyebrow">About</p>
            <h2 className="section-title max-w-2xl">A more established brand presence for buyers, tenants, and long-term partners.</h2>
            <p className="mt-5 lede">
              Oviedo Properties brings residential, commercial, and rental expertise together in one brand — now presented with cleaner spacing, better hierarchy, and clearer calls to action.
            </p>
            <p className="mt-5 text-sm leading-7 text-muted-foreground md:max-w-xl">
              The result is a homepage that feels more modern, trustworthy, and intentional from the first fold to the final CTA.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="hero" className="rounded-full px-8">
                <Link to="/company">Learn More About Oviedo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section pt-0">
        <div className="site-container">
          <div className="cta-band grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow text-primary-foreground/80">Book a Consultation</p>
              <h2 className="section-title max-w-2xl text-primary-foreground">Ready for a higher-converting, higher-trust real estate experience?</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-primary-foreground/82">
                Start the conversation with a consultation built around your property goals, timeline, and next opportunity.
              </p>
            </div>
            <Button asChild size="lg" variant="inverse" className="rounded-full px-8">
              <Link to="/contact">Get a Free Home Evaluation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}