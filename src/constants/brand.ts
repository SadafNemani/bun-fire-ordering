export const brand = {
  name: "Bun & Fire",
  tagline: "Big flavor. No wait.",
  domain: "bunandfire.netlify.app",

  contact: {
    phone: "+11111234567",
    phoneDisplay: "+1 (111) 123-4567",
    email: "hello@bunandfire.com",
  },

  whatsapp: {
    number: "11111234567",
  },

  address: {
    line1: "123 Burger Street,",
    line2: "Foodtown, FT 12345",
    mapsUrl: "#", // replace with a real Google Maps share link
  },

  hours: {
    days: "Monday - Sunday",
    time: "11:00AM - 11:00PM",
  },

  social: {
    instagram: "@bunandfire",
    instagramUrl: "https://instagram.com/bunandfire", // demo/placeholder
  },

  order: {
    estimatedPickupTime: "15-20 minutes",
  },
} as const;
