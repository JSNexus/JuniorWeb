"use client";

import Image from "next/image";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Galeria() {
  const images = [
    "/galeria/1.jpg",
    "/galeria/2.jpg",
    "/galeria/3.jpg",
    "/galeria/1.jpg",
    "/galeria/2.jpg",
    "/galeria/3.jpg",
  ];

  return (
    <section id="galeria" className="w-full px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            renderBullet: function (index, className) {
              return `<span class="${className} bg-gray-500 opacity-50 hover:opacity-100 transition-opacity duration-300"></span>`;
            },
          }}
          className="w-full"
        >
          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <div className="relative w-full max-w-xl mx-auto">
                <Image
                  src={src}
                  alt={`Galeria ${index + 1}`}
                  width={100}
                  height={100}
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-2xl shadow-xl 
                    transition-all duration-500"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
