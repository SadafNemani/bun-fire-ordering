import type { CartItem, CheckoutFormData } from "@/types/order";
import { brand } from "@/constants/brand";

interface FormatOrderParams {
  orderId: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  customer: CheckoutFormData;
}

export function formatOrderMessage({
  orderId,
  items,
  subtotal,
  tax,
  total,
  customer,
}: FormatOrderParams): string {
  const itemLines = items
    .map((item) => `• ${item.quantity}x ${item.name} — $${(item.price * item.quantity).toFixed(2)}`)
    .join("\n");

  const lines = [
    `\u{1F525} New Order — ${brand.name}`,
    `Order #${orderId}`,
    "",
    itemLines,
    "",
    `Subtotal: $${subtotal.toFixed(2)}`,
    `Tax: $${tax.toFixed(2)}`,
    `Total: $${total.toFixed(2)}`,
    "",
    `Name: ${customer.fullName}`,
    `Phone: ${customer.phone}`,
    `Fulfillment: ${customer.fulfillment === "pickup" ? "Pickup" : "Delivery"}`,
  ];

  if (customer.specialInstructions) {
    lines.push(`Instructions: ${customer.specialInstructions}`);
  }

  return lines.join("\r\n");
}

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${brand.whatsapp.number}?text=${encoded}`;
}
