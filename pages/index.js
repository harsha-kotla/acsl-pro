import Navbar from '@/components/Navbar';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>CodeClimb - Competitive Programming Hub</title>
        <meta name="description" content="CodeClimb - Your Hub for Competitive Programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex-grow bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white flex flex-col justify-center items-center py-12">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to <span className="text-yellow-300">CodeClimb</span>
        </h1>
        <p className="text-lg max-w-2xl text-center mb-8">
          Your hub for competitive programming challenges, contests, and resources to take your coding skills to the next level.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-8">
          <a
            href="/competitions"
            className="card bg-white text-blue-600 shadow-lg p-6 rounded-lg hover:bg-gray-100 transition"
          >
            <h3 className="text-2xl font-semibold mb-2">Upcoming Competitions &rarr;</h3>
            <p>Stay updated with the latest programming contests.</p>
          </a>

          <a
            href="/challenges"
            className="card bg-white text-blue-600 shadow-lg p-6 rounded-lg hover:bg-gray-100 transition"
          >
            <h3 className="text-2xl font-semibold mb-2">Practice Challenges &rarr;</h3>
            <p>Solve curated challenges and improve your skills.</p>
          </a>

          <a
            href="/leaderboard"
            className="card bg-white text-blue-600 shadow-lg p-6 rounded-lg hover:bg-gray-100 transition"
          >
            <h3 className="text-2xl font-semibold mb-2">Leaderboard &rarr;</h3>
            <p>See how you rank against others in our competitive leaderboard.</p>
          </a>

          <a
            href="/resources"
            className="card bg-white text-blue-600 shadow-lg p-6 rounded-lg hover:bg-gray-100 transition"
          >
            <h3 className="text-2xl font-semibold mb-2">Learning Resources &rarr;</h3>
            <p>Access resources to help you improve in programming.</p>
          </a>
        </div>
      </main>

      <footer className="w-full py-8 bg-gray-900 text-center text-gray-300">
        <p>Powered by CodeClimb &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}