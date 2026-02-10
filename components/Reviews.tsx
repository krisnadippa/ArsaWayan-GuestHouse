export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Jenkins",
      date: "October 2023",
      rating: 5,
      comment: "Absolutely loved our stay at Arsa Wayan! The family is so welcoming and the room was spotless. The location is perfect, quiet but close to everything.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      date: "August 2023",
      rating: 5,
      comment: "A hidden gem in Bali. The garden is beautiful and the breakfast was delicious. Highly recommend for anyone looking for an authentic experience.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Emma Wilson",
      date: "July 2023",
      rating: 4,
      comment: "Great value for money. The host was very helpful with arranging transport and tours. Will definitely coming back!",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Guest Reviews</h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-400"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < review.rating ? 'text-amber-400' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 italic">"{review.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
