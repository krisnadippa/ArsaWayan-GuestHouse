'use client';

import { useState } from 'react';
import RoomCard from './RoomCard';
import RoomModal from './RoomModal';

export default function RoomList() {
  const [selectedRoom, setSelectedRoom] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const rooms = [
    {
      id: 1,
      name: "Standard Double Room",
      description: "A cozy room featuring a queen-size bed, private bathroom, and garden view. Perfect for couples or solo travelers looking for comfort and affordability.",
      price: "IDR 450,000 / night",
      imageUrl: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      facilities: ["AC", "Shower", "Wifi", "Hairdryer", "Breakfast"]
    },
    {
      id: 2,
      name: "Deluxe King Room",
      description: "Spacious room with a king-size bed, seating area, and private balcony. Experience luxury with modern amenities and beautiful Balinese decor.",
      price: "IDR 650,000 / night",
      imageUrl: "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      facilities: ["AC", "Shower", "Wifi", "Hairdryer", "Breakfast"]
    },
    {
      id: 3,
      name: "Family Suite",
      description: "Two connecting rooms ideal for families. Includes a king bed and twin beds, a small kitchenette, and a large terrace for family gatherings.",
      price: "IDR 1,100,000 / night",
      imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      facilities: ["AC", "Shower", "Wifi", "Hairdryer", "Breakfast"]
    }
  ];

  // Placeholder phone number - REPLACE with actual number
  const phoneNumber = "6281339711438"; 

  const handleOpenModal = (room: any) => {
    setSelectedRoom({ ...room, phoneNumber });
    setIsModalOpen(true);
  };

  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Rooms</h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our selection of comfortable rooms, each designed to provide a relaxing stay. Click on any room to view more details.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              name={room.name}
              description={room.description}
              price={room.price}
              imageUrl={room.imageUrl}
              phoneNumber={phoneNumber}
              facilities={room.facilities}
              onViewDetail={() => handleOpenModal(room)}
            />
          ))}
        </div>
      </div>
      
      <RoomModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        room={selectedRoom} 
      />
    </section>
  );
}
