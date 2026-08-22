import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { SiInstagram, SiFacebook } from "react-icons/si";

interface CTASectionProps {
  qrImageSrc: string;
  qrTitle: string;
  qrDescription: string;
  qrLinkLabel: string;
  qrLinkHref: string;
  socialImageSrc: string;
  socialTitle: string;
  socialDescription: string;
  instagramHref: string;
  facebookHref: string;
  decorativeImageSrc: string;
}

export default function CTASection({
  qrImageSrc,
  qrTitle,
  qrDescription,
  qrLinkLabel,
  qrLinkHref,
  socialImageSrc,
  socialTitle,
  socialDescription,
  instagramHref,
  facebookHref,
  decorativeImageSrc,
}: CTASectionProps) {
  return (
    <div className="rounded-card bg-background shadow-card grid grid-cols-1 gap-8 p-8 md:grid-cols-3">
      <div className="flex items-center gap-4">
        <div className="rounded-image relative h-20 w-20 shrink-0 overflow-hidden">
          <Image src={qrImageSrc} alt="QR code" fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-body text-charcoal text-[20px] font-extrabold">{qrTitle}</span>
          <span className="font-body text-body text-text-secondary font-medium">
            {qrDescription}
          </span>
          <a
            href={qrLinkHref}
            className="font-body text-button text-primary flex items-center font-bold"
          >
            {qrLinkLabel}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="rounded-image relative h-20 w-20 shrink-0 overflow-hidden">
          <Image src={socialImageSrc} alt="" fill className="object-cover" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-body text-charcoal text-[20px] font-extrabold">{socialTitle}</span>
          <span className="font-body text-body text-text-secondary font-medium">
            {socialDescription}
          </span>
          <div className="mt-1 flex gap-2">
            <a
              href={instagramHref}
              className="rounded-button bg-primary flex h-9 w-9 items-center justify-center"
            >
              <SiInstagram className="text-surface h-4 w-4" />
            </a>
            <a
              href={facebookHref}
              className="rounded-button bg-primary flex h-9 w-9 items-center justify-center"
            >
              <SiFacebook className="text-surface h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="rounded-image relative hidden h-full min-h-40 w-full overflow-hidden md:block">
        <Image src={decorativeImageSrc} alt="" fill className="object-cover" />
      </div>
    </div>
  );
}
