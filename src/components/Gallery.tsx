import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Modern Brand Identity',
    category: 'Branding',
    image: 'https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  },
  {
    id: 2,
    title: 'Music Uploads ',
    category: 'Entertainment',
    image: 'https://media.istockphoto.com/id/525209827/photo/the-runaway-octopus-in-black-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=Y1qvVB3Slabp_DKMuKyRIyTZJlmmgepFUbow-DImmfE='
  },
  {
    id: 3,
    title: 'Customize cloths',
    category: 'Cloths',
    image: 'https://images.unsplash.com/photo-1696086152504-4843b2106ab4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dCUyMHNoaXJ0fGVufDB8fDB8fHww'
  },
  {
    id: 4,
    title: 'Product Packaging',
    category: 'Packaging',
    image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750'
  }
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Branding', 'Web Design', 'App Design', 'Packaging'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <p className="text-rose-600 mb-2 uppercase tracking-wider">Our Work</p>
            <h2 className="text-4xl font-bold mb-4">Selected Projects</h2>
            <p className="text-gray-400 max-w-md">
              Browse through our carefully curated portfolio showcasing our finest work across various industries.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3 mt-8 md:mt-0">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 text-sm rounded-full transition-all ${
                  activeCategory === category 
                    ? 'bg-rose-600 text-white' 
                    : 'bg-gray-900 text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-lg cursor-pointer transition-all"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-rose-500 text-sm mb-2">{project.category}</p>
                  <h3 className="text-white text-xl font-medium mb-2">{project.title}</h3>
                  <button className="mt-4 flex items-center space-x-2 text-sm text-white">
                    <span>View Project</span>
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <button className="border border-gray-700 text-white py-3 px-8 rounded-full hover:bg-rose-600 hover:border-rose-600 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;