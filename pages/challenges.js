// challenges.js
import Head from 'next/head';
import Navbar from '@/components/Navbar';

export default function Challenges() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>StemClimb - Challenges</title>
        <meta name="description" content="StemClimb - Challenges" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex-grow bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white flex flex-col items-center py-12 px-6">
        <h1 className="text-5xl font-bold mb-6">Challenges</h1>
        <p className="text-lg max-w-3xl text-center mb-12">
          Test your skills with our curated programming challenges designed to push your limits and expand your knowledge.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          <div className="card bg-white text-blue-900 shadow-lg p-8 rounded-lg hover:bg-blue-50 transition">
            <h3 className="text-2xl font-semibold mb-4">Beginner Challenges</h3>
            <p>Start your coding journey with foundational problems.</p>
          </div>
          <div className="card bg-white text-blue-900 shadow-lg p-8 rounded-lg hover:bg-blue-50 transition">
            <h3 className="text-2xl font-semibold mb-4">Intermediate Challenges</h3>
            <p>Take on more complex problems to sharpen your skills.</p>
          </div>
          <div className="card bg-white text-blue-900 shadow-lg p-8 rounded-lg hover:bg-blue-50 transition">
            <h3 className="text-2xl font-semibold mb-4">Advanced Challenges</h3>
            <p>Push your limits with high-difficulty tasks.</p>
          </div>
          <div className="card bg-white text-blue-900 shadow-lg p-8 rounded-lg hover:bg-blue-50 transition">
            <h3 className="text-2xl font-semibold mb-4">Team Challenges</h3>
            <p>Collaborate with others to solve group challenges.</p>
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