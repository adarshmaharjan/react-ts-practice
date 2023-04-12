import React from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { CartItemInterface } from "../../features/cart/cartTypes";
import { decrease, increase, removeItem } from "../../features/cart/cartSlice";
import { useAppDispatch } from "../../app/hooks";

const CartItem: React.FC<CartItemInterface> = ({
  id,
  img,
  title,
  price,
  amount,
}) => {
  const dispatch = useAppDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          aria-label="up"
          type="button"
          className="amount-btn"
          onClick={() => dispatch(increase(id))}
        >
          <FaArrowUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          aria-label="down"
          type="button"
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease(id));
          }}
        >
          <FaArrowDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
