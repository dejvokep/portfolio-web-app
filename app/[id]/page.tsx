import Markdown from "@/components/markdown";
import {notFound} from "next/navigation";
import {deriveMetadata} from "@/lib/metadata";
import {Metadata} from "next";
import {ROUTES} from "@/lib/constants";
import {getMarkdown} from "@/lib/markdown";

export default async function Page({params}: {params: Promise<{id: string}>}) {
    const html = await getMarkdown((await params).id);
    if (!html) notFound();

    return <Markdown html={html}/>
}

export async function generateMetadata({params}: {params: Promise<{id: string}>}): Promise<Metadata> {
    return deriveMetadata((await params).id);
}

export function getStaticParams() {
    return ROUTES.toSpliced(0, 1).map(route => route.id);
}

export const dynamic = "force-static";