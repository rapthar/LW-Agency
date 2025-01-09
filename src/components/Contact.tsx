import React from 'react';
import ParallaxSection from './ParallaxSection';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <ParallaxSection className="bg-white py-24" id="contact" speed={0.1}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-24">
          {/* Left Column */}
          <div>
            <div className="mb-12">
              <h2 className="text-6xl font-serif mb-4">
                <span className="text-orange-500">New York</span>, USA
              </h2>
              <p className="text-gray-600">166 Main Street, Beverly Hills, CA 90210</p>
            </div>

            <div className="space-y-8">
              <a href="mailto:hello@lwstudio.com" className="block text-2xl font-medium hover:text-orange-500 transition-colors">
                hello@lwstudio.com
              </a>
              <a href="tel:+00853462188" className="block text-2xl font-medium hover:text-orange-500 transition-colors">
                +0085 346 2188
              </a>
            </div>

            <div className="mt-16">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors"
              >
                CONTACT US
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="relative">
            <div className="absolute inset-0 bg-gray-100 rounded-2xl overflow-hidden">
              {/* Map would go here - for now showing a placeholder */}
              <div className="w-full h-full bg-gray-200"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-orange-500 rounded-full" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 flex justify-between items-center text-sm text-gray-500">
          <div> LW 2024. BY FLASH CODED</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-orange-500 transition-colors">Twitter</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Facebook</a>
            <a href="#" className="hover:text-orange-500 transition-colors">Google+</a>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
}