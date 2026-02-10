'use client';

import { useState } from 'react';
import { Utensils, Flower } from 'lucide-react';
import ActivityModal from './ActivityModal';

export default function Activities() {
  const [selectedActivity, setSelectedActivity] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activities = [
    {
      id: 1,
      title: "Balinese Cooking Class",
      description: "Immerse yourself in the flavors of Bali. Visit the local market to pick fresh ingredients, then learn the secrets of traditional Balinese spices and cooking techniques from our expert local chefs. Enjoy your own handmade delicious feast!",
      image: "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      images: [
        "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1559847844-5315695dadae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
      ],
      icon: <Utensils className="w-6 h-6" />,
      highlights: ["Market Tour", "Traditional Recipes", "Lunch Included"],
      itinerary: [
        { title: "Market Tour", desc: "Start the day with a visit to the local traditional market to select fresh ingredients." },
        { title: "Base Genep (Spice Paste)", desc: "Learn to make the foundation of all Balinese cooking, the complete spice paste." },
        { title: "Sate Lilit", desc: "Craft the famous Balinese minced meat satay on lemongrass sticks." },
        { title: "Lawar (Vegetable Mix)", desc: "Prepare the traditional vegetable mix with spices and coconut." },
        { title: "Balinese Rice", desc: "Learn the traditional way of steaming rice for the perfect texture." }
      ]
    },
    {
      id: 2,
      title: "One Day as Balinese People",
      description: "Experience the authentic daily life of a Balinese family. Learn how to make 'Canang Sari' (offerings), wear traditional attire, visit the village temple, and participate in rice farming activities. A truly spiritual and cultural journey.",
      image: "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
      images: [
        "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        "https://images.unsplash.com/photo-1554481923-a6918bd997bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
      ],
      icon: <Flower className="w-6 h-6" />,
      highlights: ["Making Offerings", "Temple Visit", "Farming Experience"],
      itinerary: [
        { title: "Making Canang Sari", desc: "Learn the art of creating the daily Balinese flower offerings." },
        { title: "Traditional Dress", desc: "Wear the traditional Balinese attire, kebaya and sarong." },
        { title: "Temple Visit & Prayer", desc: "Visit the village temple and learn about Balinese Hindu prayers." },
        { title: "Balinese Dance Lesson", desc: "Learn the basic movements of traditional Balinese dance." },
        { title: "Watching Barong Dance", desc: "Enjoy a performance of the mythical Barong dance in the village." },
        { title: "Communal Cooking", desc: "Join the family in preparing a traditional meal together." }
      ]
    }
  ];

  const handleOpenModal = (activity: any) => {
    setSelectedActivity(activity);
    setIsModalOpen(true);
  };

  return (
    <section id="activity" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience & Activities</h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Make your stay unforgettable with our curated cultural experiences. Click on any card to see the full itinerary.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {activities.map((activity) => (
            <div 
              key={activity.id} 
              className="group relative overflow-hidden rounded-2xl shadow-xl h-[500px] cursor-pointer"
              onClick={() => handleOpenModal(activity)}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={activity.image} 
                  alt={activity.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-amber-400 p-2 rounded-lg text-gray-900">
                    {activity.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{activity.title}</h3>
                </div>
                
                <p className="text-gray-200 mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {activity.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {activity.highlights.map((tag, idx) => (
                    <span key={idx} className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm border border-white/30">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <button className="w-full py-3 bg-amber-400 text-gray-900 font-bold rounded-lg hover:bg-amber-500 transition-colors">
                    View Details & Itinerary
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ActivityModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        activity={selectedActivity} 
      />
    </section>
  );
}
