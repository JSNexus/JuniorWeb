import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

export default function HomeSection() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const backgroundImages = [
    "/galeria/1.jpg",
    "/galeria/2.jpg",
    "/galeria/3.jpg",
    "/galeria/4.jpg",
  ];

  return (
    <section className="relative flex min-h-screen">
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="w-full h-full"
        >
          {backgroundImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image})`,
                  filter: "brightness(0.6)",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="relative z-10 flex w-full">
        <div className="w-1/2 hidden md:block"></div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="bg-white/90 backdrop-blur-sm p-10 rounded-xl shadow-2xl max-w-md w-full">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-800 mb-4 text-center"
            >
              Tete Júnior School
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-gray-600 mb-8"
            >
              Empowering Students, Inspiring Futures
            </motion.p>

            <div className="relative">
              <Card className="w-full border-none shadow-lg">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-xl">
                  <CardTitle className="flex items-center justify-center">
                    <CalendarIcon className="mr-2" />
                    School Calendar
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 relative">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="w-full"
                    components={{
                      IconLeft: () => <ChevronLeftIcon className="h-4 w-4" />,
                      IconRight: () => <ChevronRightIcon className="h-4 w-4" />,
                    }}
                  />
                </CardContent>
              </Card>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 flex justify-center"
            >
              <Link href="/about" className="w-full max-w-xs">
                <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:opacity-90 transition-all">
                  Explore Our School
                  <ArrowRightIcon className="h-5 w-5" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
