import React from "react";

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
          <button className="px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
