import React from 'react';
function AboutUs() {
    return (
      <div className="min-h-screen bg-gradient-to-bl from-black via-red-600 to-black flex flex-col justify-between py-8">
        <div className="max-w-3xl mx-auto p-4">
          <h1 className="text-3xl font-semibold text-center text-white mb-8">About Us</h1>
  
          <div className="about-container bg-gray-800 p-6 rounded-lg shadow-md">
            <p className="text-white mb-4">
              Welcome to <strong>BeMyPG</strong>!
            </p>
            <p className="text-white mb-4">
              At BeMyPG, we understand that finding the perfect place to stay is essential for students and young professionals. Our mission is to simplify the process of discovering and securing quality paying guest accommodations that meet your needs and budget.
            </p>
            <p className="text-white mb-4">
              With a user-friendly platform, we connect you to a diverse range of options, from cozy rooms in vibrant neighborhoods to spacious flats that foster a sense of community. Our dedicated team is committed to ensuring a seamless experience, providing detailed listings, transparent pricing, and personalized support every step of the way.
            </p>
            <p className="text-white mb-8">
              Whether you're looking for a short-term stay or a long-term home, BeMyPG is here to help you find a place where you can thrive. Join our community today and experience the ease of finding your ideal living space!
            </p>
  
            <h2 className="text-2xl font-semibold text-white mb-4">Why Choose Us?</h2>
            <ul className="list-disc pl-5 text-white bg-gray-800">
              <li><strong>Curated Listings:</strong> We handpick every property to ensure quality and comfort.</li>
              <li><strong>Transparent Reviews:</strong> Our honest reviews from real residents help you make informed decisions.</li>
              <li><strong>Dedicated Support:</strong> Our team is here to assist you with any questions or concerns.</li>
            </ul>
  
            <p className="text-white mt-8">
              Let us help you find your home away from home. Welcome to BeMyPG!
            </p>
          </div>
        </div>
  
        {/* Footer */}
        <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
          &copy; 2024 BeMyPG. All rights reserved.
        </footer>
      </div>
    );
  }
  
  export default AboutUs;
  
  