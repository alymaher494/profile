import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://aly-maher-portfolio.vercel.app";

  const routes = ["", "/work", "/case-studies", "/capabilities", "/services", "/pricing", "/contact"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  return routes;
}
