import Link from "next/link";

export default function Notice() {
    return <footer className={"absolute bottom-0 right-0 p-4 text-foreground/40 font-mono"}>
        <p><Link href={"/privacy.txt"}>* Privacy policy</Link></p>
    </footer>
}