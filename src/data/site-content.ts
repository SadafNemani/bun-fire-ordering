export const siteContent = {
  home: {
    hero: {
      label: "FRESH • FAST • LOCAL",
      title: ["BIG FLAVOR.", "NO WAIT."],
      description: "Juicy smashed burgers, crispy sides,\nand cold drinks — ready when you are.",
      buttonPrimary: "ORDER NOW",
      buttonSecondary: "VIEW MENU",
    },
    popularPicks: {
      label: "POPULAR PICKS",
      title: "The ones everyone comes back for.",
    },
    qualities: [
      { label: "Fast", description: "Ready in minutes" },
      { label: "Fresh", description: "Quality ingredients\nevery day" },
      { label: "Easy", description: "Order online,\nskip the call" },
    ],
    cta: {
      title: "HUNGRY YET?",
      description: "Your next favorite meal\nis one click away.",
      buttonPrimary: "ORDER NOW",
    },
  },

  menu: {
    hero: {
      label: "FRESH • FAST • MADE FOR YOU",
      title: "Our Menu",
    },
    banner: {
      title: "Make it a combo!",
      description: "Add fries & a drink to any burger.",
      buttonPrimary: "ORDER NOW",
    },
  },

  about: {
    hero: {
      label: "OUR STORY",
      title: ["BORN TO SERVE", "BIG FLAVOR."],
      description:
        "Bun & Fire started with a simple idea: make incredibly tasty food, keep it real, and serve it fast. We use quality ingredients, smash every patty fresh to order, and treat every customer like a friend.",
      scriptText: "Thanks For Supporting!",
    },
    qualities: [
      {
        highlightedLabel: "Fresh",
        normalLabel: "Everyday",
        description: "We never compromise on quality or taste.",
      },
      {
        highlightedLabel: "Fast",
        normalLabel: "Always",
        description: "Made to order and served in minutes.",
      },
      {
        highlightedLabel: "Easy",
        normalLabel: "Order",
        description: "Order online, skip the call.",
      },
    ],
    address: {
      label: "Find Us",
      title: "We're Here When You're Hungry",
      location: {
        label: "Our Location",
        linkLabel: "Get Directions",
      },
      hours: {
        label: "Opening Hours",
      },
      contact: {
        label: "Contact Us",
        linkLabel: "Send Us a Message",
        linkHref: "#", // e.g. mailto:hello@bunandfire.com or a contact anchor
      },
    },
    cta: {
      column1: {
        title: "Scan, Order, Enjoy!",
        description: "Save our menu and order anytime.",
        linkLabel: "Get Our QR Code",
        linkHref: "#",
      },
      column2: {
        title: "Love Our Food?",
        description: "Tag us @bunandfire & show us your favorite meal!",
      },
    },
  },

  checkout: {
    title: "Checkout",
    description: "Almost there! Just a few details and your delicious food will be on its way.",
    fulfillment: {
      question: "How would you like to receive your order?",
      options: [
        { label: "Pickup", description: "Pick up at our location", disabled: false },
        { label: "Delivery", description: "Coming Soon", disabled: true },
      ],
    },
    form: {
      sectionTitle: "Your Information",
      sectionDescription: "We'll just need a few details for your order.",
      fullName: {
        label: "Full Name",
        placeholder: "Enter your full name",
      },
      phone: {
        label: "Phone Number",
        placeholder: "Enter your phone number",
        helperText: "We'll use this number to confirm your order.",
      },
      instructions: {
        label: "Special Instructions (Optional)",
        placeholder: "e.g. No onions, extra sauce, pick up at the side door...",
      },
      submitButton: "PLACE ORDER",
      termsText: "By placing this order, you agree to our Terms & Conditions.",
    },
    summarySidebar: {
      pickupTimeLabel: "Estimated Pickup Time",
      pickupTimeValue: "15-20 minutes",
      confirmationNote: "You'll receive a confirmation via WhatsApp",
    },
    qualities: [
      { label: "Freshly Made", description: "Made to order, every time." },
      { label: "Fast Pickup", description: "Skip the line, grab and go." },
      { label: "Secure & Easy", description: "Your info is always safe with us." },
    ],
  },

  confirmation: {
    title: "Order Confirmed!",
    description: "Thanks for your order! We've received it and it's being prepared with love!",
    orderNumber: {
      label: "Your Order Number",
      helperText: "Please save this number for your reference.",
      confirmationNote: "We'll send the confirmation to your number via WhatsApp.",
    },
    pickupTime: {
      label: "Estimated Pickup Time",
      value: "15-20 minutes",
      note: "We'll notify you on WhatsApp when your order is ready for pickup.",
    },
    buttonPrimary: "View Menu & Order Again",
    buttonSecondary: "Back to Home",
    summaryFooter: {
      title: "THANK YOU",
      subtitle: "For Supporting Us.",
    },
  },
} as const;
