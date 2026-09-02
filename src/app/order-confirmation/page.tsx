import { Metadata } from "next";
import OrderConfirmationPageClient from "./OrderConfirmationPageClient";

export const metadata: Metadata = {
  title: "Confirmation Page",
};

export default function OrderConfirmationPage() {
  return <OrderConfirmationPageClient />;
}
