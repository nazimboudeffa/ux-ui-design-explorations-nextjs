'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { 
  Search, Filter, Grid, List, Star, Heart, Eye, ShoppingCart, 
  ChevronDown, X, SlidersHorizontal, Zap, ArrowUpDown, Menu
} from 'lucide-react';

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const categories = [
    { id: 'all', name: 'All Products', count: 24 },
    { id: 'audio', name: 'Audio', count: 8 },
    { id: 'wearables', name: 'Wearables', count: 6 },
    { id: 'smart-home', name: 'Smart Home', count: 5 },
    { id: 'gaming', name: 'Gaming', count: 3 },
    { id: 'accessories', name: 'Accessories', count: 2 }
  ];

  const products = [
    {
      id: 1,
      name: "Quantum Headphones Pro",
      category: "audio",
      price: 299,
      originalPrice: 349,
      rating: 4.9,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
      badge: "Bestseller",
      description: "Revolutionary noise-canceling technology with quantum processors"
    },
    {
      id: 2,
      name: "Neural Watch X1",
      category: "wearables",
      price: 599,
      originalPrice: null,
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop",
      badge: "New",
      description: "AI-powered smartwatch with mind-reading capabilities"
    },
    {
      id: 3,
      name: "Holographic Lens VR",
      category: "gaming",
      price: 899,
      originalPrice: 999,
      rating: 4.7,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop",
      badge: "Limited",
      description: "Next-gen VR with true holographic projection"
    },
    {
      id: 4,
      name: "Wireless Earbuds Infinity",
      category: "audio",
      price: 199,
      originalPrice: 249,
      rating: 4.6,
      reviews: 412,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&h=600&fit=crop",
      badge: "Sale",
      description: "Infinite battery life with solar charging technology"
    },
    {
      id: 5,
      name: "Smart Home Hub Neo",
      category: "smart-home",
      price: 449,
      originalPrice: null,
      rating: 4.5,
      reviews: 78,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
      badge: null,
      description: "Central control for your entire smart ecosystem"
    },
    {
      id: 6,
      name: "Gaming Keyboard X-Force",
      category: "gaming",
      price: 189,
      originalPrice: null,
      rating: 4.8,
      reviews: 267,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&h=600&fit=crop",
      badge: null,
      description: "Mechanical keyboard with haptic feedback"
    },
    {
      id: 7,
      name: "Fitness Tracker Elite",
      category: "wearables",
      price: 249,
      originalPrice: 299,
      rating: 4.4,
      reviews: 345,
      image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=600&h=600&fit=crop",
      badge: "Popular",
      description: "Advanced health monitoring with AI insights"
    },
    {
      id: 8,
      name: "Wireless Charger Quantum",
      category: "accessories",
      price: 79,
      originalPrice: 99,
      rating: 4.3,
      reviews: 523,
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=600&fit=crop",
      badge: null,
      description: "Ultra-fast wireless charging with magnetic alignment"
    },
    {
      id: 9,
      name: "Smart Speaker Orb",
      category: "smart-home",
      price: 299,
      originalPrice: null,
      rating: 4.6,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1543512214-318c7553f230?w=600&h=600&fit=crop",
      badge: null,
      description: "360-degree audio with AI voice assistant"
    },
    {
      id: 10,
      name: "Gaming Mouse Precision",
      category: "gaming",
      price: 129,
      originalPrice: 159,
      rating: 4.7,
      reviews: 445,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&h=600&fit=crop",
      badge: null,
      description: "Ultra-precise sensor with customizable RGB"
    },
    {
      id: 11,
      name: "Bluetooth Speaker Boom",
      category: "audio",
      price: 149,
      originalPrice: null,
      rating: 4.5,
      reviews: 678,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&h=600&fit=crop",
      badge: null,
      description: "Powerful portable speaker with 360-degree sound"
    },
    {
      id: 12,
      name: "Smart Ring Infinity",
      category: "wearables",
      price: 399,
      originalPrice: 449,
      rating: 4.9,
      reviews: 67,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop",
      badge: "Premium",
      description: "Health tracking in an elegant titanium ring"
    }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Featured - keep original order
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, priceRange, sortBy]);

  const toggleFavorite = (productId) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const ProductCard = ({ product, isListView = false }) => (
    <div className={`group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 ${isListView ? 'flex items-center p-4' : 'p-6'}`}>
      {product.badge && (
        <div className={`absolute ${isListView ? 'top-2 left-2' : 'top-4 right-4'} z-10`}>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            product.badge === 'Sale' ? 'bg-red-500' :
            product.badge === 'New' ? 'bg-green-500' :
            'bg-gradient-to-r from-purple-500 to-pink-500'
          }`}>
            {product.badge}
          </span>
        </div>
      )}

      <div className={`relative overflow-hidden rounded-xl ${isListView ? 'w-32 h-32 flex-shrink-0' : 'mb-4'}`}>
        <img
          src={product.image}
          alt={product.name}
          className={`object-cover group-hover:scale-110 transition-transform duration-700 ${isListView ? 'w-full h-full' : 'w-full h-64'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <div className="flex space-x-2">
            <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
              <Eye className="w-4 h-4" />
            </button>
            <button 
              onClick={() => toggleFavorite(product.id)}
              className={`p-2 backdrop-blur-sm rounded-full transition-colors ${
                favorites.has(product.id) ? 'bg-red-500/80 text-white' : 'bg-white/20 hover:bg-white/30'
              }`}
            >
              <Heart className={`w-4 h-4 ${favorites.has(product.id) ? 'fill-current' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      <div className={`${isListView ? 'flex-1 ml-4' : ''}`}>
        <div className={`${isListView ? 'flex justify-between items-start' : ''}`}>
          <div className={`${isListView ? 'flex-1' : ''}`}>
            <h3 className={`font-semibold group-hover:text-purple-300 transition-colors ${isListView ? 'text-lg mb-1' : 'text-xl mb-2'}`}>
              {product.name}
            </h3>
            <p className={`text-gray-400 ${isListView ? 'text-sm mb-2' : 'text-sm mb-4'}`}>
              {product.description}
            </p>
          </div>

          <div className={`${isListView ? 'text-right ml-4' : ''}`}>
            <div className={`flex items-center ${isListView ? 'justify-end mb-2' : 'justify-between mb-4'}`}>
              <div className={`${isListView ? 'text-right' : ''}`}>
                <span className="text-2xl font-bold text-purple-400">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
                )}
              </div>
              {!isListView && (
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-400">{product.rating}</span>
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>
              )}
            </div>

            {isListView && (
              <div className="flex items-center space-x-1 justify-end mb-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-400">{product.rating}</span>
                <span className="text-xs text-gray-500">({product.reviews})</span>
              </div>
            )}

            <button className={`bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 ${isListView ? 'px-4 py-2 text-sm' : 'w-full py-3'}`}>
              <ShoppingCart className="w-4 h-4" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated cursor glow */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-0 opacity-20 blur-3xl transition-all duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between p-6 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            NeoStore
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'Products', 'Collections', 'About', 'Contact'].map((item) => (
            <a key={item} href="#" className={`relative group ${item === 'Products' ? 'text-purple-400' : 'text-gray-300 hover:text-white'} transition-colors duration-300`}>
              <span>{item}</span>
              <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${item === 'Products' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer transition-colors" />
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-purple-500 rounded-full text-xs flex items-center justify-center">3</span>
          </div>
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Page Header */}
      <div className="relative py-16 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Products
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Discover cutting-edge technology that shapes tomorrow
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg hover:border-purple-500 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filters</span>
                {(selectedCategory !== 'all' || priceRange[0] > 0 || priceRange[1] < 2000) && (
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                )}
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none transition-colors"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name A-Z</option>
              </select>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-gray-400">{filteredProducts.length} products</span>
              <div className="flex items-center border border-gray-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 transition-colors ${viewMode === 'grid' ? 'bg-purple-500' : 'hover:bg-gray-800'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-purple-500' : 'hover:bg-gray-800'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Panel */}
        {isFilterOpen && (
          <div className="mb-8 p-6 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Categories */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category.id} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        value={category.id}
                        checked={selectedCategory === category.id}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-4 h-4 text-purple-500 focus:ring-purple-500"
                      />
                      <span className="flex-1">{category.name}</span>
                      <span className="text-gray-400 text-sm">({category.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Price Range</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="w-24 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none"
                      placeholder="Min"
                    />
                    <span>-</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 2000])}
                      className="w-24 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-purple-500 focus:outline-none"
                      placeholder="Max"
                    />
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>$0</span>
                    <span>$2000+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Products Grid/List */}
        <div className={`${viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-6'}`}>
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} isListView={viewMode === 'list'} />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Search className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">No products found</h3>
            <p className="text-gray-400 mb-6">Try adjusting your filters or search terms</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setPriceRange([0, 2000]);
              }}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}