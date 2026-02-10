export default function Profile() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Arsa Wayan Guest House</h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Nestled in the heart of Bali, Arsa Wayan Guest House offers a tranquil escape from the hustle and bustle. 
              Our guest house is designed to provide you with a unique blend of traditional Balinese architecture and modern comfort.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you are here for a romantic getaway, a family vacation, or a solo adventure, our dedicated staff 
              is here to ensure your stay is memorable. Enjoy our lush gardens, comfortable rooms, and warm hospitality.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl transform transition hover:scale-105 duration-300">
            <img 
              src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1080&q=80" 
              alt="Arsa Wayan Guest House Garden" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
