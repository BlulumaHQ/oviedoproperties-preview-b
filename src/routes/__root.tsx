import type { ReactNode } from "react";
import { HeadContent, Link, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/site-layout";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:brightness-110"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Oviedo Properties" },
      {
        name: "description",
        content:
          "Oviedo Properties is a leading real estate development and construction company in Surrey, BC, specializing in sustainable commercial, residential, and rental property solutions.",
      },
      { name: "author", content: "Oviedo Properties" },
      { property: "og:title", content: "Oviedo Properties" },
      {
        property: "og:description",
        content:
          "Integrated development and construction solutions for residential, commercial, and rental properties in Surrey, British Columbia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Oviedo Properties" },
      { name: "description", content: "Oviedo Properties builds sustainable commercial, residential, and rental properties in Surrey, BC." },
      { property: "og:description", content: "Oviedo Properties builds sustainable commercial, residential, and rental properties in Surrey, BC." },
      { name: "twitter:description", content: "Oviedo Properties builds sustainable commercial, residential, and rental properties in Surrey, BC." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/76630afa-b4d1-4433-836f-bfab89a64b4f/id-preview-3393579b--ca878b19-96d9-4e70-93bc-92c7968837e8.lovable.app-1776881479541.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/76630afa-b4d1-4433-836f-bfab89a64b4f/id-preview-3393579b--ca878b19-96d9-4e70-93bc-92c7968837e8.lovable.app-1776881479541.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  );
}
