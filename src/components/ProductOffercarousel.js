// src/components/ProductOfferCarousel.js
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useEffect, useState } from "react";

export default function ProductOfferCarousel({ products }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted || !products || products.length === 0) return null;

  const bgColors = ["bg-blue-100", "bg-green-100", "bg-pink-100", "bg-yellow-100"];

  return (
    <div className="mb-16 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">🔥 Today’s Offers</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={products.length > 1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={product.id}>
            <div
              className={`relative rounded-xl shadow-lg p-6 flex flex-col items-center ${bgColors[index % bgColors.length]} transition transform hover:scale-[1.02]`}
            >
              <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                {product.discount}
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-w-sm h-64 object-cover rounded-md"
              />
              <p className="text-lg font-semibold mt-4 text-center">{product.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
