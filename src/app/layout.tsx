import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Container from "@/components/layouti/container";
import Header from "@/components/layouti/header";
import Footer from "@/components/layouti/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Flash er - Power up your web",
    template: "%s - Flash er",
  },
  description:
    "Academie dela salle is school of excellence and values located in Gicumbi Byumba",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <Header />
          <Container>{children}</Container>
          <Footer />
        </div>
      </body>
    </html>
  );
}
