export const SITE_NAME = "Oviedo Properties";
export const SITE_URL = "https://oviedoproperties.com";
export const DEFAULT_OG_IMAGE = "/assets/oviedo-og.jpg";
export const heroBackgroundVideo = "/assets/oviedo-hero-bg.mp4";
export const heroShowcaseVideo = "/assets/oviedo-hero-slide.mp4";
export const buildingImage = "/assets/oviedo-building.png";
export const overviewImage = "/assets/oviedo-og.jpg";

export const primaryPhone = "778.218.2662";
export const primaryEmail = "info@oviedoproperties.com";
export const streetAddress = "101-8310 130th Street Surrey, BC, Canada, V3W 8J9";

export const navigationItems = [
  { to: "/", label: "Home" },
  { to: "/residential", label: "Residential" },
  { to: "/commercial", label: "Commercial" },
  { to: "/rental", label: "Rental" },
  { to: "/company", label: "Company" },
  { to: "/customer-care", label: "Customer Care" },
  { to: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    title: "Residential Development",
    summary:
      "We build more than homes, we create spaces for lasting memories, designed to stand the test of time.",
    to: "/residential" as const,
    cta: "View Residential",
  },
  {
    title: "Commercial Development",
    summary:
      "We specialize in building quality and managing retail, industrial, and office spaces, prioritizing the user experiences.",
    to: "/commercial" as const,
    cta: "View Commercial",
  },
  {
    title: "Rental Properties",
    summary:
      "We offer rental homes in desirable neighborhoods, managed by our dedicated in-house team.",
    to: "/rental" as const,
    cta: "View Rental",
  },
] as const;

export const trustSignals = [
  "Integrated development and construction company",
  "Based in Surrey, British Columbia",
  "Dedicated in-house team",
] as const;

export function buildMeta(title: string, description: string, path: string) {
  const canonicalUrl = `${SITE_URL}${path}`;

  return {
    meta: [
      { title: `${title} | ${SITE_NAME}` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | ${SITE_NAME}` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${SITE_URL}${DEFAULT_OG_IMAGE}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${title} | ${SITE_NAME}` },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: `${SITE_URL}${DEFAULT_OG_IMAGE}` },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  };
}
