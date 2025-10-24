import type { Product } from "./types";

export const processProducts = (
  products: Product[],
  categoryFilter: string
): { name: string; price: number }[] => 
  products
    .filter(({ category }) => category === categoryFilter)
    .map(({ name, price }) => ({ name, price }));
