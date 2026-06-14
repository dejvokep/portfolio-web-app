import Link from "next/link";

export default function Footer() {
    return <footer className={"absolute bottom-0 right-0 p-2 text-foreground/40 font-mono"}>
        <p><Link href={"/privacy.txt"}>* Privacy policy</Link></p>
    </footer>
}