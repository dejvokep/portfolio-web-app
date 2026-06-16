import ExternalLink from "@/components/external-link";

export default function Footer() {
    return <footer>
        <ul className={"flex flex-wrap justify-center gap-x-4 font-mono"}>
            <li><ExternalLink href={"mailto:kepicdav@cvut.cz?subject=Hello"}>kepicdav@cvut.cz</ExternalLink></li>
            <li><ExternalLink href={"https://discord.com/users/526015605338275840"}>dejvokep#2496</ExternalLink></li>
            <li><ExternalLink href={"https://discord.gg/BbhADEy"}>Discord server</ExternalLink></li>
            <li><ExternalLink href={"https://github.com/dejvokep"}>GitHub</ExternalLink></li>
            <li><ExternalLink href={"https://www.linkedin.com/in/dávid-kepič-b798a2238"}>LinkedIn</ExternalLink></li>
            <li><ExternalLink href={"https://devpost.com/davidcubesvkdev"}>Devpost</ExternalLink></li>
        </ul>
    </footer>
}