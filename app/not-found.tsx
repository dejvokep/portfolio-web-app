import Link from "next/link";

export default function NotFound() {
    return <div className={"min-h-screen grid place-items-center"}>
        <main className={"text-center space-y-4"}>
            <header className={"space-y-2"}>
                <h1 className={"text-6xl font-sans font-[800] italic"}>DEJVOKEP</h1>
                <p>404: Content not found | <Link href={"/"} className={"hover:underline"}>Home</Link></p>
            </header>
        </main>
    </div>
}