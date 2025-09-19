import type { Metadata } from "next";
import { Inter, Merriweather, Exo, Roboto } from "next/font/google";
import "./globals.css";
import { Box } from '@mui/material'; 
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientLayout from "./ClientLayout";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  display: 'swap', 
});

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mood Global Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${merriweather.variable} ${exo.variable} ${roboto.variable}`}>
        <ClientLayout>
          <Header />
          <Box
            component="main"
          >
            {children}
          </Box>
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}