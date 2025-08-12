import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    // Show success message
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <section id="contacts" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-rose-600 mb-2 uppercase tracking-wider">Get in Touch</p>
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Have a project in mind? We'd love to discuss how we can help bring your ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-900 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-rose-600 transition-all"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-rose-600 transition-all"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-rose-600 transition-all"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div>
            <div className="h-64 bg-gray-900 rounded-lg mb-8 overflow-hidden">
              {/* This would be a map component in a real app */}
              <div className="h-full w-full bg-gray-800 flex items-center justify-center">
                <MapPin className="h-12 w-12 text-gray-600" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="mb-4 p-3 bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-rose-600" />
                </div>
                <h4 className="text-lg font-medium mb-2">Call Us</h4>
                <p className="text-gray-400">+1 (555) 123-4567</p>
                <p className="text-gray-400">Mon-Fri, 9am-6pm</p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="mb-4 p-3 bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-rose-600" />
                </div>
                <h4 className="text-lg font-medium mb-2">Email Us</h4>
                <p className="text-gray-400">hello@designstudio.com</p>
                <p className="text-gray-400">info@designstudio.com</p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg md:col-span-2">
                <div className="mb-4 p-3 bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-rose-600" />
                </div>
                <h4 className="text-lg font-medium mb-2">Visit Us</h4>
                <p className="text-gray-400">123 Design Street, Creative District</p>
                <p className="text-gray-400">New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;