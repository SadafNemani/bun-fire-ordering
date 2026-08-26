import { cn } from "@/utils/cn";

type StepStatus = "done" | "active" | "upcoming";

interface Step {
  label: string;
}

interface StepIndicatorProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

function getStatus(index: number, currentStep: number): StepStatus {
  if (index < currentStep) return "done";
  if (index === currentStep) return "active";
  return "upcoming";
}

export default function StepIndicator({ steps, currentStep, className }: StepIndicatorProps) {
  return (
    <div className={cn("flex items-center", className)}>
      {steps.map((step, index) => {
        const status = getStatus(index, currentStep);
        const isLast = index === steps.length - 1;

        return (
          <div key={step.label} className="flex flex-1 items-center last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <div
                className={cn(
                  "rounded-button font-body flex h-10 w-10 items-center justify-center border font-semibold",
                  status === "active" && "border-primary bg-primary text-surface",
                  status === "done" && "border-accent bg-accent text-surface",
                  status === "upcoming" &&
                    "border-text-secondary text-text-secondary bg-transparent"
                )}
              >
                {index + 1}
              </div>
              <span
                className={cn(
                  "text-body-sm font-bold",
                  status === "active" && "text-primary",
                  status === "done" && "text-accent",
                  status === "upcoming" && "text-text-secondary"
                )}
              >
                {step.label}
              </span>
            </div>
            {!isLast && (
              <div
                className={cn(
                  "mx-2 h-px flex-1",
                  status === "done" ? "bg-accent" : "bg-text-secondary/30"
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
