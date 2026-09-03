import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import HomeHero from "@/components/home/Hero";
import PopularPicksSlider from "@/components/home/PopularPicksSlider";
import QualitiesSection from "@/components/home/QualitiesSection";
import CTABanner from "@/components/shared/CTABanner";
import { siteContent } from "@/data/site-content";
import { menuItems } from "@/data/menu";

const menuItemImages = Object.fromEntries(
  menuItems.map((item) => [item.id, `/images/menu/${item.id}.jpg`])
);

export default function HomePage() {
  const { cta } = siteContent.home;

  return (
    <>
      <Section background="cream" className="pt-8 md:pt-16">
        <Container>
          <HomeHero />
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <PopularPicksSlider images={menuItemImages} />
        </Container>
      </Section>

      <div className="relative h-12 overflow-hidden bg-white md:h-16">
        <div className="bg-charcoal absolute inset-x-0 -bottom-1 h-full [clip-path:polygon(0_0,100%_100%,0_100%)]" />
      </div>

      <Section className="bg-charcoal">
        <Container>
          <QualitiesSection />
        </Container>
      </Section>

      <div className="relative h-12 overflow-hidden bg-white md:h-16">
        <div className="bg-charcoal absolute inset-x-0 -top-1 h-full [clip-path:polygon(0_0,100%_100%,100%_0)]" />
      </div>

      <Section className="bg-primary py-0">
        <Container>
          <CTABanner
            variant="hero"
            title={cta.title}
            description={cta.description}
            buttonLabel={cta.buttonPrimary}
            buttonHref="/menu"
            imageSrc="/images/home-cta.webp"
          />
        </Container>
      </Section>
    </>
  );
}
