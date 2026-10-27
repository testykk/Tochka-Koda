import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const paths = ["/", "/services", "/portfolio", "/about", "/contacts", "/privacy", ...services.map(s => `/services/${s.slug}`)];
  return paths.map(path => ({ url: `${base}${path}`, lastModified: new Date() }));
}
