// storefront layout for all the pages

import { Header } from "@/features/landing/components/header";
import { Footer } from "@/features/landing/components/footer";

export default function StorefrontLayout({ children }: { children: React.ReactNode }) {
    return <>
        <Header />
        {children}
        <Footer />
    </>;
}
