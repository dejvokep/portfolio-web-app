export default function Markdown({html}: {html: string}) {
    return <main className={"[&>h2]:font-bold [&>h2]:before:content-['>_'] [&>h2]:mt-4 [&>p]:indent-8 [&>p]:text-justify space-y-2"} dangerouslySetInnerHTML={{__html: html}}/>
}