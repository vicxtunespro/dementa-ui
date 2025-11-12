import React, { useState } from 'react';
import { Button } from '../src/components/Button';
import { Heart, Star, Send, Download, Trash2, Settings, Plus, Edit, Search, User, ShoppingCart } from 'lucide-react';

function App() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingDemo = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">
            🎨 Dementa UI - Enhanced Button
          </h1>
          <p className="text-2xl text-purple-200">
            Now with loading states, shapes, and more!
          </p>
        </div>

        {/* Test Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Loading States */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">Loading States</h2>
            <div className="space-y-4">
              <div>
                <Button variant="primary" loading>
                  Loading...
                </Button>
              </div>
              <div>
                <Button variant="success" loading>
                  Saving
                </Button>
              </div>
              <div>
                <Button 
                  variant="secondary" 
                  loading={isLoading}
                  onClick={handleLoadingDemo}
                >
                  {isLoading ? 'Processing...' : 'Click to Load'}
                </Button>
              </div>
              <div>
                <Button variant="danger" loading size="lg">
                  Deleting Account
                </Button>
              </div>
            </div>
          </div>

          {/* Icon-Only Buttons */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">Icon-Only Buttons</h2>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" icon={<Heart size={18} />} />
              <Button variant="secondary" icon={<Star size={18} />} />
              <Button variant="success" icon={<Plus size={20} />} />
              <Button variant="danger" icon={<Trash2 size={18} />} />
              <Button variant="outline" icon={<Edit size={18} />} />
              <Button variant="ghost" icon={<Settings size={18} />} />
            </div>
            <div className="mt-4">
              <p className="text-purple-200 text-sm mb-3">Different sizes:</p>
              <div className="flex gap-3 items-center">
                <Button variant="primary" icon={<Search size={14} />} size="sm" />
                <Button variant="primary" icon={<Search size={18} />} size="md" />
                <Button variant="primary" icon={<Search size={22} />} size="lg" />
              </div>
            </div>
          </div>

          {/* Button Shapes */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">Button Shapes</h2>
            <div className="space-y-4">
              <div>
                <p className="text-purple-200 text-sm mb-2">Rounded (default):</p>
                <Button variant="primary" shape="rounded">
                  Rounded Button
                </Button>
              </div>
              <div>
                <p className="text-purple-200 text-sm mb-2">Square:</p>
                <Button variant="secondary" shape="square">
                  Square Button
                </Button>
              </div>
              <div>
                <p className="text-purple-200 text-sm mb-2">Circle (great for icons):</p>
                <div className="flex gap-3">
                  <Button variant="success" shape="circle" icon={<Plus size={18} />} />
                  <Button variant="danger" shape="circle" icon={<Trash2 size={18} />} />
                  <Button variant="outline" shape="circle" icon={<Edit size={18} />} />
                </div>
              </div>
            </div>
          </div>

          {/* Icon Positions */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">Icon Positions</h2>
            <div className="space-y-4">
              <div>
                <p className="text-purple-200 text-sm mb-2">Icon Left (default):</p>
                <Button variant="primary" icon={<Send size={18} />}>
                  Send Message
                </Button>
              </div>
              <div>
                <p className="text-purple-200 text-sm mb-2">Icon Right:</p>
                <Button variant="secondary" icon={<Download size={18} />} iconPosition="right">
                  Download File
                </Button>
              </div>
              <div>
                <p className="text-purple-200 text-sm mb-2">With loading:</p>
                <Button variant="success" icon={<ShoppingCart size={18} />} loading>
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>

          {/* Full Width Buttons */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">Full Width</h2>
            <div className="space-y-4">
              <Button variant="primary" fullWidth>
                Sign In
              </Button>
              <Button variant="success" fullWidth icon={<Plus size={18} />}>
                Create New Account
              </Button>
              <Button variant="outline" fullWidth>
                Learn More
              </Button>
              <Button variant="danger" fullWidth loading>
                Processing Payment...
              </Button>
            </div>
          </div>

          {/* Link Buttons */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">As Links</h2>
            <div className="space-y-4">
              <div>
                <Button 
                  variant="primary" 
                  asLink 
                  href="https://github.com" 
                  target="_blank"
                >
                  Visit GitHub
                </Button>
              </div>
              <div>
                <Button 
                  variant="secondary" 
                  asLink 
                  href="#documentation"
                  icon={<Star size={18} />}
                >
                  View Docs
                </Button>
              </div>
              <div>
                <Button 
                  variant="outline" 
                  asLink 
                  href="/about"
                >
                  About Us
                </Button>
              </div>
            </div>
          </div>

          {/* Interactive Demo */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl lg:col-span-3">
            <h2 className="text-3xl font-bold text-white mb-6">Interactive Counter Demo</h2>
            <div className="text-center space-y-6">
              <div className="text-white">
                <p className="text-lg mb-2">Click count:</p>
                <p className="text-6xl font-bold text-yellow-300">{count}</p>
              </div>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button 
                  variant="success" 
                  onClick={() => setCount(count + 1)}
                  icon={<Plus size={18} />}
                  size="lg"
                >
                  Increment
                </Button>
                <Button 
                  variant="danger" 
                  onClick={() => setCount(count - 1)}
                  size="lg"
                >
                  Decrement
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setCount(0)}
                  icon={<Trash2 size={18} />}
                  size="lg"
                >
                  Reset
                </Button>
              </div>
            </div>
          </div>

          {/* Disabled States */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl lg:col-span-2">
            <h2 className="text-3xl font-bold text-white mb-6">Disabled States</h2>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="primary" disabled>
                Disabled
              </Button>
              <Button variant="secondary" disabled icon={<User size={18} />}>
                Disabled with Icon
              </Button>
              <Button variant="success" disabled fullWidth>
                Full Width Disabled
              </Button>
              <Button variant="danger" disabled shape="circle" icon={<Trash2 size={18} />} />
            </div>
          </div>

          {/* Combined Features */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6">Combined Features</h2>
            <div className="space-y-4">
              <Button 
                variant="primary" 
                size="lg" 
                shape="rounded" 
                icon={<ShoppingCart size={20} />}
                fullWidth
              >
                Add to Cart
              </Button>
              <Button 
                variant="success" 
                shape="square" 
                icon={<Download size={18} />}
                iconPosition="right"
                fullWidth
              >
                Download Now
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 bg-white/10 backdrop-blur-lg rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">✨ Button Features Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-purple-200">
            <div>✅ 6 Variants</div>
            <div>✅ 3 Sizes</div>
            <div>✅ Loading States</div>
            <div>✅ Icon Support</div>
            <div>✅ Icon-Only Mode</div>
            <div>✅ 3 Shapes</div>
            <div>✅ Full Width</div>
            <div>✅ Link Support</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;