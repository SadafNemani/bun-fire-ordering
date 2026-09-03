import type { Metadata } from "next";
import { bricolageGrotesque, plusJakartaSans, kaushanScript } from "@/lib/fonts";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import DemoBanner from "@/components/system/DemoBanner";
import CustomCursor from "@/components/system/CustomCursor";
import { CartIconPositionProvider } from "@/context/CartIconPositionContext";
import FlyToCartLayer from "@/components/cart/FlyToCartLayer";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

const siteUrl = "https://bunandfire.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bun & Fire — Big Flavor. No Wait.",
    template: "%s | Bun & Fire",
  },
  description:
    "Order smashed burgers, crispy sides, and cold drinks online from Bun & Fire. Skip the call — order ahead and pick up fresh, fast.",
  keywords: ["burgers", "fast food", "online ordering", "smash burgers", "local restaurant"],
  authors: [{ name: "Sadaf Nemani" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Bun & Fire",
    title: "Bun & Fire — Big Flavor. No Wait.",
    description:
      "Order smashed burgers, crispy sides, and cold drinks online from Bun & Fire. Skip the call — order ahead and pick up fresh, fast.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bun & Fire — smashed burgers and fries",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bun & Fire — Big Flavor. No Wait.",
    description: "Order smashed burgers, crispy sides, and cold drinks online — skip the call.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", sizes: "512x512", type: "image/png" }],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolageGrotesque.variable} ${plusJakartaSans.variable} ${kaushanScript.variable}`}
    >
      <body>
        <LocalBusinessSchema />
        <CartProvider>
          <CartIconPositionProvider>
            <DemoBanner />
            <CustomCursor />
            <Navbar />
            <main>{children}</main>
            <CartDrawer />
            <FlyToCartLayer />
            <Footer />
          </CartIconPositionProvider>
        </CartProvider>
      </body>
    </html>
  );
}
