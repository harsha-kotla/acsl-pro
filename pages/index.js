// index.js
import Head from 'next/head';
import Navbar from '@/components/Navbar';

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>StemClimb - Empowering Through STEM</title>
        <meta name="description" content="StemClimb - Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex-grow bg-gradient-to-r from-green-400 via-teal-500 to-blue-600 text-white flex flex-col justify-center items-center py-12 px-6">
        <h1 className="text-6xl font-extrabold mb-8 text-center">
          Welcome to <span className="text-yellow-300">StemClimb</span>
        </h1>
        <p className="text-xl max-w-3xl text-center mb-12">
          Join a community dedicated to empowering the next generation through STEM education, innovation, and collaboration.
        </p>
        <button className="px-8 py-3 bg-yellow-300 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition">
          Learn More
        </button>
      </main>
      <footer className="w-full py-8 bg-gray-900 text-center text-gray-300">
        <p>
          Empowering Communities through STEM &copy; {new Date().getFullYear()} StemClimb. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}