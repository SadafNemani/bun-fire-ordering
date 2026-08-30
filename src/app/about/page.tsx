import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import AboutHero from "@/components/about/Hero";
import AddressSection from "@/components/about/AddressSection";
import CTASection from "@/components/shared/CTASection";

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
