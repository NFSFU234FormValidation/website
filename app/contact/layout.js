import Navbar from "@/components/navbars/Navbar2";
import Footer from "../footer";

export default function RootLayout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}
