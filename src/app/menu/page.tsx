import { Metadata } from "next";
import MenuPageClient from "./MenuPageClient";

export const metadata: Metadata = {
  title: "Menu",
  description: "Browse burgers, combos, sides, drinks, and sauces. Order online for pickup.",
};

export default function MenuPage() {
  return <MenuPageClient />;
}
