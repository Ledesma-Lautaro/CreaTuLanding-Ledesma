import React from "react";

const SecondaryButton = ({ text }) => {
  return (
    <button className="px-4 py-2 cursor-pointer bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors duration-300">
      {text}
    </button>
  );
};

export default SecondaryButton;
