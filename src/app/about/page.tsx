import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import AboutHero from "@/components/about/Hero";
import AddressSection from "@/components/about/AddressSection";
import CTASection from "@/components/shared/CTASection";
import { siteContent } from "@/data/site-content";

export default function AboutPage() {
  const { cta } = siteContent.about;

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
          <CTASection
            qrImageSrc="/images/qr-code.png"
            qrTitle={cta.column1.title}
            qrDescription={cta.column1.description}
            qrLinkLabel={cta.column1.linkLabel}
            qrLinkHref={cta.column1.linkHref}
            socialImageSrc="/images/social-food.jpg"
            socialTitle={cta.column2.title}
            socialDescription={cta.column2.description}
            instagramHref="https://instagram.com/bunandfire"
            facebookHref="https://facebook.com/bunandfire"
            decorativeImageSrc="/images/about-cta-decorative.jpg"
          />
        </Container>
      </Section>
    </>
  );
}
