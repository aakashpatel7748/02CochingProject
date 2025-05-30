import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-4 py-10">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="max-w-xl mx-auto text-lg text-gray-600">
          Learn more about who we are, what we do, and why we’re passionate about building great things.
        </p>
      </section>

      {/* Info Section */}
      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
        <img
          src="https://images.unsplash.com/photo-1726064855857-46c37dc43c78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
          alt="Our Team"
          className="rounded-2xl shadow-md w-[200px] h-[200px]"
        />
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            We started with a mission to make technology more accessible. With a focus on user experience, we strive to build tools that empower individuals and organizations.
          </p>
        </div>
      </section>

      {/* Values/Skills/Testimonial Section */}
      <section className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-6">What We Believe In</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">
              We thrive on solving challenges and thinking outside the box.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
            <p className="text-gray-600">
              Honesty and transparency are the foundations of everything we do.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Teamwork</h3>
            <p className="text-gray-600">
              Great things are built together. We support and grow with each other.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About