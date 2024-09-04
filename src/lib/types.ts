export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "apparels" | "accessories";
  imageUrl: string;
};

export interface CartItem extends Product {
  quantity: number;
}

export interface RootState {
  cart: CartItem[];
}
