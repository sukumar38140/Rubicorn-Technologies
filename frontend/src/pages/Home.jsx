import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import {
  Sparkles,
  Code2,
  Cloud,
  Brain,
  TrendingUp,
  Star,
  ArrowRight,
  Zap,
  Globe,
  Rocket,
} from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Code2 size={32} />,
      title: 'Web & App Development',
      description: 'Responsive, modern applications built with cutting-edge technology.',
      gradient: 'from-purple-600 to-blue-600',
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud Solutions',
      description: 'Secure, scalable cloud infrastructure with zero configuration hassle.',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: <Brain size={32} />,
      title: 'AI Services',
      description: 'Intelligent automation, AI generation, and smart business solutions.',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Digital Marketing',
      description: 'SEO, social media, and growth strategies that drive real results.',
      gradient: 'from-blue-600 to-cyan-500',
    },
  ];

  const stats = [
    { value: '100+', label: 'Projects Delivered' },
    { value: '50+', label: 'Happy Clients' },
    { value: '99%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support Available' },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'CEO, TechStart India',
      content: 'Rubicorn transformed our business completely. From offline to a fully digital ecosystem in just 3 months!',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Founder, StyleHub',
      content: 'The team\'s expertise in cloud and AI integration helped us scale 10x faster than expected.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      role: 'Director, RetailPro',
      content: 'Best investment we made! Their complete digital business system is a game-changer.',
      rating: 5,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section with 3D Spline */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-cyan-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass">
                <Sparkles size={20} className="text-purple-600" />
                <span className="text-sm font-medium text-gray-700">Transforming Businesses Digitally</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text">Rubicorn</span>
                <br />
                <span className="text-gray-900">Technologies</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                We Build Complete <span className="font-semibold gradient-text">Digital Business Systems</span>.
                From Offline to Online. From Ideas to Intelligent Systems.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <button className="neon-button flex items-center justify-center space-x-2 w-full sm:w-auto">
                    <span>Build My Digital Business</span>
                    <Rocket size={20} />
                  </button>
                </Link>
                <Link to="/services">
                  <button className="px-8 py-4 rounded-xl border-2 border-purple-600 text-purple-600 font-semibold hover:bg-purple-50 transition-all duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto">
                    <span>Explore Services</span>
                    <ArrowRight size={20} />
                  </button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: 3D Spline Animation */}
            <div className={`relative h-[500px] lg:h-[700px] transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="w-full h-full rounded-3xl overflow-visible relative">
                <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-purple-600 flex justify-center">
            <div className="w-1 h-3 bg-purple-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-4">
              <Zap size={20} className="text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete <span className="gradient-text">Digital Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to transform your business into a digital powerhouse
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl glass hover-card cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center text-purple-600 font-medium group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <ArrowRight size={18} className="ml-2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gradient-to-br from-purple-50 to-cyan-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass mb-4">
              <Star size={20} className="text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-8 rounded-2xl glass hover-card">
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-purple-600 to-cyan-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>
        <div className="container mx-auto text-center relative z-10">
          <Globe size={64} className="mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's build your complete digital business system together. Get started today!
          </p>
          <Link to="/contact">
            <button className="bg-white text-purple-600 px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
