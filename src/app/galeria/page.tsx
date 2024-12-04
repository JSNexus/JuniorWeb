"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Expand } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

// Define the type for the image object
interface ImageData {
  src: string;
  alt: string;
}

export default function Galeria() {
  // Explicitly type the state with the ImageData interface or null
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const images: ImageData[] = [
    { src: "/galeria/1.jpg", alt: "Crianças brincando no parquinho" },
    { src: "/galeria/2.jpg", alt: "Aula de artes colorida" },
    { src: "/galeria/3.jpg", alt: "Momento de leitura compartilhada" },
    { src: "/galeria/4.jpg", alt: "Experimento científico divertido" },
    { src: "/galeria/5.jpg", alt: "Apresentação musical das crianças" },
    { src: "/galeria/6.jpg", alt: "Atividade de educação física" },
    { src: "/galeria/7.jpg", alt: "Experimento científico divertido" },
    { src: "/galeria/8.jpg", alt: "Apresentação musical das crianças" },
    { src: "/galeria/9.jpg", alt: "Atividade de educação física" },
  ];

  // Add type annotation for the image parameter
  const openImageModal = (image: ImageData) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-12 m">
          Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 ">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openImageModal(image)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={100}
                  height={100}
                  className="w-full h-48 md:h-64 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <Expand
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    size={48}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeImageModal}
            >
              <motion.div
                className="relative max-w-5xl w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeImageModal}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                >
                  <X size={32} />
                </button>
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={100}
                  height={100}
                  className="w-full max-h-[80vh] object-contain rounded-lg"
                />
                <p className="text-center text-white mt-4 text-lg">
                  {selectedImage.alt}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
