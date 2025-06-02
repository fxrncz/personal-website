import { Georama } from "next/font/google"
import localFont from "next/font/local"

export const georama = Georama({
    subsets: ["latin"],
    variable: "--font-georama",
})

export const localGeorgia = localFont({
    src: "../../fonts/georgia.ttf",
    variable: "--font-local",
})

export const localGotham = localFont({
    src: "../../fonts/Gotham Fonts Family/Gotham-Medium.otf",
    variable: "--font-local",
})