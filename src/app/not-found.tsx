import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/Container";
import Heading from "@/components/typography/Heading";
import Text from "@/components/typography/Text";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="bg-background flex min-h-[80vh] items-center">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="relative h-100 w-100">
            <Image
              src="/images/404-burger.webp"
              alt="A burger that lost its way"
              fill
              className="object-contain"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Heading as="h1" size="lg">
              Page Not Found
            </Heading>
            <Text size="body" color="secondary">
              Looks like this page got lost on its way to the kitchen,
            </Text>
          </div>

          <div className="flex gap-4">
            <Link href="/">
              <Button variant="primary">Back to Home</Button>
            </Link>
            <Link href="/menu">
              <Button variant="secondary">View Menu</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
