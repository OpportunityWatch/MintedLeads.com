import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiCalendar, FiMail, FiPhone, FiMapPin, FiSend, FiMessageSquare } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to <span className="text-cyan-400">Get Started</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss your lead generation goals and create a custom solution that drives real results.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-xl p-8 border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <SafeIcon icon={FiMessageSquare} className="mr-3 text-cyan-400" />
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
                  placeholder="Tell us about your lead generation goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
              >
                <SafeIcon icon={FiSend} className="mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Calendar */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Book Consultation */}
            <div id="booking" className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <SafeIcon icon={FiCalendar} className="mr-3 text-cyan-400" />
                Book Your Discovery Call
              </h3>
              <p className="text-gray-300 mb-6">
                Schedule a free 30-minute consultation to discuss your lead generation goals and explore how we can help.
              </p>
              
              {/* Calendar Integration Placeholder */}
              <div className="bg-gray-800 rounded-lg p-6 mb-6 text-center">
                <p className="text-gray-400 mb-4">Calendar integration will be implemented here</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>• 30-minute strategy session</p>
                  <p>• No obligation consultation</p>
                  <p>• Custom solution discussion</p>
                </div>
              </div>

              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                Select Available Time
              </button>
            </div>

            {/* Contact Details */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-6">Other Ways to Reach Us</h3>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-300">
                  <SafeIcon icon={FiMail} className="h-5 w-5 text-cyan-400 mr-4" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:hello@mintermark.com" className="text-cyan-400 hover:text-cyan-300">
                      hello@mintermark.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center text-gray-300">
                  <SafeIcon icon={FiPhone} className="h-5 w-5 text-cyan-400 mr-4" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+1234567890" className="text-cyan-400 hover:text-cyan-300">
                      (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-center text-gray-300">
                  <SafeIcon icon={FiMapPin} className="h-5 w-5 text-cyan-400 mr-4" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-400">Serving businesses worldwide</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400">
                  <strong>Response Time:</strong> We typically respond within 2-4 hours during business hours.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;