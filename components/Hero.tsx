export default function Hero() {
  return (
    <div id="home" className="relative bg-gray-900 h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder - Replace with actual image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Arsa Wayan Guest House"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4 animate-fade-in-up">
          Welcome to <span className="text-amber-400">Arsa Wayan</span> Guest House
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-200 mb-8 animate-fade-in-up delay-100">
          Experience authentic Balinese hospitality in a serene and comfortable setting. Your home away from home.
        </p>
        <div className="animate-fade-in-up delay-200">
          <a
            href="#rooms"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-amber-400 hover:bg-amber-500 md:py-4 md:text-lg md:px-10 transition-transform transform hover:scale-105 shadow-lg"
          >
            view Our Rooms
          </a>
        </div>
      </div>
    </div>
  );
}
