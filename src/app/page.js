"use client";

import ProductOfferCarousel from "../components/ProductOffercarousel";
import SaleOnCategories from "../components/SaleOnCategories";
import CategoryCarousel from "../components/CategoryCarousel";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function HomePage() {
  const hotDeals = [
    { id: 1, name: "Summer T-Shirt", image: "/images/tshirt.jpg", discount: "20% Off" },
    { id: 2, name: "Running Shoes", image: "/images/shoes.jpg", discount: "15% Off" },
    { id: 3, name: "Smart Watch", image: "/images/watch.jpg", discount: "25% Off" },
    { id: 4, name: "Backpack", image: "/images/backpack.jpg", discount: "30% Off" },
  ];

  const categories = [
    {
      id: 1,
      name: "Clothing",
      products: [
        { id: 1, name: "T-Shirt", image: "/images/tshirt.jpg" },
        { id: 2, name: "Jeans", image: "/images/jeans.jpg" },
        { id: 3, name: "Jacket", image: "/images/jacket.jpg" },
        { id: 4, name: "Dress", image: "/images/dress.jpg" },
      ],
    },
    {
      id: 2,
      name: "Shoes",
      products: [
        { id: 5, name: "Sneakers", image: "/images/shoes.jpg" },
        { id: 6, name: "Boots", image: "/images/boots.jpg" },
        { id: 7, name: "Sandals", image: "/images/sandals.jpg" },
        { id: 8, name: "Loafers", image: "/images/loafers.jpg" },
      ],
    },
    {
      id: 3,
      name: "Electronics",
      products: [
        { id: 9, name: "Smartphone", image: "/images/phone.jpg" },
        { id: 10, name: "Laptop", image: "/images/laptop.jpg" },
        { id: 11, name: "Headphones", image: "/images/headphones.jpg" },
        { id: 12, name: "Camera", image: "/images/camera.jpg" },
      ],
    },
    {
      id: 4,
      name: "Accessories",
      products: [
        { id: 13, name: "Watch", image: "/images/watch.jpg" },
        { id: 14, name: "Sunglasses", image: "/images/sunglasses.jpg" },
        { id: 15, name: "Bag", image: "/images/bag.jpg" },
        { id: 16, name: "Belt", image: "/images/belt.jpg" },
      ],
    },
  ];

  return (
    <div className=" flex flex-col bg-gray-50 h-full">
      <Navbar/>
      <div className="flex-grow">
        <ProductOfferCarousel products={hotDeals} />
        <SaleOnCategories categories={categories} />
        <CategoryCarousel categories={categories} />
      </div>
      <Footer/>
    </div>
  );
}
