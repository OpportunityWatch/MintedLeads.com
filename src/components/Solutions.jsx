import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTrendingUp, FiDollarSign, FiTarget, FiZap, FiCheck } = FiIcons;

const Solutions = () => {
  const solutions = [
    {
      icon: FiTrendingUp,
      title: "For Sales Teams",
      description: "Supercharge your sales pipeline with automated lead generation and intelligent follow-up sequences.",
      benefits: [
        "Automated prospect research",
        "Personalized outreach at scale",
        "Lead scoring and prioritization",
        "CRM integration and tracking"
      ],
      audience: "Sales Professionals & Teams"
    },
    {
      icon: FiTarget,
      title: "For Small-Medium Businesses",
      description: "Complete lead generation and nurturing system without the enterprise-level complexity.",
      benefits: [
        "Cost-effective lead acquisition",
        "Automated follow-up sequences",
        "Simple dashboard and reporting",
        "Quick setup and deployment"
      ],
      audience: "SMBs & Growing Companies"
    },
    {
      icon: FiDollarSign,
      title: "For Established Businesses",
      description: "Revive dormant leads and maximize ROI from your existing database with advanced reactivation campaigns.",
      benefits: [
        "Database analysis and segmentation",
        "Multi-channel reactivation campaigns",
        "Performance-based pricing options",
        "Advanced analytics and insights"
      ],
      audience: "Enterprise & Established Firms"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Custom Solutions for <span className="text-cyan-400">Every Business</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We don't believe in one-size-fits-all. Every solution is tailored to your specific business goals and challenges.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="mb-6">
                <SafeIcon icon={solution.icon} className="h-12 w-12 text-cyan-400 mb-4" />
                <span className="text-sm text-cyan-400 font-medium">{solution.audience}</span>
                <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300">{solution.description}</p>
              </div>

              <ul className="space-y-3">
                {solution.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-gray-400 flex items-center">
                    <SafeIcon icon={FiCheck} className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Performance-Based Model */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20"
        >
          <div className="text-center">
            <SafeIcon icon={FiZap} className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Performance-Based Partnership</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're so confident in our results, we offer performance-based pricing where we share in the revenue we generate for your business. Your success is our success.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">No Risk</h4>
                <p className="text-gray-400">Pay only for results we deliver</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Aligned Goals</h4>
                <p className="text-gray-400">We win when you win</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Proven ROI</h4>
                <p className="text-gray-400">Focus on revenue, not just leads</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;