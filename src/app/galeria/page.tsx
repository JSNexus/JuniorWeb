"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { X, Expand, Folder, ChevronLeft, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

interface ImageType {
  src: string;
  alt: string;
}

interface FolderType {
  nome: string;
  descricao: string;
  imagens: ImageType[];
}

interface PastasType {
  [key: string]: FolderType;
}

const GaleriaComPastas = () => {
  const router = useRouter();

  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [currentFolder, setCurrentFolder] = useState<string | null>(null);

  // Estrutura de dados organizada por pastas
  const pastas: PastasType = {
    aniversario: {
      nome: "Aniversários",
      descricao: "Momentos especiais de celebração",
      imagens: [
        {
          src: "/galeria/aniversario/1.jpg",
          alt: "Festa de aniversário na escola",
        },
        { src: "/galeria/aniversario/2.jpg", alt: "Soprar as velinhas" },
        { src: "/galeria/aniversario/3.jpg", alt: "Decoração temática" },
      ],
    },
    graduacao: {
      nome: "Graduações",
      descricao: "Conquistas acadêmicas",
      imagens: [
        { src: "/galeria/graduacao/1.jpg", alt: "Cerimônia de formatura" },
        { src: "/galeria/graduacao/2.jpg", alt: "Entrega dos diplomas" },
        { src: "/galeria/graduacao/3.jpg", alt: "Fotos em grupo" },
      ],
    },
    eventos: {
      nome: "Eventos",
      descricao: "Eventos especiais e apresentações",
      imagens: [
        { src: "/galeria/eventos/1.jpg", alt: "Feira de ciências" },
        { src: "/galeria/eventos/2.jpg", alt: "Apresentação de teatro" },
        { src: "/galeria/eventos/3.jpg", alt: "Festival de música" },
      ],
    },
  };

  const openImageModal = (image: ImageType) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const openFolder = (folderKey: string) => {
    setCurrentFolder(folderKey);
  };

  const closeFolder = () => {
    setCurrentFolder(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Hero Section */}
      <div className="relative bg-blue-600 h-64">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"></div>
        <img
          src="/api/placeholder/1920/400"
          alt="FAQ Banner"
          className="w-full h-full object-cover mix-blend-overlay opacity-20"
        />
        <div className="absolute inset-0 flex flex-col justify-center px-6 max-w-7xl mx-auto">
          <button
            onClick={() => router.push("/")}
            className="flex items-center text-white mb-6 hover:text-blue-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Photo Gallery
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Discover moments captured in our school through our photo gallery.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl py-9">
        <AnimatePresence mode="wait">
          {!currentFolder ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {Object.entries(pastas).map(([key, pasta]) => (
                <Card
                  key={key}
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300"
                  onClick={() => openFolder(key)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Folder className="w-8 h-8 text-blue-500 group-hover:text-blue-600 transition-colors" />
                      <div>
                        <h3 className="text-xl font-semibold">{pasta.nome}</h3>
                        <p className="text-sm text-gray-500">
                          {pasta.descricao}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">
                      {pasta.imagens.length} fotos
                    </p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-8">
                <Button
                  variant="ghost"
                  className="flex items-center gap-2"
                  onClick={closeFolder}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Voltar
                </Button>
                <h3 className="text-2xl font-semibold">
                  {pastas[currentFolder].nome}
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {pastas[currentFolder].imagens.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => openImageModal(image)}
                  >
                    <div className="relative aspect-[4/3]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                        <Expand className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
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
                <Button
                  variant="ghost"
                  className="absolute -top-12 right-0 text-white hover:text-gray-300"
                  onClick={closeImageModal}
                >
                  <X className="w-6 h-6" />
                </Button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
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
};

export default GaleriaComPastas;
