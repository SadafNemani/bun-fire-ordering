"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Heart } from "lucide-react";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Heading from "@/components/typography/Heading";
import Text from "@/components/typography/Text";
import Button from "@/components/ui/Button";
import StepIndicator from "@/components/ui/StepIndicator";
import OrderSummary from "@/components/order/OrderSummary";
import EstimatedTimeCard from "@/components/order/EstimatedTimeCard";
import ScriptText from "@/components/typography/ScriptText";
import CTASection from "@/components/shared/CTASection";
import { siteContent } from "@/data/site-content";
import { menuItems, combos } from "@/data/menu";
import type { CartItem, CheckoutFormData } from "@/types/order";
import { useHasMounted } from "@/hooks/useHasMounted";

const imageMap = Object.fromEntries([
  ...menuItems.map((i) => [i.id, `/images/menu/${i.id}.jpg`]),
  ...combos.map((c) => [c.id, `/images/combos/${c.id}.jpg`]),
]);

interface StoredOrder {
  orderId: string;
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  customer: CheckoutFormData;
  createdAt: string;
}

function readStoredOrder(): StoredOrder | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = sessionStorage.getItem("bun-and-fire-last-order");
    return stored ? (JSON.parse(stored) as StoredOrder) : null;
  } catch {
    return null;
  }
}

export default function OrderConfirmationPage() {
  const hasMounted = useHasMounted();
  const [order] = useState<StoredOrder | null>(() => readStoredOrder());
  const { confirmation } = siteContent;

  if (!hasMounted) return null;

  if (!order) {
    return (
      <Section background="cream" className="pt-8 md:pt-16">
        <Container>
          <div className="flex flex-col items-center gap-4 py-20 text-center">
            <Heading as="h1" size="lg">
              No recent order found
            </Heading>
            <Text>Looks like there&apos;s no order to confirm right now.</Text>
            <Link href="/menu">
              <Button variant="primary">View Menu</Button>
            </Link>
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
            <div className="flex flex-col gap-6">
              <StepIndicator
                steps={[{ label: "Cart" }, { label: "Checkout" }, { label: "Confirmation" }]}
                currentStep={2}
                className="w-full"
              />

              <div className="flex flex-col items-center gap-2 text-center">
                <span className="rounded-button bg-success flex h-20 w-20 items-center justify-center">
                  <Check className="text-surface h-10 w-10" strokeWidth={3} />
                </span>
                <Heading as="h1" size="lg" highlight="Confirmed">
                  {confirmation.title}
                </Heading>
                <Text>{confirmation.description}</Text>
              </div>

              <div className="rounded-card bg-surface shadow-card flex w-full flex-col items-center gap-1 p-6 text-center">
                <span className="font-body text-text-secondary text-[22px] font-extrabold">
                  {confirmation.orderNumber.label}
                </span>

                <span className="font-heading text-primary text-[50px] leading-none font-extrabold">
                  {order.orderId}
                </span>

                <span className="font-body text-text-secondary text-[13px]">
                  {confirmation.orderNumber.helperText}
                </span>

                <span className="font-body text-text-secondary text-[13px]">
                  {confirmation.orderNumber.confirmationNote}
                </span>
              </div>

              <EstimatedTimeCard
                size="lg"
                time={confirmation.pickupTime.value}
                description={confirmation.pickupTime.note}
              />

              <div className="flex w-full flex-col gap-3 sm:flex-row">
                <Link href="/menu" className="flex-1">
                  <Button variant="primary" className="w-full justify-center">
                    {confirmation.buttonPrimary}
                  </Button>
                </Link>
                <Link href="/" className="flex-1">
                  <Button variant="secondary" className="w-full justify-center">
                    {confirmation.buttonSecondary}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <OrderSummary items={order.items} images={imageMap} />
              <div className="rounded-card bg-background shadow-card flex flex-col items-center gap-2 p-6 text-center">
                <Heart className="fill-primary text-primary h-15 w-15" />
                <ScriptText>{confirmation.summaryFooter.title}</ScriptText>
                <Text size="body-sm" color="secondary">
                  {confirmation.summaryFooter.subtitle}
                </Text>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <CTASection
            qrImageSrc="/images/qr-code.png"
            qrTitle={siteContent.about.cta.column1.title}
            qrDescription={siteContent.about.cta.column1.description}
            qrLinkLabel={siteContent.about.cta.column1.linkLabel}
            qrLinkHref={siteContent.about.cta.column1.linkHref}
            socialImageSrc="/images/social-food.jpg"
            socialTitle={siteContent.about.cta.column2.title}
            socialDescription={siteContent.about.cta.column2.description}
            instagramHref="https://instagram.com/bunandfire"
            facebookHref="https://facebook.com/bunandfire"
            decorativeImageSrc="/images/about-cta-decorative.jpg"
          />
        </Container>
      </Section>
    </>
  );
}
