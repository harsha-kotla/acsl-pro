// pages/signup.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import { signup } from '../firebaseAuth';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      alert("Signup successful!");
      router.push('/login');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-md"
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}