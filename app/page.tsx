import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Modern Navbar with improved logo visibility */}
      <nav className="fixed w-full z-50">
        <div className="absolute inset-0 bg-white shadow-lg" />
        <div className="relative max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 h-10">
              <Image 
                src="/ebrikkho-logo.png" 
                alt="Ebrikkho Logo" 
                width={120} 
                height={40} 
                className="object-contain" 
                priority 
              />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-green-900 hover:text-green-700 font-medium transition-all hover:scale-105">
                Home
              </a>
              <a href="#services" className="text-green-900 hover:text-green-700 font-medium transition-all hover:scale-105">
                Services
              </a>
              <a href="#products" className="text-green-900 hover:text-green-700 font-medium transition-all hover:scale-105">
                Products
              </a>
              <a href="#projects" className="text-green-900 hover:text-green-700 font-medium transition-all hover:scale-105">
                Projects
              </a>
              <div className="flex items-center gap-4">
                <button className="relative group">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-900 hover:text-green-700 transition-colors">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                  <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">0</span>
                </button>
                <button className="bg-green-700 text-white hover:bg-green-800 shadow-lg shadow-green-700/20 hover:shadow-green-700/30 transition-all duration-300 px-5 py-2.5 rounded-full font-medium">
                  Shop Now
                </button>
              </div>
            </div>
            <button className="md:hidden text-green-900 hover:text-green-700 transition-colors p-2 rounded-lg hover:bg-green-50">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Modern Gradients */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#4ade8020,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#22c55e15,transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-green-100/50 px-4 py-2 rounded-full">
                <span className="animate-pulse w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm text-green-700">Eco-friendly Solutions</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-900 via-green-700 to-green-600 bg-clip-text text-transparent">
                Bringing Nature to Your Urban Space
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                Transform your environment with sustainable and beautiful green solutions. Experience the perfect blend of nature and modern living.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full px-8 py-4 shadow-lg shadow-green-500/20 hover:shadow-green-500/30 transition-all duration-300">
                  Shop Products
                </button>
                <button className="rounded-full px-8 py-4 border-2 border-green-700 text-green-700 hover:bg-green-50/50 transition-all duration-300">
                  View Our Work
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-green-900/20">
                <Image
                  src="/ebrikkho-logo.png"
                  alt="Modern urban garden"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-contain hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-100 rounded-full blur-3xl opacity-60" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 relative bg-gradient-to-b from-white to-green-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our premium selection of eco-friendly products
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Smart Planters",
                price: "$49.99",
                image: "/ebrikkho-logo.png",
                tag: "Best Seller",
                rating: 4.8,
                reviews: 128
              },
              {
                title: "Organic Soil Mix",
                price: "$24.99",
                image: "/ebrikkho-logo.png",
                tag: "New",
                rating: 4.5,
                reviews: 86
              },
              {
                title: "LED Grow Lights",
                price: "$79.99",
                image: "/ebrikkho-logo.png",
                tag: "Popular",
                rating: 4.9,
                reviews: 245
              },
              {
                title: "Watering System",
                price: "$34.99",
                image: "/ebrikkho-logo.png",
                tag: "Limited",
                rating: 4.7,
                reviews: 156
              }
            ].map((product, index) => (
              <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-green-700 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {product.tag}
                  </span>
                </div>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-green-900 hover:bg-green-50 px-6 py-2 rounded-full transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      Quick View
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-green-900 mb-1 group-hover:text-green-700 transition-colors">
                    {product.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill={i < Math.floor(product.rating) ? "#047857" : "#E5E7EB"}
                          className="w-4 h-4"
                        >
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-green-700 font-bold text-lg">{product.price}</p>
                    <button className="text-green-700 hover:text-green-800 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="#all-products" className="inline-flex items-center gap-2 text-green-700 font-medium hover:text-green-900 transition-colors">
              View All Products
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section with Enhanced Cards */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900">Our Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for every green space
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Garden Design",
                description: "Innovative designs that blend technology with nature",
                icon: "🌿",
                color: "from-green-500 to-green-600"
              },
              {
                title: "Sustainable Solutions",
                description: "Eco-friendly approaches to urban gardening",
                icon: "🌱",
                color: "from-green-600 to-green-700"
              },
              {
                title: "Expert Maintenance",
                description: "Professional care for thriving green spaces",
                icon: "✨",
                color: "from-green-700 to-green-800"
              }
            ].map((feature, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl border border-green-100/20 bg-white shadow-md hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="p-6 relative z-10">
                  <div className="mb-4 text-3xl transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-green-900 mb-2 group-hover:text-green-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className={`h-1 w-16 bg-gradient-to-r ${feature.color} rounded-full`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-20 bg-gradient-to-b from-green-50/50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our latest transformations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Urban Oasis Project",
                location: "Dhaka, Bangladesh",
                image: "/ebrikkho-logo.png"
              },
              {
                title: "Vertical Garden Installation",
                location: "Chittagong, Bangladesh",
                image: "/ebrikkho-logo.png"
              },
              {
                title: "Rooftop Garden Design",
                location: "Sylhet, Bangladesh",
                image: "/ebrikkho-logo.png"
              }
            ].map((project, index) => (
              <div key={index} className="group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 p-8 text-white">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-green-100">{project.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied customers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Ebrikkho transformed our balcony into a beautiful garden. Their products are high quality and the service is exceptional.",
                name: "Rahima Akter",
                role: "Homeowner",
                image: "/ebrikkho-logo.png"
              },
              {
                quote: "The smart planters have made indoor gardening so much easier. I love how they blend technology with nature.",
                name: "Kamal Hossain",
                role: "Apartment Resident",
                image: "/ebrikkho-logo.png"
              },
              {
                quote: "Professional team, excellent products, and amazing results. Our office space looks completely different now.",
                name: "Nusrat Jahan",
                role: "Business Owner",
                image: "/ebrikkho-logo.png"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="mt-4 flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-green-900 to-green-700 p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#4ade8040,transparent_50%)]" />
            <div className="relative z-10 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Transform Your Space?</h2>
              <p className="text-green-100 max-w-2xl mx-auto">
                Let&apos;s create something beautiful together. Get in touch for a free consultation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-green-900 hover:bg-green-50 rounded-full px-8 py-4 shadow-lg shadow-green-900/20">
                  Schedule Consultation
                </button>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-8 py-4">
                  Browse Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="h-10 mb-4">
                <Image 
                  src="/ebrikkho-logo.png" 
                  alt="Ebrikkho Logo" 
                  width={120} 
                  height={40} 
                  className="object-contain" 
                />
              </div>
              <p className="text-green-100 mb-4">
                Bringing nature to urban spaces with sustainable and beautiful green solutions.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-green-100 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-green-100 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-green-100 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Products</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Projects</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Products</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Smart Planters</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Organic Soil</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">LED Grow Lights</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Watering Systems</a></li>
                <li><a href="#" className="text-green-100 hover:text-white transition-colors">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-green-100">123 Green Street, Dhaka, Bangladesh</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-green-100">info@ebrikkho.com</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-1 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-green-100">+880 1234 567890</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-green-800 mt-12 pt-8 text-center text-green-300">
            <p>&copy; {new Date().getFullYear()} Ebrikkho. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
