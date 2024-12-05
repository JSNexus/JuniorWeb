import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  XIcon,
  PlayIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

export default function HomeSection() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isCardVisible, setIsCardVisible] = useState(true);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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

      {isVideoModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition"
                aria-label="Close video modal"
              >
                <XIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="relative pt-[56.25%]">
              {" "}
              {/* 16:9 Aspect Ratio Container */}
              <video
                src="/video/about.mp4"
                controls
                autoPlay
                className="absolute top-0 left-0 w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="p-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold flex items-center">
                  <PlayIcon className="mr-3 h-6 w-6" />
                  Discover Our Academic Journey
                </h2>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Rest of the existing code remains the same */}
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

            {isCardVisible && (
              <div className="relative">
                <button
                  onClick={() => setIsCardVisible(false)}
                  className="absolute top-2 right-2 bg-gray-200 text-gray-600 rounded-full p-2 hover:bg-gray-300 transition z-20"
                  aria-label="Close card"
                >
                  <XIcon className="h-5 w-5" />
                </button>

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
                        IconRight: () => (
                          <ChevronRightIcon className="h-4 w-4" />
                        ),
                      }}
                    />
                  </CardContent>
                </Card>
              </div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 flex justify-center"
            >
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="w-full max-w-xs flex items-center justify-center gap-2 
                           bg-gradient-to-r from-purple-600 to-blue-600 
                           text-white py-3 rounded-lg 
                           border-2 border-white/20 
                           hover:opacity-90 hover:shadow-lg 
                           transition-all"
              >
                Discover Our School
                <ArrowRightIcon className="h-5 w-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
