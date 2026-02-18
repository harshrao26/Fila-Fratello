import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer2 from "../components/Footer2";
import Whatsapp from "../components/Whatsapp";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Fila Fratello Pharmaceuticals | Innovating for Better Health",
  description:
    "Fila Fratello stands as a non-government company limited by shares, aiming to redefine industry standards in healthcare through science-backed formulations and ethical practices.",
  keywords:
    "Fila Fratello Pharmaceutical Private Limited is a private limited company incorporated on April 2025, registered under ROC Kanpur.",
  openGraph: {
    url: "https://www.filafratello.com",
    title: "Fila Fratello Pharmaceuticals | Innovating for Better Health",
    description:
      "Fila Fratello stands as a non-government company limited by shares, aiming to redefine industry standards in healthcare through science-backed formulations and ethical practices.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased font-sans text-slate-900`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Fila Fratello",
              description:
                "Fila Fratello Pharmaceutical Private Limited is a private limited company incorporated on April 2025, registered under ROC Kanpur. ",
              url: "https://www.filafratello.com",
              missionStatement:
                "Empowering businesses through innovative web solutions",
              foundingDate: "2025-01-15",
              founders: [
                {
                  "@type": "Person",
                  name: "Priyanshu Bhadouriya",
                  jobTitle: "Director",
                },
                {
                  "@type": "Person",
                  name: "Sumit Kumar Yadav",
                  jobTitle: "Director",
                },
              ],
              numberOfEmployees: "6",
              sameAs: [
                "https://twitter.com/filafratello",
                "https://instagram.com/filafratello",
              ],
            }),
          }}
        />
        <Whatsapp />
        <Navbar />
        {children}
        <Footer2 />
      </body>
    </html>
  );
}
