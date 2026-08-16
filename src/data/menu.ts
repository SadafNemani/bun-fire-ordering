import type { MenuCategory, MenuItem, Combo } from "@/types/menu";

export const categories: MenuCategory[] = [
  { id: "burgers", label: "Burgers" },
  { id: "combos", label: "Combos" },
  { id: "sides", label: "Sides" },
  { id: "drinks", label: "Drinks" },
  { id: "sauces", label: "Sauces" },
];

export const menuItems: MenuItem[] = [
  // burgers (6)
  {
    id: "classic-smash",
    category: "burgers",
    name: "Classic Smash",
    description: "Double beef patty, cheddar, signature sauce",
    price: 12.99,
  },
  {
    id: "crispy-chicken",
    category: "burgers",
    name: "Crispy Chicken",
    description: "Golden chicken, fresh lettuce & sauce",
    price: 10.99,
  },
  {
    id: "bacon-smash",
    category: "burgers",
    name: "Bacon Smash",
    description: "Double beef patty, crispy bacon, smoked cheddar",
    price: 13.99,
  },
  {
    id: "spicy-inferno",
    category: "burgers",
    name: "Spicy Inferno",
    description: "Beef patty, jalapeños, pepper jack, spicy mayo",
    price: 13.49,
  },
  {
    id: "mushroom-swiss",
    category: "burgers",
    name: "Mushroom Swiss",
    description: "Beef patty, sautéed mushrooms, melted swiss",
    price: 12.49,
  },
  {
    id: "veggie-stack",
    category: "burgers",
    name: "Veggie Stack",
    description: "Plant-based patty, lettuce, tomato, house sauce",
    price: 11.99,
  },

  // sides (6)
  {
    id: "fire-fries",
    category: "sides",
    name: "Fire Fries",
    description: "Crispy fries, cheese sauce & toppings",
    price: 6.99,
  },
  {
    id: "classic-fries",
    category: "sides",
    name: "Classic Fries",
    description: "Golden, crispy, lightly salted",
    price: 4.49,
  },
  {
    id: "onion-rings",
    category: "sides",
    name: "Onion Rings",
    description: "Beer-battered, crispy fried",
    price: 5.99,
  },
  {
    id: "loaded-nachos",
    category: "sides",
    name: "Loaded Nachos",
    description: "Tortilla chips, cheese sauce, jalapeños",
    price: 7.49,
  },
  {
    id: "mozzarella-sticks",
    category: "sides",
    name: "Mozzarella Sticks",
    description: "Golden fried, served with marinara",
    price: 6.49,
  },
  {
    id: "coleslaw",
    category: "sides",
    name: "Coleslaw",
    description: "Fresh, creamy, made daily",
    price: 3.99,
  },

  // drinks (3)
  {
    id: "cola",
    category: "drinks",
    name: "Cola",
    description: "Ice-cold classic",
    price: 2.99,
  },
  {
    id: "lemonade",
    category: "drinks",
    name: "Fresh Lemonade",
    description: "Hand-squeezed, lightly sweet",
    price: 3.49,
  },
  {
    id: "iced-tea",
    category: "drinks",
    name: "Iced Tea",
    description: "Brewed fresh, served cold",
    price: 2.99,
  },

  // sauces (3)
  {
    id: "signature-sauce",
    category: "sauces",
    name: "Signature Sauce",
    description: "Our house-made secret blend",
    price: 0.99,
  },
  {
    id: "spicy-mayo",
    category: "sauces",
    name: "Spicy Mayo",
    description: "Creamy with a kick",
    price: 0.99,
  },
  {
    id: "cheese-sauce",
    category: "sauces",
    name: "Cheese Sauce",
    description: "Warm, melty, dippable",
    price: 0.99,
  },
];

export const combos: Combo[] = [
  {
    id: "classic-combo",
    name: "Classic Combo",
    includes: ["Classic Smash", "+ Fries", "+ Drink"],
    price: 16.99,
  },
  {
    id: "bacon-combo",
    name: "Bacon Combo",
    includes: ["Bacon Smash", "+ Fries", "+ Drink"],
    price: 17.99,
  },
  {
    id: "spicy-combo",
    name: "Spicy Combo",
    includes: ["Spicy Inferno", "+ Fries", "+ Drink"],
    price: 17.49,
  },
  {
    id: "chicken-combo",
    name: "Chicken Combo",
    includes: ["Crispy Chicken", "+ Fries", "+ Drink"],
    price: 15.99,
  },
];
