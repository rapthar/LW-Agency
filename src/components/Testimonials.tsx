import React from 'react';
import ParallaxSection from './ParallaxSection';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO at TechVision',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      content: 'Working with this team has been an absolute pleasure. Their attention to detail and creative solutions have helped us achieve our vision.',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      content: 'The level of professionalism and expertise they bring to each project is outstanding. Our digital presence has never been stronger.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emma Davis',
      role: 'Product Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      content: 'Their innovative approach to design and development has transformed our product. The results speak for themselves.',
      rating: 5
    }
  ];

  return (
    <ParallaxSection className="bg-gray-50 pt-16 pb-24" speed={0.1}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ParallaxSection className="text-center mb-16" speed={0.15}>
          <span className="text-orange-500 font-medium mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Client Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </ParallaxSection>

        <div className="grid grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ParallaxSection
              key={testimonial.id}
              className="h-[420px] bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border border-gray-100 hover:border-orange-100 flex flex-col"
              speed={0.15}
              direction="up"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="fill-orange-500 text-orange-500"
                  />
                ))}
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </ParallaxSection>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
}