import React, { useState } from "react";
import FeatureCheckbox from "./components/FeatureCheckbox";
import Invoice from "./components/Invoice";
import Footer from "./components/Footer"; 
import { motion } from "framer-motion";
import { FaFileInvoice } from "react-icons/fa";
import jsPDF from "jspdf";
import "jspdf-autotable";

const App = () => {
  // Features with their prices
const features = [
  { id: 1, name: "User Accounts (Signup, Login, Logout)", price: 15 },
  { id: 2, name: "Contact Form Submission", price: 10 },
  { id: 3, name: "Dark Mode Toggle (Switch between light and dark)", price: 5 },
  { id: 4, name: "Custom Error Pages (Unique 404 and 500 pages)", price: 10 },
  { id: 5, name: "Comment Section", price: 50 },
  { id: 6, name: "User Profiles (Editable info and profile pics)", price: 25 },
  { id: 7, name: "Password Reset/Change (requires email with 3FA)", price: 20 },
  { id: 8, name: "Search Functionality (Find things fast)", price: 20 },
  { id: 9, name: "Email Subscription (Newsletter signup)", price: 20 },
  { id: 10, name: "SMS/Email Alerts (requires email with 3FA)", price: 40 },
  { id: 11, name: "File Upload System (Upload images, docs)", price: 5 },
  { id: 12, name: "Google Maps Integration (You will have to provide api)", price: 25 },
  { id: 13, name: "Admin Panel Customization (Improved visuals)", price: 20 },
  { id: 14, name: "Event Calendar (Book and track events)", price: 50 },
  { id: 15, name: "Blog System (Write and manage posts)", price: 60 },
  { id: 16, name: "Graphs for data visualization", price: 50 },
  { id: 17, name: "Online Shop (Products, Cart, Checkout)", price: 100 },
  { id: 18, name: "Payment Integration (PayPal, Stripe [Requires API keys, client IDs/secrets for PayPal/Stripe, and access to a developer account for sandbox testing.])", price: 60 },
  { id: 19, name: "API Support (Connect your app to others)", price: 80 },
  { id: 20, name: "Analytics Dashboard (Charts and stats)", price: 70 },
  { id: 21, name: "Multilingual Support (Multiple languages, with Google API)", price: 10 },
  { id: 22, name: "Real-Time Notifications (Stay updated)", price: 50 },
  { id: 23, name: "Two-Factor Authentication [Requires Access to email or SMS service (like Twilio), and user setup for OTP delivery.]", price: 40 },
  { id: 24, name: "Retrieve leads/data from admin into CSV file", price: 10 },
  { id: 25, name: "Technical SEO Optimization", price: 30 },
  { id: 26, name: "Maintenance per month", price: 30 },
  { id: 27, name: "Cloud Hosting Setup (Online server setup)", price: 60 },
  { id: 28, name: "Automated Updates (CI/CD setup)", price: 70 },
  { id: 29, name: "Chat System (Real-time messaging)", price: 75 },
  { id: 30, name: "Multi-User Roles (Admin, Editor, Viewer)", price: 30 },
];

const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [pages, setPages] = useState(1);
  const pageRate = 10; // Changed to $10 per page

  const handleFeatureChange = (featureId, isChecked) => {
    let newSelectedFeatures = [...selectedFeatures];
    if (isChecked) {
      newSelectedFeatures.push(featureId);
    } else {
      newSelectedFeatures = newSelectedFeatures.filter((id) => id !== featureId);
    }
    setSelectedFeatures(newSelectedFeatures);

    const featurePrice = newSelectedFeatures.reduce((total, id) => {
      const feature = features.find((f) => f.id === id);
      return total + feature.price;
    }, 0);
    setTotalPrice(featurePrice + pages * pageRate); // Calculate total with the correct page rate
  };

  const handlePageChange = (e) => {
    const value = parseInt(e.target.value, 10) || 1;
    setPages(value);

    const featurePrice = selectedFeatures.reduce((total, id) => {
      const feature = features.find((f) => f.id === id);
      return total + feature.price;
    }, 0);
    setTotalPrice(featurePrice + value * pageRate); // Recalculate total with the updated page count
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Title
    doc.text("Invoice", 20, 20);
    
    // Number of pages and page rate
    doc.text(`Number of Pages: ${pages}`, 20, 30);
    doc.text(`Page Rate: $${pageRate}`, 20, 40);
    
    // Selected features and prices
    const selectedFeatureDetails = selectedFeatures.map((id) => {
      const feature = features.find((f) => f.id === id);
      return [feature.name, `$${feature.price}`];
    });
  
    doc.autoTable({
      head: [["Feature", "Price"]],
      body: selectedFeatureDetails,
      startY: 50,
    });
  
    // Total price
    const totalPriceY = 70 + selectedFeatureDetails.length * 10;
    doc.text(`Total Price For Development: $${totalPrice}`, 20, totalPriceY);
  
 // Note about domain and hosting
const noteY = totalPriceY + 10;

// Define a maximum width for the text to avoid overflow
const pageWidth = 180; // Adjust according to your PDF dimensions (e.g., A4 is 210mm wide)

// Add the note with line wrapping
doc.text(
  "Note: You will have to provide domain and hosting for deployment if you have selected this service.",
  20, // X-coordinate
  noteY, // Y-coordinate
  { maxWidth: pageWidth - 40 } // Keep 20mm margins on both sides
);

  
    // Save the PDF
    doc.save("invoice.pdf");
  };
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
      {/* Header Section with Hover Effect and Icon Animation */}
      <motion.header
        className="w-full p-4 bg-gradient-to-r from-blue-700 to-blue-800 text-center shadow-lg"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        whileHover={{ scale: 1.02 }}
      >
        <h1 className="text-3xl font-extrabold flex items-center justify-center gap-2 text-shadow-md">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          >
            <FaFileInvoice />
          </motion.div>
          Pricing Calculator
        </h1>
      </motion.header>

      <main className="flex flex-col items-center py-10 px-6 w-full">
        {/* Features Section with Staggered Fade-in Animation */}
        <motion.h2
          className="text-2xl font-bold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Choose Your Features
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut', staggerChildren: 0.2 }}
        >
          {features.map((feature) => (
            <FeatureCheckbox
              key={feature.id}
              feature={feature}
              onChange={handleFeatureChange}
              whileHover={{ scale: 1.05, backgroundColor: "#e0e7ff" }}
            />
          ))}
        </motion.div>

        {/* Pages Input Section with Focus Effect */}
        <div className="mt-10">
          <motion.h3
            className="text-xl font-semibold mb-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Number of Pages ($10 per page)
          </motion.h3>
          <input
            type="number"
            min="1"
            value={pages}
            onChange={handlePageChange}
            className="w-24 p-2 border border-gray-300 rounded-md text-center text-black shadow-sm focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
        </div>

        {/* Total Price Section with Pulsing Animation */}
        <div className="mt-6">
          <motion.h3
            className="text-2xl font-semibold"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Total Price: <span className="text-green-400">${totalPrice}</span>
          </motion.h3>
        </div>

        {/* Invoice Section */}
        <Invoice
          selectedFeatures={selectedFeatures.map((id) =>
            features.find((feature) => feature.id === id)
          )}
          totalPrice={totalPrice}
        />

        {/* Download Button with Hover Effect */}
        <motion.button
          onClick={generatePDF}
          className="mt-8 bg-green-500 px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-600 transition duration-300"
          whileHover={{ scale: 1.1, rotate: 2 }}
        >
          Download Invoice
        </motion.button>
      </main>

      <Footer />
      
    </div>
  );
};

export default App;