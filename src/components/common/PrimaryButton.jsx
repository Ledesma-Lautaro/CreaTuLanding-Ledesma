import React from "react";

const PrimaryButton = ({ text }) => {
  return (
    <a
      href="#"
      className="px-6 py-3 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-cyan-600 hover:text-white transition duration-300"
    >
      {text}
    </a>
  );
};

export default PrimaryButton;
