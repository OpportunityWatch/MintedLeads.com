import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiRefreshCw, FiMail, FiBot, FiPhone, FiMessageCircle, FiArrowRight } = FiIcons;

const Services = () => {
  const primaryServices = [
    {
      icon: FiUsers,
      title: "Lead Generation",
      description: "Find and capture high-quality prospects with AI-powered targeting and outreach strategies.",
      features: ["AI-powered prospect identification", "Multi-channel outreach", "Lead scoring & qualification"],
      cta: "Generate Leads Now"
    },
    {
      icon: FiRefreshCw,
      title: "Lead Reactivation",
      description: "Transform your cold database into warm opportunities with intelligent reengagement campaigns.",
      features: ["Database analysis & segmentation", "Personalized reactivation sequences", "Win-back automation"],
      cta: "Revive Dead Leads"
    },
    {
      icon: FiMail,
      title: "Cold Email Campaigns",
      description: "Strategic email outreach with warming sequences that build trust and drive conversions.",
      features: ["Email warming & deliverability", "Personalized sequences", "A/B testing & optimization"],
      cta: "Launch Campaigns"
    }
  ];

  const secondaryServices = [
    {
      icon: FiBot,
      title: "AI Workflow Agents",
      description: "Custom AI automations that handle repetitive tasks and optimize your sales process."
    },
    {
      icon: FiMessageCircle,
      title: "Smart Chatbots",
      description: "Intelligent chatbots that qualify leads and provide 24/7 customer engagement."
    },
    {
      icon: FiPhone,
      title: "AI Voice Agents",
      description: "Advanced voice bots for lead qualification, appointment setting, and follow-ups."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Services That Drive <span className="text-cyan-400">Real Results</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From lead generation to reactivation, we create custom solutions that turn prospects into profit.
          </p>
        </motion.div>

        {/* Primary Services */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {primaryServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="text-center mb-6">
                <SafeIcon icon={service.icon} className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-400 flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center group-hover:scale-105 transform transition-transform"
              >
                {service.cta}
                <SafeIcon icon={FiArrowRight} className="ml-2" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Secondary Services */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Advanced AI Solutions</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {secondaryServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 rounded-lg p-6 border border-gray-700 hover:border-cyan-500/30 transition-all duration-300"
            >
              <SafeIcon icon={service.icon} className="h-8 w-8 text-cyan-400 mb-4" />
              <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Lead Generation?</h3>
            <p className="text-gray-300 mb-6">Let's discuss your goals and create a custom solution that delivers results.</p>
            <a
              href="#booking"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center"
            >
              Schedule Your Discovery Call
              <SafeIcon icon={FiArrowRight} className="ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;