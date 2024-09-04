import "./globals.css";
import type { Metadata } from "next";

import { NavMenu } from "@/components/ui/nav/nav-menu";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Kobo Store Product Listing",
  description:
    "Discover our carefully selected products for your home and lifestyle. Shop apparel, accessories, and more.",
};

interface LayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function Layout({ children, modal }: LayoutProps) {
  return (
    <html lang="en">
      <body className="bg-white">
        <NavMenu />
        {children}
        <Footer />
        {modal}
      </body>
    </html>
  );
}
