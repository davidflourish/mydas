import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1729615220950-f5b403467b3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXNvcnQlMjBiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3NjM2MDY4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'nature', title: 'Sunset Paradise' },
  { url: 'https://images.unsplash.com/photo-1668276490368-409a6002756d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGluZmluaXR5JTIwcG9vbHxlbnwxfHx8fDE3NjM2MDY4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'rooms', title: 'Infinity Pool' },
  { url: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2MzYwNTAyOXww&ixlib=rb-4.1.0&q=80&w=1080', category: 'rooms', title: 'Grand Lobby' },
  { url: 'https://images.unsplash.com/photo-1648450181162-825946c36727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjBiZWFjaCUyMGFlcmlhbHxlbnwxfHx8fDE3NjM2MDY4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'nature', title: 'Aerial View' },
  { url: 'https://images.unsplash.com/photo-1731336478850-6bce7235e320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBiZWR8ZW58MXx8fHwxNzYzNjA0NzE4fDA&ixlib=rb-4.1.0&q=80&w=1080', category: 'rooms', title: 'Luxury Suite' },
  { url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudHxlbnwxfHx8fDE3NjM1NzU1ODd8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'food', title: 'Fine Dining' },
  { url: 'https://images.unsplash.com/photo-1559090337-ba4123bb1682?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjBicmVha2Zhc3QlMjBidWZmZXR8ZW58MXx8fHwxNzYzNjA2ODExfDA&ixlib=rb-4.1.0&q=80&w=1080', category: 'food', title: 'Breakfast Buffet' },
  { url: 'https://images.unsplash.com/photo-1761470575018-135c213340eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjBzcGElMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjM1NjQ0Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'spa', title: 'Spa Retreat' },
  { url: 'https://images.unsplash.com/photo-1713902577801-1c49c875d48f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGFjdGl2aXRpZXMlMjBzbm9ya2VsaW5nfGVufDF8fHx8MTc2MzYwNjgxMHww&ixlib=rb-4.1.0&q=80&w=1080', category: 'activities', title: 'Snorkeling' },
  { url: 'https://images.unsplash.com/photo-1558117338-7ef3d637ce2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHJlc29ydCUyMHBhbG0lMjB0cmVlc3xlbnwxfHx8fDE3NjM2MDY4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'nature', title: 'Palm Paradise' },
  { url: 'https://images.unsplash.com/photo-1761039265583-9489b4246454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHN1aXRlJTIwYmFsY29ueXxlbnwxfHx8fDE3NjM1NzEzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'rooms', title: 'Balcony View' },
  { url: 'https://images.unsplash.com/photo-1477204505220-510cd0d57764?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHZpZXclMjBzdW5zZXQlMjBiZWFjaHxlbnwxfHx8fDE3NjM2MDY4MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'nature', title: 'Ocean Sunset' },
  { url: 'https://images.unsplash.com/photo-1617184431689-b40fa57859f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcmVzb3J0JTIwd2VkZGluZ3xlbnwxfHx8fDE3NjM2MDY4MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'events', title: 'Beach Wedding' },
  { url: 'https://images.unsplash.com/photo-1630595633877-9918ee257288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNzYWdlJTIwc3BhJTIwdHJlYXRtZW50fGVufDF8fHx8MTc2MzYwNjgxMXww&ixlib=rb-4.1.0&q=80&w=1080', category: 'spa', title: 'Spa Treatment' },
];

type Category = 'all' | 'rooms' | 'food' | 'nature' | 'activities' | 'spa' | 'events';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All Photos' },
    { value: 'rooms', label: 'Rooms' },
    { value: 'food', label: 'Dining' },
    { value: 'nature', label: 'Nature' },
    { value: 'activities', label: 'Activities' },
    { value: 'spa', label: 'Spa' },
    { value: 'events', label: 'Events' },
  ];

  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="relative h-96 -mt-32 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1648450181162-825946c36727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNvcnQlMjBiZWFjaCUyMGFlcmlhbHxlbnwxfHx8fDE3NjM2MDY4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Gallery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-6xl mb-4"
            >
              Gallery
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90"
            >
              A visual journey through paradise
            </motion.p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === cat.value
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={`${image.url}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <p className="text-white p-4 text-lg">{image.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X className="size-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={filteredImages[selectedImage].url}
                alt={filteredImages[selectedImage].title}
                className="w-full h-full object-contain rounded-lg"
              />
              <p className="text-white text-center mt-4 text-xl">
                {filteredImages[selectedImage].title}
              </p>
            </motion.div>

            {/* Navigation */}
            {selectedImage > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage - 1);
                }}
                className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
              >
                ←
              </button>
            )}
            {selectedImage < filteredImages.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage + 1);
                }}
                className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
              >
                →
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
