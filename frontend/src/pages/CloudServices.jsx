import React from 'react';
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
} from 'lucide-react';

const CloudServices = () => {
  const cloudFeatures = [
    {
      icon: <Server size={40} />,
      title: 'Website Hosting',
      description: 'Fast, reliable hosting with 99.9% uptime guarantee and automatic backups.',
    },
    {
      icon: <Database size={40} />,
      title: 'Cloud Databases',
      description: 'Secure, scalable database solutions with real-time synchronization.',
    },
    {
      icon: <HardDrive size={40} />,
      title: 'File Storage Systems',
      description: 'Unlimited storage with enterprise-grade security and accessibility.',
    },
    {
      icon: <FolderSync size={40} />,
      title: 'File Backups',
      description: 'Automated backup systems ensuring your data is always safe.',
    },
    {
      icon: <Mail size={40} />,
      title: 'Email Servers',
      description: 'Professional email hosting with spam protection and unlimited storage.',
    },
    {
      icon: <Lock size={40} />,
      title: 'Access Control',
      description: 'Advanced security with role-based access and authentication.',
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

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Cloud size={80} className="mx-auto mb-6 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in-up">
              Cloud Solutions
            </h1>
            <p className="text-xl md:text-2xl opacity-90 fade-in-up" style={{ animationDelay: '200ms' }}>
              Zero Configuration. Maximum Performance. Complete Digital Ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete <span className="gradient-text">Cloud Infrastructure</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for a powerful cloud presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudFeatures.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl glass hover-card text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gradient-to-br from-purple-50 to-cyan-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Zap size={64} className="mx-auto mb-6 text-purple-600" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Our <span className="gradient-text">Cloud Services</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 p-6 rounded-xl glass hover-card">
                  <CheckCircle2 size={24} className="text-purple-600 flex-shrink-0" />
                  <span className="text-lg font-medium text-gray-800">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="section bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <Shield size={80} className="mx-auto mb-6 text-cyan-400" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Your data is protected with military-grade encryption, regular security audits, and compliance with international standards.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {['SSL/TLS Encryption', 'DDoS Protection', 'Regular Backups', 'Compliance Ready'].map((item, index) => (
                <div key={index} className="px-6 py-3 rounded-full bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CloudServices;
