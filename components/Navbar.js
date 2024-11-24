import Link from 'next/link';
import { useAuth } from '../authContext';
import { logout } from '../firebaseAuth';

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center text-white">
      <Link href="/" className="font-bold text-lg">
        ACSL Pro
      </Link>
      <div>
        {user ? (
          <>
            <span className="mr-4">Welcome, {user.name}</span>
            <button
              onClick={logout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="mr-4">
              Login
            </Link>
            <Link href="/signup" className="bg-green-500 px-3 py-1 rounded hover:bg-green-600">
                Sign Up
              
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
