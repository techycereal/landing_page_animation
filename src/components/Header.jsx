import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-700 text-white py-4 fixed w-full top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo or Title */}
        <div className="text-2xl font-bold">Global Internet Services</div>

        {/* Hamburger Menu Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="hero"
                smooth={true}
                duration={500}
                className="hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="why-us"
                smooth={true}
                duration={500}
                className="hover:underline"
              >
                Why Us
              </Link>
            </li>
            <li>
              <Link
                to="pricing"
                smooth={true}
                duration={500}
                className="hover:underline"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="faq"
                smooth={true}
                duration={500}
                className="hover:underline"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu */}
        <nav
          className={`fixed top-0 right-0 bg-blue-700 text-white h-full w-1/2 md:hidden flex flex-col items-center justify-center space-y-4 transform transition-transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="flex flex-col space-y-4 text-center">
            <li>
              <Link
                to="hero"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="text-2xl hover:underline"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="why-us"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="text-2xl hover:underline"
              >
                Why Us
              </Link>
            </li>
            <li>
              <Link
                to="pricing"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="text-2xl hover:underline"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="faq"
                smooth={true}
                duration={500}
                onClick={toggleMenu}
                className="text-2xl hover:underline"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
