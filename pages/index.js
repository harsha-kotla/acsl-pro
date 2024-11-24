import Navbar from '@/components/Navbar';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>ACSL Pro - Competitive Programming Hub</title>
        <meta name="description" content="ACSL Pro - Your Hub for Competitive Programming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold mb-4 text-blue-600">
          Welcome to <span className="text-indigo-500">ACSL Pro</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Your hub for competitive programming  challenges and contests.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-8">
          <a href="/competitions" className="card bg-white shadow-lg p-6 rounded-lg hover:bg-blue-50">
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">Upcoming Competitions &rarr;</h3>
            <p className="text-gray-600">Stay updated with the latest programming contests.</p>
          </a>

          <a href="/challenges" className="card bg-white shadow-lg p-6 rounded-lg hover:bg-blue-50">
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">Practice Challenges &rarr;</h3>
            <p className="text-gray-600">Solve curated challenges and improve your skills.</p>
          </a>

          <a href="/leaderboard" className="card bg-white shadow-lg p-6 rounded-lg hover:bg-blue-50">
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">Leaderboard &rarr;</h3>
            <p className="text-gray-600">See how you rank against others in our competitive leaderboard.</p>
          </a>

          <a href="/resources" className="card bg-white shadow-lg p-6 rounded-lg hover:bg-blue-50">
            <h3 className="text-2xl font-semibold mb-2 text-blue-600">Learning Resources &rarr;</h3>
            <p className="text-gray-600">Access resources to help you improve in programming.</p>
          </a>
        </div>
      </main>

      <footer className="w-full py-8 bg-gray-800 text-center text-white">
        <p>Powered by ACSL Pro &copy; 2024</p>
      </footer>
    </div>
  );
}
