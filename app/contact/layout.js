// import AlgoliaSearch from "@/components/Search";
// import Navbar from "../navbar";
// import Footer from "../footer";
// import Navbar2 from "@/components/navbars/Navbar2";

// export default function RootLayout({ children }) {
//     return (
//       <html lang="en">
//         <head />
//         <body>
//             <Navbar2 />

//             <div className="flex h-[calc(100vh-70px)] overflow-hidden  relative ">

//                 <div className="w-full overflow-y-auto">

//                     <div className="p-4">{children}</div>

//                     <Footer />

//                 </div>


//             </div>

//         </body>
//       </html>
//     );
//   }
  
  

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
