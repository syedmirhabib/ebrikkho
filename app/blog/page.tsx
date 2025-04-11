'use client';

import React from 'react';

// Mock blog data - in a real app, this would come from an API or database
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Indoor Plants',
    excerpt: 'Learn the basics of caring for indoor plants and create your own green sanctuary.',
    date: '2024-03-15',
    imageUrl: '/blog/indoor-plants.jpg',
  },
  {
    id: 2,
    title: 'Best Plants for Air Purification',
    excerpt: 'Discover which plants are most effective at improving indoor air quality.',
    date: '2024-03-10',
    imageUrl: '/blog/air-purifying-plants.jpg',
  },
  {
    id: 3,
    title: 'Urban Gardening Tips',
    excerpt: 'Make the most of your limited space with these urban gardening strategies.',
    date: '2024-03-05',
    imageUrl: '/blog/urban-garden.jpg',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Ebrikkho Blog</h1>
          <p className="text-lg text-gray-600">Stay updated with the latest gardening tips and trends</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200">
                {/* Image placeholder - in a real app, use next/image */}
                <div className="w-full h-full bg-green-100 flex items-center justify-center text-green-500">
                  [Blog Image]
                </div>
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-500">{post.date}</time>
                <h2 className="mt-2 text-xl font-semibold text-gray-900">{post.title}</h2>
                <p className="mt-3 text-gray-600">{post.excerpt}</p>
                <div className="mt-4">
                  <button className="text-green-600 hover:text-green-700 font-medium">
                    Read more &rarr;
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
