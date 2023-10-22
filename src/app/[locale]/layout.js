import { Jost, Jua, Lato, Poppins } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

export function generateStaticParams() {
    return [{ locale: "en" }, { locale: "ar" }];
}
import "./globals.css";
import "./carousel.css";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

const jua = Jua({ weight: "400", subsets: ["latin"], variable: "--font-jua" });
const lato = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
    variable: "--font-lato",
});
const jost = Jost({ subsets: ["cyrillic"], variable: "--font-jost" });
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"],
    variable: "--font-poppins",
});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function RootLayout({ children, params: { locale } }) {
    let messages;
    try {
        messages = (await import(`../../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }
    return (
        <html lang={locale}>
            <body
                className={`relative ${jua.variable} font-jua ${lato.variable} font-lato ${jost.variable} font-jost ${poppins.variable} font-poppins`}
            >
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Navbar />
                    {children}
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
