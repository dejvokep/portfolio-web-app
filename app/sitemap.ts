import {MetadataRoute} from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const host = process.env.HOST || "https://dejvokep.dev";

    return [
        {
            url: host,
            lastModified: new Date("2026-06-14"),
            priority: 1
        }
    ]
}