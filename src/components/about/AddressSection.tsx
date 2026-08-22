import { MapPin, Clock3, Phone } from "lucide-react";
import Label from "../typography/Label";
import Heading from "../typography/Heading";
import AddressInfoCard from "./AddressInfoCard";
import { siteContent } from "@/data/site-content";
import { brand } from "@/constants/brand";
import UnderlineSwash from "../ui/UnderlineSwash";

export default function AddressSection() {
  const { address } = siteContent.about;

  return (
    <div className="flex flex-col gap-8 md:mt-30">
      <div className="flex flex-col items-center gap-2 text-center">
        <Label>{address.label}</Label>
        <Heading as="h2" size="md">
          {address.title}
        </Heading>
        <UnderlineSwash />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[3fr_7fr]">
        <div className="flex flex-col gap-4">
          <AddressInfoCard
            icon={MapPin}
            label={address.location.label}
            link={{ label: address.location.linkLabel, href: brand.address.mapsUrl }}
          >
            <p>{brand.address.line1}</p>
            <p>{brand.address.line2}</p>
          </AddressInfoCard>

          <AddressInfoCard icon={Clock3} label={address.hours.label}>
            <p>{brand.hours.days}</p>
            <p>{brand.hours.time}</p>
          </AddressInfoCard>

          <AddressInfoCard
            icon={Phone}
            label={address.contact.label}
            link={{ label: address.contact.linkLabel, href: address.contact.linkHref }}
          >
            <p>{brand.contact.phoneDisplay}</p>
            <p>{brand.contact.email}</p>
          </AddressInfoCard>
        </div>

        <div className="rounded-card relative min-h-75 overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?..."
            className="h-full w-full border-0"
            loading="lazy"
            title="Bun & Fire location map"
          />
        </div>
      </div>
    </div>
  );
}
