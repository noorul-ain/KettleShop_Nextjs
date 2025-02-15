"use client"; // Required for Framer Motion in Next.js

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const products = [
  {
    name: "Electric Kettle Pro",
    rating: 4.0,
    price: 90,
    image: "/p1.png", // Replace with your image path
  },
  {
    name: "Smart Electric Kettle",
    rating: 4.0,
    price: 85,
    image: "/p2.png", // Replace with your image path
  },
  {
    name: "Travel Electric Kettle",
    rating: 3.0,
    price: 70,
    image: "/p3.png", // Replace with your image path
  },
  {
    name: "Premium Electric Kettle",
    rating: 5.0,
    price: 120,
    image: "/p4.png", // Replace with your image path
  },
  {
    name: "Compact Electric Kettle",
    rating: 4.0,
    price: 75,
    image: "/p5.png", // Replace with your image path
  },
  {
    name: "Luxury Electric Kettle",
    rating: 5.0,
    price: 150,
    image: "/p6.png", // Replace with your image path
  },
];

export default function ProductCards() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-3xl font-semibold mb-2">Our Products</h2>
        <p className="text-gray-500 mb-8">
          Explore our range of high-quality electric kettles designed to suit every need and budget.
        </p>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }} // Slight scaling on hover
            >
              {/* Product Image */}
              <motion.div
                className="aspect-square relative mb-4"
                whileHover={{ scale: 1.1 }} // Zoom effect on hover
              >
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="object-contain w-full h-full rounded-lg"
                  whileHover={{ scale: 1.05 }} // Smooth image zoom effect
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Product Details */}
              <h3 className="font-medium text-lg mb-2">{product.name}</h3>
              <div className="flex items-center justify-center gap-1 mb-2">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">{product.rating}</span>
              </div>
              <div className="text-lg font-semibold">${product.price}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
