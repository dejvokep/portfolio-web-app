import {MetadataRoute} from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "dejvokep.dev",
        short_name: "dejvokep.dev",
        description: "Junior software engineer with a background in math, physics, and IT. Passionate about building scalable systems, solving hard problems, and working closely with others to find the best solution.",
        start_url: "/",
        display: "browser",
        background_color: "#ffffff",
        theme_color: "#090909",
        orientation: "portrait",
        lang: "en"
    }
}

export const dynamic = "force-static";