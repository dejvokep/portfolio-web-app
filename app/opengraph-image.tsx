import {ImageResponse} from "next/og";
import {join} from "node:path";
import {readFileSync} from "fs";

export const size = {width: 1200, height: 630};
export const contentType = "image/png";
export const alt = "dejvokep.dev";

const rubik = readFileSync(join(process.cwd(), "lib/fonts/rubik-800i.ttf"));

export default function Image() {
    return new ImageResponse(
        <div tw={"flex flex-col h-full w-full p-30 items-center justify-center bg-white"}>
            <h1 tw={"text-9xl"} style={{fontFamily: "Rubik"}}>DEJVOKEP</h1>
        </div>,
        {
            ...size,
            fonts: [
                {
                    name: "Rubik",
                    data: rubik,
                    weight: 800,
                    style: "italic"
                }
            ]
        }
    )
}