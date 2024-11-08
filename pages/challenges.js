// pages/challenges.js
import Navbar from '@/components/Navbar';
import Head from 'next/head';

export default function Challenges() {
  return (
    <div>
      <Head>
        <title>ACSL Pro - Challenges</title>
        <meta name="description" content="Practice programming challenges on ACSL Pro." />
      </Head>
      <Navbar />
      <main className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">Practice Challenges</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-8">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600">Challenge 1</h3>
            <p className="text-gray-600">Solve this interesting problem involving algorithms.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600">Challenge 2</h3>
            <p className="text-gray-600">Practice your skills with this data structure challenge.</p>
          </div>
          {/* Add more challenges as needed */}
        </div>
      </main>
    </div>
  );
}
