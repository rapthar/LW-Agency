import React from 'react';
import ParallaxSection from './ParallaxSection';

export default function Clients() {
  const clients = [
    {
      id: 1,
      name: 'TechCorp',
      logo: 'https://placehold.co/200x80/ffffff/666666.png?text=TechCorp',
      grayscale: 'https://placehold.co/200x80/666666/ffffff.png?text=TechCorp'
    },
    {
      id: 2,
      name: 'InnovateLab',
      logo: 'https://placehold.co/200x80/ffffff/666666.png?text=InnovateLab',
      grayscale: 'https://placehold.co/200x80/666666/ffffff.png?text=InnovateLab'
    },
    {
      id: 3,
      name: 'DigitalFlow',
      logo: 'https://placehold.co/200x80/ffffff/666666.png?text=DigitalFlow',
      grayscale: 'https://placehold.co/200x80/666666/ffffff.png?text=DigitalFlow'
    },
    {
      id: 4,
      name: 'FutureWorks',
      logo: 'https://placehold.co/200x80/ffffff/666666.png?text=FutureWorks',
      grayscale: 'https://placehold.co/200x80/666666/ffffff.png?text=FutureWorks'
    },
    {
      id: 5,
      name: 'CreativeMinds',
      logo: 'https://placehold.co/200x80/ffffff/666666.png?text=CreativeMinds',
      grayscale: 'https://placehold.co/200x80/666666/ffffff.png?text=CreativeMinds'
    },
    {
      id: 6,
      name: 'SmartSolutions',
      logo: 'https://placehold.co/200x80/ffffff/666666.png?text=SmartSolutions',
      grayscale: 'https://placehold.co/200x80/666666/ffffff.png?text=SmartSolutions'
    }
  ];

  return (
    <ParallaxSection className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Trusted by Leaders</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We work with ambitious brands and people. Here are some of the amazing companies we've worked with.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client) => (
            <div
              key={client.id}
              className="group relative flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={client.grayscale}
                alt={client.name}
                className="opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Ready to start your project?</p>
          <a
            href="#contact"
            className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </ParallaxSection>
  );
}