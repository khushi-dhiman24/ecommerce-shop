"use client";
import { useState } from "react";
import ProductCard from "../../components/ProductCard";

const products = [
  { id: 1, name: "Classic T-Shirt", price: 499, image: "/products/shirt.jpg" },
  { id: 2, name: "Running Shoes", price: 2499, image: "/products/shoes.jpg" },
  { id: 3, name: "Smart Watch", price: 3999, image: "/products/watch.jpg" },
  { id: 4, name: "Backpack", price: 1199, image: "/products/bag.jpg" },
];

export default function ShopPage() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart ✅`);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">🛍️ Shop</h1>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      {/* Cart preview */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold">🛒 Cart ({cart.length})</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500 mt-2">No items in cart.</p>
        ) : (
          <ul className="list-disc pl-6 mt-2">
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ₹{item.price}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
