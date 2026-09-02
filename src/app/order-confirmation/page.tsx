"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";
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
import AnimatedCheckmark from "@/components/confirmation/AnimatedCheckmark";

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

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, yy: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
  };

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
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-6"
            >
              <motion.div variants={itemVariants}>
                <StepIndicator
                  steps={[{ label: "Cart" }, { label: "Checkout" }, { label: "Confirmation" }]}
                  currentStep={2}
                  className="w-full"
                />
              </motion.div>

              <div className="flex flex-col items-center gap-2 text-center">
                <motion.div variants={itemVariants}>
                  <AnimatedCheckmark />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Heading as="h1" size="lg" highlight="Confirmed">
                    {confirmation.title}
                  </Heading>

                  <Text>{confirmation.description}</Text>
                </motion.div>
              </div>

              <motion.div
                variants={itemVariants}
                className="rounded-card bg-surface shadow-card flex w-full flex-col items-center gap-1 p-6 text-center"
              >
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
              </motion.div>

              <motion.div variants={itemVariants}>
                <EstimatedTimeCard
                  size="lg"
                  time={confirmation.pickupTime.value}
                  description={confirmation.pickupTime.note}
                />
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex w-full flex-col gap-3 sm:flex-row"
              >
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
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" as const }}
              className="flex flex-col gap-6"
            >
              <OrderSummary items={order.items} images={imageMap} />

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 1 }}
                className="rounded-card bg-background shadow-card flex flex-col items-center gap-2 p-6 text-center"
              >
                <Heart className="fill-primary text-primary h-15 w-15" />
                <ScriptText>{confirmation.summaryFooter.title}</ScriptText>
                <Text size="body-sm" color="secondary">
                  {confirmation.summaryFooter.subtitle}
                </Text>
              </motion.div>
            </motion.div>
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
