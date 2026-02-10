export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-8 border-b border-gray-800 pb-8">
          
          {/* Brand & Description */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Arsa Wayan Guest House</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Experience the true essence of Bali with our warm hospitality and serene environment.
            </p>
          </div>

          {/* Quick Links (Optional - could replicate navbar) */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#rooms" className="text-gray-400 hover:text-white transition-colors">Our Rooms</a></li>
              <li><a href="#reviews" className="text-gray-400 hover:text-white transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-400">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-gray-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">Jalan Raya Ubud No. 123, Ubud, Bali, Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-400">+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400">info@arsawayan.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} CREATIFIN. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
