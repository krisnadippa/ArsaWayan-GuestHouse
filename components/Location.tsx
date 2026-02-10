'use client';

import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Location</h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5 text-amber-500" />
            Find us in the heart of Bali's cultural landscape.
          </p>
        </div>

        <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <iframe 
            width="100%" 
            height="100%" 
            id="gmap_canvas" 
            src="https://maps.google.com/maps?q=Arsa+Wayan+Guest+House&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight={0} 
            marginWidth={0}
            title="Arsa Wayan Guest House Location"
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
          
          {/* Overlay for better integration */}
          <div className="absolute inset-0 pointer-events-none ring-1 ring-black/5 rounded-2xl"></div>
        </div>
        
        <div className="mt-8 text-center">
            <a 
                href="https://maps.app.goo.gl/amtCA9y4tr3UkQvU7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors"
            >
                <MapPin className="w-4 h-4" />
                Open in Google Maps
            </a>
        </div>
      </div>
    </section>
  );
}
