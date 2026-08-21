export type CategoryId = "burgers" | "combos" | "sides" | "drinks" | "sauces";

export interface MenuCategory {
  id: CategoryId;
  label: string;
}

export interface MenuItem {
  id: string;
  category: Exclude<CategoryId, "combos">;
  name: string;
  description: string;
  price: number;
  popular: boolean;
  dateAdded: string;
}

export interface Combo {
  id: string;
  name: string;
  includes: string[];
  price: number;
  popular: boolean;
  dateAdded: string;
}
