import Menu from "@/components/menu";

export default function Header() {
    return <header className={"space-y-2 text-center"}>
        <h1 className={"text-4xl font-sans font-extrabold italic"}>DEJVOKEP</h1>
        <Menu/>
    </header>
}