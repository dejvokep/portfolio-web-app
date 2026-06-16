import {MetadataRoute} from "next";
import {HOST, ROUTES} from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
    return ROUTES.map(route => ({
        url: `${HOST}/${route.href.substring(1)}`,
        lastModified: new Date("2026-06-16"),
        priority: 1
    }))
}

export const dynamic = "force-static";