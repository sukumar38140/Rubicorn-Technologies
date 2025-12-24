import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import {
  Cloud,
  Server,
  Database,
  HardDrive,
  Shield,
  Users,
  Mail,
  FolderSync,
  Lock,
  Zap,
  CheckCircle2,
  ArrowRight,
  X,
} from 'lucide-react';

const CloudServices = () => {
  const navigate = useNavigate();
  const [selectedFeature, setSelectedFeature] = useState(null);

  const cloudFeatures = [
    {
      icon: <Server size={40} />,
      title: 'Website Hosting',
      description: 'Fast, reliable hosting with 99.9% uptime guarantee and automatic backups.',
      details: 'Our hosting infrastructure is built on enterprise-grade servers with automatic scaling, CDN integration, and 24/7 monitoring to ensure your website is always fast and available.',
      benefits: ['99.9% Uptime SLA', 'Auto-scaling', 'CDN Integration', 'SSL Certificates', 'Daily Backups'],
    },
    {
      icon: <Database size={40} />,
      title: 'Cloud Databases',
      description: 'Secure, scalable database solutions with real-time synchronization.',
      details: 'Choose from PostgreSQL, MongoDB, MySQL, or Redis. All databases include automated backups, point-in-time recovery, and read replicas for high availability.',
      benefits: ['Multiple DB Options', 'Auto Backups', 'Read Replicas', 'High Availability', 'Real-time Sync'],
    },
    {
      icon: <HardDrive size={40} />,
      title: 'File Storage Systems',
      description: 'Unlimited storage with enterprise-grade security and accessibility.',
      details: 'Store unlimited files with S3-compatible storage. Access files via REST API, SDKs, or web interface. Includes versioning, lifecycle policies, and cross-region replication.',
      benefits: ['Unlimited Storage', 'S3 Compatible', 'Versioning', 'Global CDN', 'API Access'],
    },
    {
      icon: <FolderSync size={40} />,
      title: 'File Backups',
      description: 'Automated backup systems ensuring your data is always safe.',
      details: 'Automated daily, weekly, and monthly backups with retention policies. One-click restore functionality and off-site backup replication for disaster recovery.',
      benefits: ['Automated Backups', 'Quick Restore', 'Off-site Replication', 'Retention Policies', 'Incremental Backups'],
    },
    {
      icon: <Mail size={40} />,
      title: 'Email Servers',
      description: 'Professional email hosting with spam protection and unlimited storage.',
      details: 'Professional email with your domain, advanced spam filtering, virus protection, and webmail access. Includes calendar, contacts, and mobile sync.',
      benefits: ['Custom Domain', 'Spam Protection', 'Webmail Access', 'Mobile Sync', 'Unlimited Storage'],
    },
    {
      icon: <Lock size={40} />,
      title: 'Access Control',
      description: 'Advanced security with role-based access and authentication.',
      details: 'Implement fine-grained access controls with role-based permissions, multi-factor authentication, and audit logs. Integrate with SSO providers like Google, Microsoft, and Okta.',
      benefits: ['Role-based Access', 'Multi-factor Auth', 'SSO Integration', 'Audit Logs', 'IP Whitelisting'],
    },
  ];

  const benefits = [
    'Zero Configuration Setup',
    'Secure Code Architecture',
    'Team Management Systems',
    'Hybrid Cloud Solutions',
    'Forex Trading Infrastructure',
    'Remote Desktop Services',
    '24/7 Monitoring & Support',
    'Automatic Scaling',
  ];

  const openFeatureModal = (feature) => {
    setSelectedFeature(feature);
    document.body.style.overflow = 'hidden';
  };

  const closeFeatureModal = () => {
    setSelectedFeature(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="scale-in">
              <Cloud size={80} className="mx-auto mb-6 animate-pulse" />
            </AnimatedSection>
            <AnimatedSection animation="fade-in-up" delay={200}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Cloud Solutions
              </h1>
            </AnimatedSection>
            <AnimatedSection animation="fade-in-up" delay={400}>
              <p className="text-xl md:text-2xl opacity-90">
                Zero Configuration. Maximum Performance. Complete Digital Ecosystem.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-4">
                <Zap size={20} className="text-cyan-500" />
                <span className="text-sm font-medium text-gray-700">Cloud Infrastructure</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Complete <span className="gradient-text">Cloud Infrastructure</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need for a powerful cloud presence
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudFeatures.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 100} animation="scale-in">
                <div className="group p-8 rounded-2xl glass hover-card text-center">
                  <div className="w-20 h-20 mx-auto rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <button
                    onClick={() => openFeatureModal(feature)}
                    className="flex items-center justify-center mx-auto text-cyan-600 font-semibold hover:translate-x-2 transition-transform duration-300 group"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gradient-to-br from-purple-50 to-cyan-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <Zap size={64} className="mx-auto mb-6 text-purple-600" />
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Why Choose Our <span className="gradient-text">Cloud Services</span>
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <AnimatedSection key={index} delay={index * 80} animation="fade-in-left">
                  <div className="flex items-center space-x-4 p-6 rounded-xl glass hover-card group">
                    <CheckCircle2 size={24} className="text-purple-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-lg font-medium text-gray-800">{benefit}</span>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="section bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>
        <div className="container mx-auto relative z-10">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <Shield size={80} className="mx-auto mb-6 text-cyan-400 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Enterprise-Grade Security
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Your data is protected with military-grade encryption, regular security audits, and compliance with international standards.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                {['SSL/TLS Encryption', 'DDoS Protection', 'Regular Backups', 'Compliance Ready'].map((item, index) => (
                  <AnimatedSection key={index} delay={index * 100} animation="scale-in">
                    <div className="px-6 py-3 rounded-full bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 font-medium hover:bg-cyan-500/30 hover:scale-105 transition-all">
                      {item}
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's migrate your infrastructure to the cloud with zero downtime
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-cyan-600 px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              Start Your Migration
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* Feature Detail Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-500 scale-100">
            <div className="p-8 bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-t-3xl relative">
              <button
                onClick={closeFeatureModal}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <X size={24} />
              </button>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-20 h-20 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  {selectedFeature.icon}
                </div>
                <h2 className="text-3xl font-bold">{selectedFeature.title}</h2>
              </div>
            </div>
            
            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{selectedFeature.details}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedFeature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-3 p-4 rounded-xl bg-cyan-50">
                      <CheckCircle2 size={20} className="text-cyan-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  closeFeatureModal();
                  navigate('/contact');
                }}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 flex items-center justify-center space-x-2"
              >
                <span>Get Started with Cloud</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CloudServices;
