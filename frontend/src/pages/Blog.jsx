import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  TrendingUp,
  Code,
  Cloud,
  Brain,
} from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Technology', 'AI', 'Cloud', 'Development', 'Business'];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business Automation',
      excerpt: 'Discover how AI is revolutionizing business processes and increasing efficiency across industries.',
      category: 'AI',
      author: 'Rubicorn Team',
      date: '2025-02-15',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      id: 2,
      title: 'Cloud Infrastructure: Why Your Business Needs It',
      excerpt: 'Learn about the benefits of moving to the cloud and how it can transform your operations.',
      category: 'Cloud',
      author: 'Tech Team',
      date: '2025-02-10',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      id: 3,
      title: 'Modern Web Development Best Practices',
      excerpt: 'A comprehensive guide to building fast, secure, and scalable web applications.',
      category: 'Development',
      author: 'Dev Team',
      date: '2025-02-05',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
      gradient: 'from-blue-600 to-purple-600',
    },
    {
      id: 4,
      title: 'Digital Transformation: A Complete Guide',
      excerpt: 'Everything you need to know about transforming your traditional business into a digital powerhouse.',
      category: 'Business',
      author: 'Business Team',
      date: '2025-01-28',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
      gradient: 'from-purple-600 to-cyan-500',
    },
    {
      id: 5,
      title: 'React 19: What\'s New and Exciting',
      excerpt: 'Explore the latest features and improvements in React 19 and how they benefit developers.',
      category: 'Technology',
      author: 'Frontend Team',
      date: '2025-01-20',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
      gradient: 'from-blue-600 to-cyan-500',
    },
    {
      id: 6,
      title: 'AI-Powered Content Creation Tools',
      excerpt: 'How AI tools are changing the content creation landscape for marketers and creators.',
      category: 'AI',
      author: 'Content Team',
      date: '2025-01-15',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=800&q=80',
      gradient: 'from-pink-600 to-purple-600',
    },
  ];

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPost = blogPosts[0];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-purple-600 to-cyan-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in-up">
            News & Blog
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 fade-in-up" style={{ animationDelay: '200ms' }}>
            Stay updated with the latest tech insights, industry trends, and expert tips
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide">Featured Article</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center glass rounded-3xl overflow-hidden hover-card">
              <div className="h-full">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                  style={{ minHeight: '400px' }}
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-4">
                  <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${featuredPost.gradient} text-white text-sm font-medium`}>
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <Clock size={16} className="mr-1" />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 text-lg mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-white">
                      <User size={20} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{featuredPost.author}</p>
                      <p className="text-sm text-gray-500">{featuredPost.date}</p>
                    </div>
                  </div>
                  <button className="flex items-center space-x-2 text-purple-600 font-semibold hover:translate-x-2 transition-transform">
                    <span>Read More</span>
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section bg-gradient-to-br from-purple-50 to-cyan-50 pt-12">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <div
                key={post.id}
                className="group glass rounded-2xl overflow-hidden hover-card"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${post.gradient} text-white text-xs font-medium`}>
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-2">
                      <Calendar size={14} className="text-gray-400" />
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <button className="flex items-center space-x-1 text-purple-600 font-medium text-sm hover:translate-x-1 transition-transform">
                      <span>Read</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section bg-gradient-to-br from-purple-600 to-cyan-500 text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <TrendingUp size={64} className="mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Subscribe to our newsletter for the latest tech insights and updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
