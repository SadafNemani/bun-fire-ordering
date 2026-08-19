import CartButton from "@/components/ui/CartButton";

export default function Home() {
  return (
    <main>
      <CartButton itemCount={3} total={45.7} />
    </main>
  );
}
