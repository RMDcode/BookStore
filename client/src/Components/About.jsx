import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import image from '../assets/Library.jpg';

const AboutUs = () => {
  return (
    <div className="relative bg-cover bg-center min-h-screen" 
    style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative container mx-auto px-6 py-16 flex items-end min-h-screen">
        <div className="bg-white bg-opacity-0 p-8 rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3 mb-10 mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-blue-400">About Us</h1>
          <p className="text-lg text-white mb-4">
            Welcome to Bookstore, your gateway to endless adventures and boundless knowledge. At our bookstore, we believe in the magic of books and the power of stories to transform lives. Our mission is to create a haven for book lovers, where every reader can find their next great read.
          </p>
          <p className="text-lg text-white mb-4">
            From timeless classics to contemporary bestsellers, our carefully curated collection offers something for everyone. Whether you’re seeking an escape into a fantastical world, inspiration from a heartfelt memoir, or insights from the latest non-fiction, you’ll find it here. Our friendly and knowledgeable staff are always ready to help you discover new authors, revisit old favorites, and explore new genres.
          </p>
          <p className="text-lg text-white mb-4">
            We are more than just a bookstore; we are a community hub for literary enthusiasts. Our store regularly hosts author signings, book clubs, and reading events, providing opportunities for readers to connect and share their love for books. We also offer a cozy reading nook where you can relax and immerse yourself in a book, along with a selection of locally sourced coffee and treats to enjoy while you read.
          </p>
          <p className="text-lg text-white mb-4">
            Join our community of readers and experience the joy of turning pages, opening minds, and igniting imaginations. At Bookstore, every book is an adventure waiting to happen. Come in and discover your next story today. We are committed to fostering a love for reading and supporting lifelong learning, one book at a time.
          </p>
          <Link to="/" className="text-white hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
