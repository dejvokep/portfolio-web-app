import Link from "next/link";

export default function NotFound() {
    return <main className={"text-center space-y-4"}>
        <p>404: Content not found | <Link href={"/"} className={"hover:underline"}>Home</Link></p>
    </main>
}