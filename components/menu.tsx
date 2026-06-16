"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Menu() {
    return <nav>
        <ul className={"flex flex-wrap justify-center gap-x-4"}>
            <Item name={"Intro"} href={"/"}/>
            <Item name={"Education"} href={"/education"}/>
            <Item name={"Work experience"} href={"/work"}/>
            <Item name={"Volunteering"} href={"/volunteering"}/>
            <Item name={"Awards"} href={"/awards"}/>
        </ul>
    </nav>
}

function Item({name, href}: {name: string, href: string}) {
    const pathname = usePathname();
    return <li className={pathname === href ? "font-bold" : "hover:underline"}><Link href={href}>{name}</Link></li>
}