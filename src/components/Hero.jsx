import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTarget, FiTrendingUp, FiZap, FiArrowRight, FiCalendar } = FiIcons;

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 pt-20 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Turn Your <span className="text-cyan-400">Dead Leads</span> Into
            <br />
            <span className="text-cyan-400">Live Revenue</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Custom AI-powered solutions for lead generation, reactivation, and cold email campaigns. 
            We don't reinvent what's been done - we invent what needs to be done for YOUR business goals.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a
              href="#booking"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center group"
            >
              <SafeIcon icon={FiCalendar} className="mr-2" />
              Book Free Discovery Call
              <SafeIcon icon={FiArrowRight} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#free-tools"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
            >
              Get Started FREE
            </a>
          </motion.div>

          {/* Key Benefits */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <SafeIcon icon={FiTarget} className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Performance-Based</h3>
              <p className="text-gray-400">We share in your success - only win when you win</p>
            </div>
            <div className="text-center">
              <SafeIcon icon={FiTrendingUp} className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Lead Reactivation</h3>
              <p className="text-gray-400">Breathe life into your stale lead database</p>
            </div>
            <div className="text-center">
              <SafeIcon icon={FiZap} className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Custom Solutions</h3>
              <p className="text-gray-400">Tailored AI workflows for your specific goals</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;