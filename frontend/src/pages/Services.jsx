import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import {
  Code2,
  Smartphone,
  Globe,
  Palette,
  ShoppingCart,
  FileText,
  Layers,
  CheckCircle2,
  ArrowRight,
  X,
  Zap,
} from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  const webAppServices = [
    {
      icon: <Globe size={40} />,
      title: 'Responsive Web Design',
      description: 'Beautiful, mobile-first websites that work flawlessly on all devices.',
      features: ['Mobile Responsive', 'Fast Loading', 'SEO Optimized', 'Cross-browser Compatible'],
      details: 'Our responsive web design ensures your website looks stunning on every device. We use the latest technologies and best practices to create fast, SEO-friendly websites that convert visitors into customers.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
      gradient: 'from-purple-600 to-blue-600',
    },
    {
      icon: <Code2 size={40} />,
      title: 'React Web Development',
      description: 'Modern, interactive web applications built with React and latest technologies.',
      features: ['Single Page Apps', 'Real-time Updates', 'Progressive Web Apps', 'API Integration'],
      details: 'Build powerful, interactive web applications with React. Our expert team creates scalable, performant applications that provide exceptional user experiences.',
      technologies: ['React 19', 'Redux', 'React Router', 'Axios'],
      gradient: 'from-cyan-500 to-purple-600',
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile App Development',
      description: 'Native Android and iOS apps that deliver exceptional user experiences.',
      features: ['Android Apps', 'iOS Apps', 'Cross-platform', 'App Store Deployment'],
      details: 'Create stunning mobile applications for Android and iOS. We build native apps with React Native and Flutter that perform like native while maintaining code efficiency.',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      icon: <Palette size={40} />,
      title: 'UI/UX Design',
      description: 'Intuitive, beautiful interfaces that users love to interact with.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      details: 'Design is not just how it looks, but how it works. Our UI/UX experts create beautiful, intuitive interfaces that users love, backed by research and testing.',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision'],
      gradient: 'from-pink-600 to-purple-600',
    },
    {
      icon: <ShoppingCart size={40} />,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment gateways and inventory management.',
      features: ['Payment Integration', 'Product Management', 'Order Tracking', 'Analytics'],
      details: 'Launch your online store with our complete e-commerce solutions. We integrate payment gateways, inventory management, and analytics to help you grow your business.',
      technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal'],
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      icon: <FileText size={40} />,
      title: 'Print-Ready Design',
      description: 'Professional designs for brochures, business cards, and marketing materials.',
      features: ['Brand Identity', 'Marketing Collateral', 'Print Design', 'Digital Assets'],
      details: 'Stand out with professional print designs. From business cards to brochures, we create print-ready designs that make your brand memorable.',
      technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign', 'CorelDRAW'],
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: <Layers size={40} />,
      title: 'Enterprise Solutions',
      description: 'Scalable, enterprise-level web applications for complex business needs.',
      features: ['Custom Development', 'System Integration', 'Security', 'Maintenance'],
      details: 'Build enterprise-grade applications that scale with your business. We provide custom solutions with robust security, seamless integrations, and ongoing support.',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'AWS'],
      gradient: 'from-blue-600 to-purple-600',
    },
  ];

  const openServiceModal = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeServiceModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-purple-600 to-cyan-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <AnimatedSection animation="scale-in">
            <Code2 size={80} className="mx-auto mb-6 animate-pulse" />
          </AnimatedSection>
          <AnimatedSection animation="fade-in-up" delay={200}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Web & App Development Services
            </h1>
          </AnimatedSection>
          <AnimatedSection animation="fade-in-up" delay={400}>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
              From responsive websites to mobile apps, we build digital experiences that drive results
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-4">
                <Zap size={20} className="text-purple-600" />
                <span className="text-sm font-medium text-gray-700">Our Expertise</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Complete <span className="gradient-text">Development Services</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {webAppServices.map((service, index) => (
              <AnimatedSection key={index} delay={index * 100} animation="fade-in-up">
                <div className="group p-8 rounded-2xl glass hover-card">
                  <div className="flex items-start space-x-6">
                    <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">{service.title}</h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle2 size={18} className="text-purple-600 flex-shrink-0 group-hover:scale-110 transition-transform" style={{ transitionDelay: `${idx * 50}ms` }} />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => openServiceModal(service)}
                        className="flex items-center text-purple-600 font-semibold hover:translate-x-2 transition-transform duration-300 group"
                      >
                        <span>Learn More</span>
                        <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gradient-to-br from-purple-50 to-cyan-50">
        <div className="container mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our <span className="gradient-text">Development Process</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A proven methodology that ensures quality and timely delivery
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your vision and requirements' },
              { step: '02', title: 'Design', desc: 'Creating beautiful, intuitive interfaces' },
              { step: '03', title: 'Development', desc: 'Building with cutting-edge technologies' },
              { step: '04', title: 'Deployment', desc: 'Launching and continuous support' },
            ].map((process, index) => (
              <AnimatedSection key={index} delay={index * 150} animation="scale-in">
                <div className="text-center p-6 rounded-2xl glass hover-card group">
                  <div className="text-6xl font-bold gradient-text mb-4 group-hover:scale-110 transition-transform">{process.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-purple-600 to-cyan-500 text-white">
        <div className="container mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Let's discuss your requirements and build something amazing together
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="bg-white text-purple-600 px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              Get in Touch
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-500 scale-100">
            <div className={`p-8 bg-gradient-to-br ${selectedService.gradient} text-white rounded-t-3xl relative`}>
              <button
                onClick={closeServiceModal}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
              >
                <X size={24} />
              </button>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-20 h-20 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  {selectedService.icon}
                </div>
                <h2 className="text-3xl font-bold">{selectedService.title}</h2>
              </div>
            </div>
            
            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Overview</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{selectedService.details}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3 p-4 rounded-xl bg-purple-50">
                      <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Technologies We Use</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedService.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium hover:scale-105 transition-transform"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  closeServiceModal();
                  navigate('/contact');
                }}
                className="w-full neon-button flex items-center justify-center space-x-2"
              >
                <span>Get Started with This Service</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
