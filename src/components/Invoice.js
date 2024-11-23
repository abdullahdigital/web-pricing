import React from "react";
import { motion } from "framer-motion"; // Import framer-motion for animations

const Invoice = ({ selectedFeatures, totalPrice }) => {
  return (
    <motion.div
      className="mt-8 p-8 bg-gradient-to-br from-white via-gray-100 to-gray-50 shadow-lg rounded-lg max-w-lg border border-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center border-b-2 border-gray-300 pb-4">
        🧾 Invoice Details
      </h2>
      <div className="mb-6">
        <ul className="divide-y divide-gray-200">
          {selectedFeatures.length > 0 ? (
            selectedFeatures.map((feature) => (
              <motion.li
                key={feature.id}
                className="flex justify-between py-4 items-center hover:bg-gray-50 cursor-pointer transition duration-200 ease-in-out"
                whileHover={{ scale: 1.02 }}
              >
                <span className="font-medium text-gray-700">{feature.name}</span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  ${feature.price}
                </span>
              </motion.li>
            ))
          ) : (
            <li className="py-4 text-center text-gray-500 font-semibold">
              No features selected.
            </li>
          )}
        </ul>
      </div>
      <div className="flex justify-between items-center text-lg font-semibold border-t-2 border-gray-300 pt-4">
        <span className="text-gray-800">Total Amount</span>
        <span className="bg-green-100 text-green-600 px-4 py-2 rounded-lg flex items-center gap-1">
          <span>$</span>{totalPrice}
        </span>
      </div>
      <p className="mt-6 text-sm text-gray-500 text-center">
        Thank you for using our service! 💻
      </p>
    </motion.div>
  );
};

export default Invoice;
