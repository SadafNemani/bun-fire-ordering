import type { MetadataRoute } from "next";

const siteUrl = "https://bunandfire.netlify.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/checkout",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
