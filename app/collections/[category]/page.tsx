'use client';

import React from 'react';
import { useParams } from 'next/navigation';

// Mock product data - in a real app, this would come from an API or database
const products = {
  'indoor-plants': [
    {
      id: 1,
      name: 'Snake Plant',
      price: 29.99,
      image: '/products/snake-plant.jpg',
      description: 'Low-maintenance plant perfect for air purification.',
    },
    {
      id: 2,
      name: 'Peace Lily',
      price: 34.99,
      image: '/products/peace-lily.jpg',
      description: 'Beautiful flowering plant that helps clean indoor air.',
    },
  ],
  'outdoor-plants': [
    {
      id: 3,
      name: 'Garden Rose',
      price: 24.99,
      image: '/products/garden-rose.jpg',
      description: 'Classic garden rose with vibrant colors.',
    },
    {
      id: 4,
      name: 'Hydrangea',
      price: 39.99,
      image: '/products/hydrangea.jpg',
      description: 'Large, showy flowers in various colors.',
    },
  ],
  accessories: [
    {
      id: 5,
      name: 'Plant Stand',
      price: 49.99,
      image: '/products/plant-stand.jpg',
      description: 'Modern bamboo plant stand for indoor use.',
    },
    {
      id: 6,
      name: 'Watering Can',
      price: 19.99,
      image: '/products/watering-can.jpg',
      description: 'Stylish metal watering can with long spout.',
    },
  ],
};

export default function CollectionPage() {
  const params = useParams();
  const category = params.category as string;
  const categoryProducts = products[category as keyof typeof products] || [];

  const categoryTitles = {
    'indoor-plants': 'Indoor Plants',
    'outdoor-plants': 'Outdoor Plants',
    'accessories': 'Plant Accessories',
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {categoryTitles[category as keyof typeof categoryTitles] || 'Collection'}
          </h1>
          <p className="text-lg text-gray-600">
            Explore our selection of {categoryTitles[category as keyof typeof categoryTitles]?.toLowerCase()}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 bg-gray-200">
                {/* Image placeholder - in a real app, use next/image */}
                <div className="w-full h-full bg-green-100 flex items-center justify-center text-green-500">
                  [Product Image]
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900">{product.name}</h2>
                <p className="mt-2 text-gray-600">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">${product.price}</span>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
