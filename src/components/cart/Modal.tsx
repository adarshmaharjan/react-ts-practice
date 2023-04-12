import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { clearCart } from "../../features/cart/cartSlice";
import { closeModal } from "../../features/modal/modalSlice";

const Modal: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from the shopping cart</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            Confirm
          </button>
        </div>
        <button
          type="button"
          className="btn clear-btn"
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          Cancel
        </button>
      </div>
    </aside>
  );
};

export default Modal;
