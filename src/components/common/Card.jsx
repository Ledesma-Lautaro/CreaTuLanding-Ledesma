import React from "react";
import SecondaryButton from "./SecondaryButton";

const Card = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-cyan-600">
            ${product.price}
          </span>
          <SecondaryButton text="Add to Cart" />
        </div>
      </div>
    </div>
  );
};

export default Card;
