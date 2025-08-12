import React from 'react';
import { ThumbsUp, Sparkles, Zap } from 'lucide-react';

const features = [
  {
    icon: <ThumbsUp className="h-6 w-6 text-rose-600" aria-hidden="true" />,
    title: 'Client-Centered Approach',
    description: 'We build long-term partnerships by listening closely and delivering results that truly matter.'
  },
  {
    icon: <Sparkles className="h-6 w-6 text-rose-600" aria-hidden="true" />,
    title: 'Unique Creative Vision',
    description: 'Our team brings bold ideas to life, blending design and strategy to create unforgettable digital experiences.'
  },
  {
    icon: <Zap className="h-6 w-6 text-rose-600" aria-hidden="true" />,
    title: 'Agile & Efficient Delivery',
    description: 'Deadlines matter — we deliver fast without compromising on detail or quality.'
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <span className="uppercase text-sm text-rose-500 font-semibold tracking-wide mb-4 block">
              Who We Are
            </span>
            <h2 className="text-5xl font-bold mb-8 leading-tight">
              BrightPixel Studio <span className="text-rose-600">elevates</span> brands through design
            </h2>
            <p className="text-gray-300 max-w-md mb-6 leading-relaxed">
              Based in Nairobi and working globally, we’re a tight-knit team of designers, developers, and strategists helping brands connect with their audience in meaningful ways.
            </p>
            <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
              Whether launching a startup or rebranding an enterprise, our process blends creativity with precision — turning bold ideas into beautiful, high-performing products.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="block text-4xl font-bold text-rose-600">200+</span>
                <span className="text-sm text-gray-400">Projects Delivered</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-rose-600">95%</span>
                <span className="text-sm text-gray-400">Repeat Clients</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-rose-600">30</span>
                <span className="text-sm text-gray-400">Creative Experts</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-rose-600">12</span>
                <span className="text-sm text-gray-400">Industry Awards</span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#contact"
              className="inline-block mt-10 px-6 py-3 bg-rose-600 text-white font-semibold rounded-lg shadow hover:bg-rose-700 transition"
            >
              Let’s Work Together
            </a>
          </div>

          {/* Right Column */}
          <div className="md:w-1/2 md:pl-12">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-24 h-24 rounded-full bg-rose-600/30 blur-lg"></div>
              <img
  src="https://media.istockphoto.com/id/2152642578/photo/glowing-ai-music-icon-with-audio-waveform-on-dark-background-yellow-transparent-glass.webp?a=1&b=1&s=612x612&w=0&k=20&c=_vCRmUBcSlg2zShDgSzSQ36uiVT4si2Q_uK8ElISngY="
  alt="Illustration of an octopus"
  className="rounded-lg h-80 w-full object-cover object-center shadow-2xl"
/>

            </div>

            {/* Feature List */}
            <div className="mt-12 grid gap-8">
              {features.map((feature, index) => (
                <article key={index} className="flex items-start" role="listitem">
                  <div className="flex-shrink-0 mr-4 p-2 bg-gray-900 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
