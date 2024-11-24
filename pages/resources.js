import Navbar from '@/components/Navbar';
import Head from 'next/head';

export default function Resources() {
  return (
    <div>
      <Head>
        <title>ACSL Pro - Learning Resources</title>
        <meta name="description" content="Access resources to improve in competitive programming." />
      </Head>
      <Navbar />
      <main className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">Learning Resources</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-8">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600">Resource 1</h3>
            <p className="text-gray-600">A useful tutorial on algorithms and data structures.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-600">Resource 2</h3>
            <p className="text-gray-600">An introductory guide to competitive programming techniques.</p>
          </div>
          {/* Add more resources as needed */}
        </div>
      </main>
    </div>
  );
}
