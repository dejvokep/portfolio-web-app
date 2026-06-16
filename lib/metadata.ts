import {DESCRIPTION, HOST, ROUTES} from "@/lib/constants";
import {Metadata} from "next";
import * as OG from "@/app/opengraph-image";

export function deriveMetadata(id: string): Metadata {
    const route = ROUTES.find(route => route.id === id);
    if (!route) return {};

    const title = `${route.name} - Dávid Kepič`;
    const url = `${HOST}${route.href !== "/" ? route.href : ""}`;
    const images = {
        url: `${HOST}/opengraph-image`,
        alt: OG.alt,
        type: OG.contentType,
        ...OG.size
    };

    return {
        title,
        description: DESCRIPTION,
        keywords: ["software", "hardware", "development", "student", "ctu", "open", "source"],
        authors: [{name: "Dávid Kepič"}],
        metadataBase: HOST,
        alternates: {canonical: url},
        openGraph: {
            title,
            description: DESCRIPTION,
            url: url,
            siteName: "dejvokep.dev",
            type: "website",
            locale: "en",
            images
        },
        twitter: {
            card: "summary_large_image",
            title,
            description: DESCRIPTION,
            images
        },
        robots: {index: true, follow: true}
    }
}