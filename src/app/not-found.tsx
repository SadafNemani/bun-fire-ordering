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
        <div className="flex flex-col items-center justify-center gap-2 text-center md:flex-row md:text-left">
          <Image
            src="/images/404-burger.webp"
            alt="A burger that lost its way"
            width={600}
            height={725}
            style={{ aspectRatio: "600/725" }}
            className="w-50 object-contain md:w-100"
          />

          <div className="flex flex-col items-center gap-2 md:items-start">
            <Heading as="h1" size="lg">
              Page Not Found
            </Heading>
            <Text size="body" color="secondary">
              Looks like this page got lost on its way to the kitchen,
            </Text>

            <div className="mt-5 flex gap-4">
              <Link href="/">
                <Button variant="primary">Back to Home</Button>
              </Link>
              <Link href="/menu">
                <Button variant="secondary">View Menu</Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
