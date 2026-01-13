import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickyFooter from "@/components/StickyFooter";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
            <StickyFooter />
        </div>
    )
}