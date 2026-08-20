"use client";

import { Check } from "lucide-react";
import Badge from "../ui/Badge";
import { cn } from "@/utils/cn";
import type { FulfillmentType } from "@/types/order";

interface FulfillmentOption {
  label: string;
  description: string;
  disabled?: boolean;
}

interface FulfillmentToggleProps {
  options: readonly FulfillmentOption[];
  value: FulfillmentType;
  onChange: (value: FulfillmentType) => void;
}

const VALUES: FulfillmentType[] = ["pickup", "delivery"];

export default function FullfillmentToggle({ options, value, onChange }: FulfillmentToggleProps) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {options.map((option, index) => {
        const optionValue = VALUES[index];
        const isSelected = value === optionValue;

        return (
          <button
            key={option.label}
            type="button"
            disabled={option.disabled}
            onClick={() => !option.disabled && onChange(optionValue)}
            className={cn(
              "rounded-card bg-surface flex items-center justify-between gap-3 border-2 p-5 text-left transition-colors",
              isSelected ? "border-primary" : "border-surface-secondary",
              option.disabled && "cursor-not-allowed opacity-60"
            )}
          >
            <div className="flex flex-col gap-1">
              <span className="font-body text-button text-charcoal font-extrabold">
                {option.label}
              </span>
              <span className="font-body text-body-sm text-text-secondary">
                {option.description}
              </span>
            </div>

            {option.disabled ? (
              <Badge variant="muted">Coming Soon</Badge>
            ) : (
              <span
                className={cn(
                  "rounded-button flex h-6 w-6 shrink-0 items-center justify-center border-2",
                  isSelected
                    ? "border-primary bg-primary"
                    : "border-surface-secondary bg-transparent"
                )}
              >
                {isSelected && <Check className="text-surface h-4 w-4" />}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
