import ExternalLink from "@/components/external-link";

export default function Home() {
  return <div className={"min-h-screen grid place-items-center"}>
    <main className={"text-center space-y-4"}>
      <header className={"space-y-2"}>
        <h1 className={"text-6xl font-sans font-[800] italic"}>DEJVOKEP</h1>
        <p>Dávid Kepič | Student of Computer Engineering at FIT CTU Prague | Junior Software Engineer</p>
      </header>
      <p className={"text-gray-500"}>xxxxx</p>
      <ul className={"flex justify-center gap-4 font-mono"}>
        <li><ExternalLink href={"mailto:kepicdav@cvut.cz?subject=Hello"}>kepicdav@cvut.cz</ExternalLink></li>
        <li><ExternalLink href={"https://discord.com/users/526015605338275840"}>dejvokep#2496</ExternalLink></li>
        <li><ExternalLink href={"https://discord.gg/BbhADEy"}>Discord server</ExternalLink></li>
        <li><ExternalLink href={"https://github.com/dejvokep"}>GitHub</ExternalLink></li>
        <li><ExternalLink href={"https://www.linkedin.com/in/dávid-kepič-b798a2238"}>LinkedIn</ExternalLink></li>
        <li><ExternalLink href={"https://devpost.com/davidcubesvkdev"}>Devpost</ExternalLink></li>
      </ul>
    </main>
  </div>
}
