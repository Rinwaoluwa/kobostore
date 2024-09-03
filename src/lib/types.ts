export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category:"shirts" | "bags" | "shoes";
  imageUrl: string;
};
