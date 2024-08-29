import AlgoliaSearch from "@/components/Search";
import Navbar from "../navbar";
import Footer from "../footer";
import Navbar2 from "@/components/navbars/Navbar2";

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head />
        <body>
            <Navbar2 />

          <div className="flex h-[calc(100vh-70px)] overflow-hidden  relative ">

                {/* <div className="left w-[250px] bg-gray100 border-r-2 border-grey-300 sticky left-0 top-0 z-20">
                    <AlgoliaSearch />
                </div> */}

                <div className="w-full overflow-y-auto">

                    <div className="p-4">{children}</div>

                    <Footer />

                </div>


            </div>

        </body>
      </html>
    );
  }
  
  