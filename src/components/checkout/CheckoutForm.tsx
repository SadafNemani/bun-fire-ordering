"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import FulfillmentToggle from "./FulfillmentToggle";
import { siteContent } from "@/data/site-content";
import type { CheckoutFormData, FulfillmentType } from "@/types/order";

interface CheckoutFormProps {
  onSubmit: (data: CheckoutFormData) => void;
}

export default function CheckoutForm({ onSubmit }: CheckoutFormProps) {
  const { fulfillment, form } = siteContent.checkout;

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [instructions, setInstructions] = useState("");
  const [fulfillmentType, setFulfillmentType] = useState<FulfillmentType>("pickup");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      fullName,
      phone,
      fulfillment: fulfillmentType,
      specialInstructions: instructions || undefined,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="rounded-card shadow-card bg-background flex flex-col gap-4 p-6">
        <p className="font-body text-charcoal text-button font-bold">{fulfillment.question}</p>
        <FulfillmentToggle
          options={fulfillment.options}
          value={fulfillmentType}
          onChange={setFulfillmentType}
        />
      </div>

      <div className="shadow-card rounded-card flex flex-col gap-5 p-6">
        <div className="flex flex-col gap-1">
          <h3 className="font-body text-charcoal text-[20px] font-extrabold">
            {form.sectionTitle}
          </h3>
          <p className="font-body text-body-sm text-text-secondary">{form.sectionDescription}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="fullName" className="font-body text-charcoal text-[14px] font-semibold">
              {form.fullName.label}
            </label>
            <input
              id="fullName"
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder={form.fullName.placeholder}
              className="border-text-secondary/30 bg-surface font-body text-charcoal placeholder:text-text-secondary focus:border-primary rounded-2xl border px-4 py-3 text-[15px] outline-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="font-body text-charcoal text-[14px] font-semibold">
              {form.phone.label}
            </label>
            <input
              id="phone"
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder={form.phone.placeholder}
              className="border-text-secondary/30 bg-surface font-body text-charcoal placeholder:text-text-secondary focus:border-primary rounded-2xl border px-4 py-3 text-[15px] outline-none"
            />
            <span className="font-body text-text-secondary text-[13px]">
              {form.phone.helperText}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="instructions"
            className="font-body text-charcoal text-[14px] font-semibold"
          >
            {form.instructions.label}
          </label>
          <textarea
            id="instructions"
            rows={3}
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder={form.instructions.placeholder}
            className="border-text-secondary/30 bg-surface font-body text-charcoal placeholder:text-text-secondary focus:border-primary resize-none rounded-2xl border px-4 py-3 text-[15px] outline-none"
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-3">
        <p className="font-body text-text-secondary text-center text-[13px]">{form.submitNote}</p>
        <Button type="submit" variant="primary" className="text-button w-full justify-center">
          {form.submitButton}
        </Button>
        <p className="font-body text-text-secondary text-center text-[13px]">{form.termsText}</p>
      </div>
    </form>
  );
}
