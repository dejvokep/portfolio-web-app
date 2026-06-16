import fs from "node:fs";
import path from "node:path";
import {remark} from "remark";
import remarkRehype from "remark-rehype";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import {ROUTES} from "@/lib/constants";

export async function getMarkdown(id: string) {
    if (!ROUTES.find(route => route.id === id)) return null;

    const file = fs.readFileSync(path.join(process.cwd(), "lib", "md", `${id}.md`), "utf8");
    return (await remark().use(remarkRehype).use(rehypeSanitize).use(rehypeStringify).process(file)).toString();
}