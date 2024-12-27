import Link from 'next/link';
import { useAuth } from '../authContext';
import { logout } from '../firebaseAuth';

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-700 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white hover:text-yellow-300 transition">
          StemClimb
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/problems" className="text-white hover:text-yellow-300 transition">
            Problems
          </Link>
          <Link href="/competitions" className="text-white hover:text-yellow-300 transition">
            Competitions
          </Link>
          <Link href="/resources" className="text-white hover:text-yellow-300 transition">
            Resources
          </Link>
          <Link href="/leaderboard" className="text-white hover:text-yellow-300 transition">
            Leaderboard
          </Link>
          <Link href="/outreach" className="text-white hover:text-yellow-300 transition">
            Outreach
          </Link>
        </div>

        {/* Authentication Buttons */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="hidden md:block text-white">
                Welcome, <span className="font-bold">{user.name}</span>
              </span>
              <button
                onClick={logout}
                className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-600 transition">
                Login
              </Link>
              <Link href="/signup" className="bg-yellow-400 px-4 py-2 rounded text-blue-600 font-semibold hover:bg-yellow-500 transition">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}