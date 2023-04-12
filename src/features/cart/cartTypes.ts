interface CartItemInterface {
  id: string;
  title: string;
  price: string;
  img: string;
  amount: number;
}
interface CartStateInterface {
  cartItems: CartItemInterface[];
  amount: number;
  total: number;
  isLoading: boolean;
  // loading: "idle" | "pending" | "succeeded" | "failed";
}

export type { CartItemInterface, CartStateInterface };
