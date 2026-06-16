import Markdown from "@/components/markdown";
import {getMarkdown} from "@/lib/markdown";

export default async function Page() {
  return <Markdown html={(await getMarkdown("intro")) || ""}/>
}

export const dynamic = "force-static";