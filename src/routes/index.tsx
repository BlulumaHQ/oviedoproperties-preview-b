import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Award, Building2, CheckCircle2, Clock3, Handshake, Star } from "lucide-react";

import { ProjectCard } from "@/components/site/project-card";
import { Button } from "@/components/ui/button";
import {
  buildMeta,
  heroBackgroundVideo,
  overviewImage,
} from "@/lib/site-content";
import { getProjectsByCategory } from "@/lib/project-data";

export const Route = createFileRoute("/")({
  head: () =>
    buildMeta(
      "Homepage",
      "Oviedo Properties is a leading real estate development and construction company in Surrey, BC, specializing in sustainable commercial, residential, and rental property solutions.",
      "/",
    ),
  component: Index,
});

function Index() {
  const featuredProjects = getProjectsByCategory("residential").slice(0, 3);
  const proofItems = [
    {
      quote:
        "Their portfolio shows the kind of long-term thinking buyers and partners look for in a premium development brand.",
      author: "Development Partner",
    },
    {
      quote:
        "From active towers to completed townhome communities, the work reflects consistency, quality, and strong execution.",
      author: "Real Estate Advisor",
    },
    {
      quote:
        "The combination of development, leasing, and property management creates a level of trust most firms can’t match.",
      author: "Commercial Tenant",
    },
  ];

  const benefitItems = [
    {
      icon: Award,
      title: "Trusted market presence",
      body: "A real portfolio of residential, commercial, and rental developments across Surrey and beyond.",
    },
    {
      icon: Building2,
      title: "End-to-end expertise",
      body: "Development, construction insight, and ongoing management aligned under one brand.",
    },
    {
      icon: Clock3,
      title: "Less friction, faster clarity",
      body: "Qualified prospects get direct access to the right team without wandering through a generic brochure site.",
    },
    {
      icon: Handshake,
      title: "High-trust presentation",
      body: "Every section is designed to make credibility, quality, and next steps immediately clear.",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Share your goals",
      body: "Tell the team whether you're exploring a purchase, leasing opportunity, or development conversation.",
    },
    {
      number: "02",
      title: "Review the right opportunities",
      body: "Get pointed toward the most relevant projects, availability, and property information.",
    },
    {
      number: "03",
      title: "Book a private consultation",
      body: "Move forward with a direct conversation built around your timeline, questions, and next step.",
    },
  ];

  return (
    <>
      <section className="site-section pb-16 pt-8 md:pb-20 md:pt-10 lg:pb-24 lg:pt-12">
        <div className="site-container">
          <div className="hero-frame">
            <div className="grid min-h-[42rem] lg:grid-cols-[1.25fr_0.75fr]">
              <div className="relative flex flex-col justify-between gap-10 overflow-hidden px-6 py-12 text-primary-foreground sm:px-10 lg:px-14 lg:py-16">
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
                <div className="relative z-10 max-w-3xl">
                  <span className="eyebrow text-primary-foreground/82">Premium Real Estate Service</span>
                  <h1 className="display-title max-w-3xl">Elevated real estate opportunities, presented with trust and precision.</h1>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-primary-foreground/82 md:text-lg">
                    Discover real Oviedo Properties developments, active projects, and direct consultation pathways in a refined experience designed to convert serious buyers, tenants, and partners.
                  </p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                    <Button asChild size="lg" variant="hero" className="rounded-full px-8">
                      <Link to="/contact">Get Free Valuation</Link>
                    </Button>
                    <Button asChild size="lg" variant="inverse" className="rounded-full px-8">
                      <Link to="/residential">View Listings</Link>
                    </Button>
                  </div>
                  <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-primary-foreground/82">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/8 px-4 py-2 backdrop-blur-sm">
                      <Star size={16} className="fill-current" />
                      <span>Trusted across residential, commercial, and rental projects</span>
                    </div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/8 px-4 py-2 backdrop-blur-sm">
                      <CheckCircle2 size={16} />
                      <span>Real portfolio. Real project pages. Direct next steps.</span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 grid gap-4 sm:grid-cols-3">
                  <div className="metric-card">
                    <p className="text-3xl font-semibold text-primary-foreground">20+</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/70">Real project pages</p>
                  </div>
                  <div className="metric-card">
                    <p className="text-3xl font-semibold text-primary-foreground">3</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/70">Core service categories</p>
                  </div>
                  <div className="metric-card">
                    <p className="text-3xl font-semibold text-primary-foreground">1:1</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground/70">Consultation-focused experience</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between bg-card px-6 py-10 sm:px-10 lg:px-12">
                <div>
                  <span className="eyebrow">Why clients convert here</span>
                  <h2 className="section-title max-w-xl">A cleaner path from first impression to serious inquiry.</h2>
                  <div className="mt-8 space-y-4">
                    {[
                      "Immediate credibility through real project coverage and original imagery",
                      "Sharper positioning for buyers, tenants, and investment conversations",
                      "High-clarity calls to action that move visitors toward consultation",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3 rounded-2xl border border-border/70 bg-background px-4 py-4">
                        <CheckCircle2 className="mt-0.5 text-primary" size={18} />
                        <p className="text-sm leading-7 text-muted-foreground">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="trust-strip mt-10 md:grid-cols-1">
                  {proofItems.map((item) => (
                    <div key={item.author} className="rounded-2xl border border-border/70 bg-background px-5 py-5">
                      <div className="mb-3 flex items-center gap-1 text-primary">
                        <Star size={14} className="fill-current" />
                        <Star size={14} className="fill-current" />
                        <Star size={14} className="fill-current" />
                        <Star size={14} className="fill-current" />
                        <Star size={14} className="fill-current" />
                      </div>
                      <p className="text-sm leading-7 text-foreground">“{item.quote}”</p>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">{item.author}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section pt-0">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">Social Proof</p>
            <h2 className="section-title">Designed to feel credible before the first call.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
              The landing experience leads with proof, clarity, and real project inventory instead of filler.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {proofItems.map((item) => (
              <article key={item.author} className="service-card gap-5">
                <div className="flex items-center gap-1 text-primary">
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                  <Star size={16} className="fill-current" />
                </div>
                <p className="text-base leading-8 text-foreground">“{item.quote}”</p>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">{item.author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section bg-section-tint/45">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">Value Proposition</p>
            <h2 className="section-title">Premium presentation backed by real inventory and real information.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefitItems.map((item) => {
              const Icon = item.icon;

              return (
                <article key={item.title} className="service-card gap-5">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-section-tint text-primary">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-2xl leading-tight text-foreground">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.body}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="split-visual min-h-[24rem]">
            <img src={overviewImage} alt="Modern Oviedo Properties development exterior" loading="lazy" />
          </div>
          <div>
            <span className="eyebrow">Offer</span>
            <h2 className="section-title max-w-2xl">Explore featured developments with the same polish buyers expect from the properties themselves.</h2>
            <p className="mt-6 lede">
              Instead of a generic brochure layout, the homepage now guides visitors directly into active project exploration and high-intent inquiry.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="hero" className="rounded-full px-8">
                <Link to="/residential">Browse Residential Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Featured Listings</p>
              <h2 className="section-title">Selected projects that anchor the brand.</h2>
            </div>
            <Button asChild variant="ghost" className="justify-start px-0 text-primary hover:bg-transparent">
              <Link to="/residential">
                View all residential projects
                <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="site-section bg-section-tint/45">
        <div className="site-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow justify-center">Process</p>
            <h2 className="section-title">A simple path to a premium inquiry.</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {processSteps.map((step) => (
              <article key={step.number} className="service-card gap-6">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background text-lg font-semibold text-primary">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-2xl leading-tight text-foreground">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{step.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-section">
        <div className="site-container">
          <div className="cta-band grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="eyebrow text-primary-foreground/80">Conversion CTA</p>
              <h2 className="section-title max-w-2xl text-primary-foreground">
                Ready to turn interest into a serious real estate conversation?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-primary-foreground/82">
                Book a consultation to discuss a property, ask questions, or get matched with the right opportunity.
              </p>
            </div>
            <Button asChild size="lg" variant="inverse" className="rounded-full px-8">
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
