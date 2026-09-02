import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import AboutHero from "@/components/about/Hero";
import AddressSection from "@/components/about/AddressSection";
import CTASection from "@/components/shared/CTASection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Bun & Fire — fresh ingredients, fast service, and our story.",
};

export default function AboutPage() {
  return (
    <>
      <Section background="cream" className="pt-8 md:pt-16">
        <Container>
          <AboutHero />
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <AddressSection />
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
