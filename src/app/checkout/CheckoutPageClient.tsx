"use client";

import { useRouter } from "next/navigation";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Heading from "@/components/typography/Heading";
import Text from "@/components/typography/Text";
import StepIndicator from "@/components/ui/StepIndicator";
import CheckoutForm from "@/components/checkout/CheckoutForm";
import OrderSummary from "@/components/order/OrderSummary";
import EstimatedTimeCard from "@/components/order/EstimatedTimeCard";
import QualitiesGrid from "@/components/shared/QualitiesGrid";
import CTASection from "@/components/shared/CTASection";
import { useCart } from "@/hooks/useCart";
import { siteContent } from "@/data/site-content";
import { menuItems, combos } from "@/data/menu";
import { generateOrderId } from "@/lib/order/generateOrderId";
import { formatOrderMessage, buildWhatsAppUrl } from "@/lib/order/formatOrder";
import { Clock3, Truck, ShieldCheck } from "lucide-react";
import type { CheckoutFormData } from "@/types/order";

const imageMap = Object.fromEntries([
  ...menuItems.map((i) => [i.id, `/images/menu/${i.id}.jpg`]),
  ...combos.map((c) => [c.id, `/images/combos/${c.id}.jpg`]),
]);

const qualityIcons = [Clock3, Truck, ShieldCheck];

export default function CheckoutPageClient() {
  const router = useRouter();
  const { items, total, clearCart } = useCart();
  const { title, description, qualities } = siteContent.checkout;

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.06;

  const qualityItems = qualities.map((q, i) => ({ ...q, icon: qualityIcons[i] }));

  const handleSubmit = (formData: CheckoutFormData) => {
    const orderId = generateOrderId();

    const message = formatOrderMessage({
      orderId,
      items,
      subtotal,
      tax,
      total,
      customer: formData,
    });

    const whatsappUrl = buildWhatsAppUrl(message);

    sessionStorage.setItem(
      "bun-and-fire-last-order",
      JSON.stringify({
        orderId,
        items,
        subtotal,
        tax,
        total,
        customer: formData,
        createdAt: new Date().toISOString(),
      })
    );

    clearCart();

    window.open(whatsappUrl, "_blank");
    router.push("/order-confirmation");
  };

  if (items.length === 0) {
    return (
      <Section background="cream" className="pt-8 md:pt-16">
        <Container>
          <div className="flex flex-col items-center gap-4 py-20 text-center">
            <Heading as="h1" size="lg">
              Your cart is empty
            </Heading>
            <Text>Add something from the menu before checking out.</Text>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <>
      <Section background="white" className="pt-8 md:pt-16">
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.8fr_1fr] md:items-start">
            <div className="flex flex-col gap-8">
              <StepIndicator
                steps={[{ label: "Cart" }, { label: "Checkout" }, { label: "Confirmation" }]}
                currentStep={1}
              />

              <div className="flex flex-col gap-2">
                <Heading as="h1" size="lg">
                  {title}
                </Heading>
                <Text>{description}</Text>
              </div>

              <CheckoutForm onSubmit={handleSubmit} />
            </div>

            <div className="flex flex-col gap-6">
              <OrderSummary items={items} images={imageMap} />

              <EstimatedTimeCard
                size="sm"
                time={siteContent.checkout.summarySidebar.pickupTimeValue}
                description={siteContent.checkout.summarySidebar.confirmationNote}
              />

              <div className="rounded-card bg-surface shadow-card p-6">
                <QualitiesGrid variant="checkout" items={qualityItems} />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <CTASection />
        </Container>
      </Section>
    </>
  );
}
