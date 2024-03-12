import {Providers} from "./providers";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight:['300', '400', '600', '700', '900'] });

export const metadata = {
  title: "Countries API App",
};

export default function RootLayout({children}) {
  return (
    <html lang="es" className="dark">
      <body className={`${poppins.className}`}>
        <Providers>

          <main className="md:px-20 lg:px-48 bg-white dark:bg-[#212e37] pt-7 md:pt-14 min-h-screen">{children}</main> 
        </Providers>
      </body>
    </html>
  );
}
