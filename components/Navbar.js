// components/Navbar.js
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-blue-600 p-4 flex justify-between text-white">
      <Link href="/" className="font-bold text-lg">
        ACSL Pro
      </Link>
      <div>
        {session ? (
          <>
            <span className="mr-4">Welcome, {session.user.email}</span>
            <button onClick={() => signOut()} className="bg-red-500 px-3 py-1 rounded">
              Logout
            </button>
          </>
        ) : (
          <button onClick={() => signIn()} className="bg-green-500 px-3 py-1 rounded">
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
