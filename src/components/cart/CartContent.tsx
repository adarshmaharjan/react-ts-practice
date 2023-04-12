import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { calculateTotal, getCartItems } from "../../features/cart/cartSlice";
import CartContainer from "./CartContainer";
import Modal from "./Modal";
import Navbar from "./Navbar";

const CartContent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cartItems, isLoading } = useAppSelector((store) => store.cart);
  const { isOpen } = useAppSelector((store) => store.modal);
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);
  if (isLoading) {
    return (
      <div className="loading">
        <h2>loading...</h2>
      </div>
    );
  }
  return (
    <>
      {/* <Counter />
      <Pokemon /> */}
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </>
  );
};

export default CartContent;
