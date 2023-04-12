import React from "react";
import { FaBox } from "react-icons/fa";
import { useAppSelector } from "../../app/hooks";
const Navbar: React.FC = () => {
  const { amount } = useAppSelector((store) => store.cart);
  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <FaBox />
          <div className="amount-container">
            <div className="total-amount">{amount}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
