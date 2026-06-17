import {MetadataRoute} from "next";
import {DESCRIPTION} from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "dejvokep.dev",
        short_name: "dejvokep.dev",
        description: DESCRIPTION,
        start_url: "/",
        display: "browser",
        background_color: "#ffffff",
        theme_color: "#090909",
        orientation: "portrait",
        lang: "en"
    }
}

export const dynamic = "force-static";