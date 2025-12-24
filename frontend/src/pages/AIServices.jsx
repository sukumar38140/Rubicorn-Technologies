import React from 'react';
import {
  Brain,
  Sparkles,
  Image,
  Video,
  FileText,
  Wand2,
  BarChart3,
  Cog,
  Lightbulb,
  TrendingUp,
} from 'lucide-react';

const AIServices = () => {
  const aiServices = [
    {
      icon: <Cog size={40} />,
      title: 'Business Automation',
      description: 'Automate repetitive tasks, workflows, and processes with intelligent AI systems.',
      features: ['Workflow Automation', 'Process Optimization', 'Task Scheduling', 'Report Generation'],
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      icon: <Image size={40} />,
      title: 'AI Image Generation',
      description: 'Create stunning visuals, graphics, and artwork using advanced AI models.',
      features: ['Custom Graphics', 'Brand Visuals', 'Product Images', 'Marketing Assets'],
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      icon: <Video size={40} />,
      title: 'AI Video Generation',
      description: 'Generate professional videos, animations, and motion graphics automatically.',
      features: ['Video Creation', 'Animation', 'Editing', 'Effects'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      icon: <FileText size={40} />,
      title: 'Content Creation',
      description: 'AI-powered content writing for blogs, social media, and marketing materials.',
      features: ['Blog Writing', 'Social Media', 'Ad Copy', 'SEO Content'],
      gradient: 'from-purple-600 to-blue-600',
    },
    {
      icon: <Wand2 size={40} />,
      title: 'Prompt Engineering',
      description: 'Expert prompt engineering services to get the best results from AI models.',
      features: ['Custom Prompts', 'Model Optimization', 'Result Enhancement', 'Training'],
      gradient: 'from-pink-600 to-purple-600',
    },
    {
      icon: <Brain size={40} />,
      title: 'Intelligent Assistants',
      description: 'Custom AI assistants and chatbots for customer support and engagement.',
      features: ['Chatbots', 'Virtual Assistants', '24/7 Support', 'Multi-language'],
      gradient: 'from-blue-600 to-purple-600',
    },
    {
      icon: <BarChart3 size={40} />,
      title: 'Predictive Analytics',
      description: 'Data-driven insights and predictions to make smarter business decisions.',
      features: ['Data Analysis', 'Forecasting', 'Trend Detection', 'Reports'],
      gradient: 'from-cyan-500 to-purple-600',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <Sparkles size={80} className="mx-auto mb-6 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in-up">
            AI Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 fade-in-up" style={{ animationDelay: '200ms' }}>
            Harness the power of Artificial Intelligence to transform your business operations
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              AI-Powered <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From automation to content creation, we bring AI intelligence to every aspect of your business
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl glass hover-card"
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Lightbulb size={64} className="mx-auto mb-6 text-purple-600" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why AI <span className="gradient-text">Matters</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <TrendingUp size={32} />,
                  title: 'Increase Efficiency',
                  description: 'Automate tasks and free up time for strategic work',
                },
                {
                  icon: <BarChart3 size={32} />,
                  title: 'Better Decisions',
                  description: 'Data-driven insights for smarter business choices',
                },
                {
                  icon: <Brain size={32} />,
                  title: 'Stay Competitive',
                  description: 'Leverage cutting-edge AI to outpace competitors',
                },
              ].map((benefit, index) => (
                <div key={index} className="text-center p-8 rounded-2xl glass hover-card">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto text-center">
          <Brain size={64} className="mx-auto mb-6 animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Embrace AI?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how AI can revolutionize your business operations
          </p>
          <button className="bg-white text-purple-600 px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default AIServices;
