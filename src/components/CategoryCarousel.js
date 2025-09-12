// src/components/CategoryCarousel.js
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function CategoryCarousel({ categories }) {
  if (!categories || categories.length === 0) return null;

  return (
    <div className="mb-16 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Shop by Category</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={categories.length >= 4}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <div className="bg-gray-100 rounded-xl p-4 shadow-md h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-4 text-center text-blue-800">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.products.slice(0, 4).map((product) => (
                  <div
                    key={product.id}
                    className="border rounded-lg p-2 bg-white hover:shadow-lg transition"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-28 object-cover rounded-md"
                    />
                    <p className="text-sm font-medium mt-2 text-center">{product.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
