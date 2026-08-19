import StepIndicator from "@/components/ui/StepIndicator";

export default function Home() {
  return (
    <main>
      <StepIndicator
        steps={[{ label: "Cart" }, { label: "Checkout" }, { label: "Confirmation" }]}
        currentStep={1}
      />
    </main>
  );
}
