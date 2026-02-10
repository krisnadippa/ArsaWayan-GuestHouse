'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Wifi, Snowflake, ShowerHead, Wind, Coffee } from 'lucide-react';

interface RoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  room: {
    name: string;
    description: string;
    price: string;
    images: string[];
    facilities: string[];
    phoneNumber: string;
  } | null;
}

export default function RoomModal({ isOpen, onClose, room }: RoomModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen || !room) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const getIcon = (facility: string) => {
    switch (facility.toLowerCase()) {
      case 'ac': return <Snowflake className="w-4 h-4" />;
      case 'shower': return <ShowerHead className="w-4 h-4" />;
      case 'wifi': return <Wifi className="w-4 h-4" />;
      case 'hairdryer': return <Wind className="w-4 h-4" />;
      case 'breakfast': return <Coffee className="w-4 h-4" />;
      default: return null;
    }
  };

  const handleBooking = () => {
    const message = `Hello, I would like to book the ${room.name} at Arsa Wayan Guest House. Is it available?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${room.phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl flex flex-col md:flex-row relative"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
              >
                <X className="w-6 h-6 text-gray-900" />
              </button>

              {/* Image Gallery Section */}
              <div className="md:w-1/2 h-64 md:h-auto relative bg-gray-100">
                <div className="relative w-full h-full">
                  <img
                    src={room.images[currentImageIndex]}
                    alt={`${room.name} view ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {room.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6 text-gray-900" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 rounded-full hover:bg-white transition-colors"
                      >
                        <ChevronRight className="w-6 h-6 text-gray-900" />
                      </button>
                      
                      {/* Dots Indicator */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {room.images.map((_, idx) => (
                          <div
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Details Section */}
              <div className="md:w-1/2 p-8 overflow-y-auto">
                <div className="mb-6">
                  <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-3">
                    {room.price}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{room.name}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {room.description}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Facilities</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {room.facilities.map((facility, index) => (
                      <div key={index} className="flex items-center gap-2 text-gray-600">
                        <div className="p-1.5 bg-gray-100 rounded-lg">
                          {getIcon(facility)}
                        </div>
                        <span className="capitalize">{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <button
                    onClick={handleBooking}
                    className="w-full bg-gray-900 text-white font-bold py-4 px-6 rounded-xl hover:bg-gray-800 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>Book Now via WhatsApp</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
