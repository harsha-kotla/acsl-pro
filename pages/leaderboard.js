// leaderboard.js
import Head from 'next/head';
import Navbar from '@/components/Navbar';

export default function Leaderboard() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>StemClimb - Leaderboard</title>
        <meta name="description" content="StemClimb - Leaderboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex-grow bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800 flex flex-col items-center py-12 px-6">
        <h1 className="text-5xl font-bold mb-6">Leaderboard</h1>
        <p className="text-lg mb-8 max-w-xl text-center">
          See how participants rank in our STEM initiatives and competitions!
        </p>
        <table className="table-auto border-collapse border border-gray-400 w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="border border-gray-300 px-4 py-3">Rank</th>
              <th className="border border-gray-300 px-4 py-3">Name</th>
              <th className="border border-gray-300 px-4 py-3">Points</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            <tr className="hover:bg-gray-100 transition">
              <td className="border border-gray-300 px-4 py-2 text-center">1</td>
              <td className="border border-gray-300 px-4 py-2">Alex Johnson</td>
              <td className="border border-gray-300 px-4 py-2 text-center">1500</td>
            </tr>
            <tr className="hover:bg-gray-100 transition">
              <td className="border border-gray-300 px-4 py-2 text-center">2</td>
              <td className="border border-gray-300 px-4 py-2">Taylor Smith</td>
              <td className="border border-gray-300 px-4 py-2 text-center">1450</td>
            </tr>
            <tr className="hover:bg-gray-100 transition">
              <td className="border border-gray-300 px-4 py-2 text-center">3</td>
              <td className="border border-gray-300 px-4 py-2">Jordan Lee</td>
              <td className="border border-gray-300 px-4 py-2 text-center">1400</td>
            </tr>
          </tbody>
        </table>
      </main>
      <footer className="w-full py-8 bg-gray-900 text-center text-gray-300">
        <p>
          Empowering Communities through STEM &copy; {new Date().getFullYear()} StemClimb. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}