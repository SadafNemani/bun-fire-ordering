import { siteContent } from "@/data/site-content";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { SiInstagram, SiFacebook } from "react-icons/si";

export default function CTASection() {
  const { cta } = siteContent.about;

  return (
    <div className="rounded-card bg-background shadow-card grid grid-cols-1 gap-8 p-8 md:grid-cols-3">
      <div className="flex items-center gap-4">
        <div className="rounded-image relative h-20 w-20 shrink-0 overflow-hidden">
          <Image
            src="/images/qr-code.png"
            alt="QR code"
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-body text-charcoal text-[20px] font-extrabold">
            {cta.column1.title}
          </span>
          <span className="font-body text-body text-text-secondary font-medium">
            {cta.column1.description}
          </span>
          <a
            href="/images/qr-code.png"
            download
            className="font-body text-button text-primary flex items-center font-bold"
          >
            {cta.column1.linkLabel}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="rounded-image relative h-20 w-20 shrink-0 overflow-hidden">
          <Image src="/images/social-food.webp" alt="" fill className="object-cover" sizes="80px" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-body text-charcoal text-[20px] font-extrabold">
            {cta.column2.title}
          </span>
          <span className="font-body text-body text-text-secondary font-medium">
            {cta.column2.description}
          </span>
          <div className="mt-1 flex gap-2">
            <a
              href="https://instagram.com/bunandfire"
              className="rounded-button bg-primary flex h-9 w-9 items-center justify-center"
            >
              <SiInstagram className="text-surface h-4 w-4" />
            </a>
            <a
              href="https://facebook.com/bunandfire"
              className="rounded-button bg-primary flex h-9 w-9 items-center justify-center"
            >
              <SiFacebook className="text-surface h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="rounded-image relative hidden h-full min-h-40 w-full overflow-hidden md:block">
        <Image
          src="/images/cta-decorative.webp"
          alt=""
          fill
          className="object-contain"
          sizes="80px"
        />
      </div>
    </div>
  );
}
