import Navbar from '@/components/Navbar';
import Head from 'next/head';

export default function Leaderboard() {
  const leaderboardData = [
    { rank: 1, name: 'Alice', score: 1500 },
    { rank: 2, name: 'Bob', score: 1400 },
    { rank: 3, name: 'Charlie', score: 1300 },
    // Additional leaderboard data
  ];

  return (
    <div>
      <Head>
        <title>ACSL Pro - Leaderboard</title>
        <meta name="description" content="View the ACSL Pro leaderboard and see where you rank." />
      </Head>
      <Navbar />
      <main className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">Leaderboard</h1>
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-2">Rank</th>
                <th className="py-2">Name</th>
                <th className="py-2">Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((user) => (
                <tr key={user.rank}>
                  <td className="py-2">{user.rank}</td>
                  <td className="py-2">{user.name}</td>
                  <td className="py-2">{user.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
