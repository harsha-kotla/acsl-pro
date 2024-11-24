import Navbar from '@/components/Navbar';
import Head from 'next/head';

export default function Competitions() {
  return (
    <div>
      <Head>
        <title>ACSL Pro - Competitions</title>
        <meta name="description" content="Stay updated with the latest programming competitions on ACSL Pro." />
      </Head>
      <Navbar />
      <main className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">Upcoming Competitions</h1>
        <div className="w-full max-w-4xl px-8">
          <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
            <h3 className="text-2xl font-semibold text-blue-600">Competition 1</h3>
            <p className="text-gray-700">Date: November 12, 2024</p>
            <p className="text-gray-600">Description of Competition 1.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg mb-6">
            <h3 className="text-2xl font-semibold text-blue-600">Competition 2</h3>
            <p className="text-gray-700">Date: December 5, 2024</p>
            <p className="text-gray-600">Description of Competition 2.</p>
          </div>
          {/* Additional competitions as needed */}
        </div>
      </main>
    </div>
  );
}
