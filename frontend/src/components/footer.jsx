// src/Footer.js
import React from 'react';
import github from '../assets/github.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Company Name</h3>
            <p className="text-sm">131 Street BC block, Newtown, Kolkata, West Bengal, 700156<br />Phone: (123) 456-7890<br />Email: decentapi@gmail.com</p>
          </div>
          {/* Column 2 */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          {/* Column 3 */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400 transition duration-300"><img src={facebook} className='h-10 w-10' /></a>
              <a href="#" className="text-white hover:text-gray-400 transition duration-300"><img src={twitter} className='h-10 w-10' /></a>
              <a href="#" className="text-white hover:text-gray-400 transition duration-300"><img src={github} className='h-10 w-10' /></a>
              <a href="#" className="text-white hover:text-gray-400 transition duration-300"><img src={linkedin} className='h-10 w-10' /></a>
            </div>
          </div>
          {/* Column 4 */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
            <form className="flex">
              <input type="email" className="bg-gray-900 text-white border border-gray-600 px-3 py-2 rounded-l focus:outline-none" placeholder="Enter your email" />
              <button type="submit" className="hover:bg-gray-700 text-white px-4 py-2 rounded-r focus:outline-none color-bg">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-center">
          <p>&copy; 2024 decentAPI All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
