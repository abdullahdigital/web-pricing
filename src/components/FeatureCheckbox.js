import React, { useState } from "react";
import { motion } from "framer-motion";

const FeatureCheckbox = ({ feature, onChange }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked((prev) => {
      const newCheckedState = !prev;
      onChange(feature.id, newCheckedState);
      return newCheckedState;
    });
  };

  return (
    <motion.div
      className={`p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ${
        isChecked
          ? "bg-gradient-to-r from-green-400 to-green-600 text-white"
          : "bg-white text-black"
      }`}
      whileHover={{ scale: 1.05 }}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id={feature.name}
          className="w-5 h-5 accent-green-500 cursor-pointer"
          checked={isChecked}
          onChange={handleChange}
        />
        <label
          htmlFor={feature.name}
          className={`text-lg font-semibold ${isChecked ? "text-white" : "text-gray-800"}`}
        >
          {feature.name}
        </label>
      </div>
      <p
        className={`mt-2 text-sm font-medium ${isChecked ? "text-white" : "text-gray-600"}`}
      >
        Price: ${feature.price}
      </p>
    </motion.div>
  );
};

export default FeatureCheckbox;
