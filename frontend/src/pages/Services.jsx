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
    },
    {
      icon: <Code2 size={40} />,
      title: 'React Web Development',
      description: 'Modern, interactive web applications built with React and latest technologies.',
      features: ['Single Page Apps', 'Real-time Updates', 'Progressive Web Apps', 'API Integration'],
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Mobile App Development',
      description: 'Native Android and iOS apps that deliver exceptional user experiences.',
      features: ['Android Apps', 'iOS Apps', 'Cross-platform', 'App Store Deployment'],
    },
    {
      icon: <Palette size={40} />,
      title: 'UI/UX Design',
      description: 'Intuitive, beautiful interfaces that users love to interact with.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    },
    {
      icon: <ShoppingCart size={40} />,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment gateways and inventory management.',
      features: ['Payment Integration', 'Product Management', 'Order Tracking', 'Analytics'],
    },
    {
      icon: <FileText size={40} />,
      title: 'Print-Ready Design',
      description: 'Professional designs for brochures, business cards, and marketing materials.',
      features: ['Brand Identity', 'Marketing Collateral', 'Print Design', 'Digital Assets'],
    },
    {
      icon: <Layers size={40} />,
      title: 'Enterprise Solutions',
      description: 'Scalable, enterprise-level web applications for complex business needs.',
      features: ['Custom Development', 'System Integration', 'Security', 'Maintenance'],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-purple-600 to-cyan-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in-up">
            Web & App Development Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 fade-in-up" style={{ animationDelay: '200ms' }}>
            From responsive websites to mobile apps, we build digital experiences that drive results
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {webAppServices.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl glass hover-card"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle2 size={18} className="text-purple-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-gradient-to-br from-purple-50 to-cyan-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="gradient-text">Development Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures quality and timely delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your vision and requirements' },
              { step: '02', title: 'Design', desc: 'Creating beautiful, intuitive interfaces' },
              { step: '03', title: 'Development', desc: 'Building with cutting-edge technologies' },
              { step: '04', title: 'Deployment', desc: 'Launching and continuous support' },
            ].map((process, index) => (
              <div key={index} className="text-center p-6 rounded-2xl glass hover-card">
                <div className="text-5xl font-bold gradient-text mb-4">{process.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
