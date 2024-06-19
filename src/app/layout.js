import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const ibm = IBM_Plex_Mono({subsets: ["latin"], weight: '600'});

export const metadata = {
  title: "Blagoja | Portfolio",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={ibm.className}>{children}</body>
      </html>
  );
}
