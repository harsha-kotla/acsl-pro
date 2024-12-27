// competitions.js
import Head from 'next/head';
import Navbar from '@/components/Navbar';

export default function Competitions() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>StemClimb - Competitions</title>
        <meta name="description" content="StemClimb - Competitions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex-grow bg-gradient-to-r from-green-600 via-yellow-500 to-red-500 text-white flex flex-col items-center py-12 px-6">
        <h1 className="text-5xl font-bold mb-6">Competitions</h1>
        <p className="text-lg max-w-3xl text-center mb-12">
          Participate in exciting STEM competitions and showcase your talent on a global stage.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          <div className="card bg-white text-green-900 shadow-lg p-8 rounded-lg hover:bg-green-50 transition">
            <h3 className="text-2xl font-semibold mb-4">Local Competitions</h3>
            <p>Engage with your local community through STEM challenges.</p>
          </div>
          <div className="card bg-white text-green-900 shadow-lg p-8 rounded-lg hover:bg-green-50 transition">
            <h3 className="text-2xl font-semibold mb-4">National Competitions</h3>
            <p>Compete with the best minds across the country.</p>
          </div>
          <div className="card bg-white text-green-900 shadow-lg p-8 rounded-lg hover:bg-green-50 transition">
            <h3 className="text-2xl font-semibold mb-4">International Competitions</h3>
            <p>Showcase your skills on a global platform.</p>
          </div>
          <div className="card bg-white text-green-900 shadow-lg p-8 rounded-lg hover:bg-green-50 transition">
            <h3 className="text-2xl font-semibold mb-4">Specialized Challenges</h3>
            <p>Participate in niche competitions for unique STEM domains.</p>
          </div>
        </div>
      </main>
      <footer className="w-full py-8 bg-gray-900 text-center text-gray-300">
        <p>
          Empowering Communities through STEM &copy; {new Date().getFullYear()} StemClimb. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}