import { Vazirmatn } from "next/font/google";
import "./globals.css";

import DesktopMenu from './components/menu/DesktopMenu'
import MobileMenu from './components/menu/MobileMenu'

const vazirmatn = Vazirmatn({
    subsets: ["arabic"],
    weight: ["400"],
});

export const metadata = {
    title: "گلاسینو | Glassinoo",
    description: "فروشگاه طلق رو میزی",
};

export default function RootLayout({ children }) {
    return (
        <html lang="fa" dir="rtl" data-theme="glassinoo">
            <link rel="icon" href="/images/logo.png" type="image/png" />
            <body
                className={`${vazirmatn.className} antialiased`}
            >
                <DesktopMenu />
                {children}
                <MobileMenu />
            </body>
        </html>
    );
}
