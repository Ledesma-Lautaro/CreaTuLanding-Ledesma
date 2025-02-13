import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const CartShop = ({ itemCount = 0 }) => {
  return (
    <a href="#" className="relative">
      {/* Cart Icon */}
      <CiShoppingCart className="hover:text-cyan-600 transition duration-300 size-7" />

      {/* Item Count Badge */}
      {itemCount > 0 && (
        <div className="absolute -bottom-1 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
          {itemCount}
        </div>
      )}
    </a>
  );
};

export default CartShop;