import {ComponentProps, ReactNode} from "react";

export default function ExternalLink({children, ...props}: {children: ReactNode} & Omit<ComponentProps<"a">, "rel" | "target">) {
    return <a {...props} rel={"nofollow noopener noreferrer"} target={"_blank"} className={"hover:underline"}>{children}</a>
}