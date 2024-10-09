// components/Navbar.js

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              ACSL Pro
            </Link>
          </div>

          <div className="flex space-x-8 items-center">
            <Link href="/" className="text-gray-800 hover:text-blue-600 text-lg">
              Home
            </Link>
            <Link href="/practice" className="text-gray-800 hover:text-blue-600 text-lg">
              Practice
            </Link>
            <Link href="/content" className="text-gray-800 hover:text-blue-600 text-lg">
              Content
            </Link>
            <Link href="/account" className="text-gray-800 hover:text-blue-600 text-lg">
              Account
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
