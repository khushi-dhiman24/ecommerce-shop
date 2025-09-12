"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function SaleOnCategories({ categories }) {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4 px-4">Sale on Categories</h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}          // ✅ one category per slide
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <div className="bg-white rounded-lg shadow p-4 mx-4">
              <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {category.products.map((product) => (
                  <div key={product.id} className="border rounded p-2 flex flex-col items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-32 object-cover rounded"
                    />
                    <p className="text-sm mt-2 font-medium">{product.name}</p>
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
