import React from 'react';
import ParallaxSection from './ParallaxSection';
import { Palette, Laptop, Video, Code, Megaphone, Rocket } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 'branding',
      title: 'Branding & Identity',
      description: 'We craft distinctive brand identities that resonate with your audience and stand out in the market.',
      icon: Palette,
      color: 'bg-orange-500'
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      description: 'Creating intuitive digital experiences that delight users and drive engagement.',
      icon: Laptop,
      color: 'bg-blue-500'
    },
    {
      id: 'motion',
      title: 'Motion & Video',
      description: 'Bringing stories to life through compelling motion design and video production.',
      icon: Video,
      color: 'bg-purple-500'
    },
    {
      id: 'development',
      title: 'Web Development',
      description: 'Building robust, scalable web solutions using cutting-edge technologies.',
      icon: Code,
      color: 'bg-green-500'
    },
    {
      id: 'marketing',
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns that drive results and ROI.',
      icon: Megaphone,
      color: 'bg-red-500'
    },
    {
      id: 'strategy',
      title: 'Digital Strategy',
      description: 'Comprehensive digital strategies that align with your business goals.',
      icon: Rocket,
      color: 'bg-yellow-500'
    }
  ];

  return (
    <ParallaxSection className="bg-white py-24" speed={0.1}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ParallaxSection className="text-center mb-20" speed={0.15}>
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </ParallaxSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ParallaxSection 
              key={service.id}
              className="group h-[320px] p-8 rounded-2xl bg-white border border-gray-100 shadow-xl hover:shadow-2xl hover:border-orange-100 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              speed={0.1 + (index * 0.05)}
              direction="up"
            >
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shrink-0`}>
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed flex-grow">{service.description}</p>
              <div className="mt-6 flex items-center text-sm text-gray-500 hover:text-orange-500 transition-colors cursor-pointer">
                Learn more
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </ParallaxSection>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
}