// outreach.js
import Head from 'next/head';
import Navbar from '@/components/Navbar';

export default function Outreach() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>StemClimb - Outreach</title>
        <meta name="description" content="StemClimb - Outreach" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex-grow bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white flex flex-col items-center py-12 px-6">
        <h1 className="text-5xl font-bold mb-6">Outreach Initiatives</h1>
        <p className="text-lg max-w-3xl text-center mb-12">
          Discover our efforts to reach underrepresented communities and inspire a passion for STEM.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          <div className="card bg-white text-purple-900 shadow-lg p-8 rounded-lg hover:bg-purple-50 transition">
            <h3 className="text-2xl font-semibold mb-4">Community Workshops</h3>
            <p>Hands-on workshops for students and educators to explore STEM topics.</p>
          </div>
          <div className="card bg-white text-purple-900 shadow-lg p-8 rounded-lg hover:bg-purple-50 transition">
            <h3 className="text-2xl font-semibold mb-4">Mentorship Programs</h3>
            <p>One-on-one mentorship to foster STEM learning and career development.</p>
          </div>
          <div className="card bg-white text-purple-900 shadow-lg p-8 rounded-lg hover:bg-purple-50 transition">
            <h3 className="text-2xl font-semibold mb-4">School Partnerships</h3>
            <p>Collaborating with schools to bring STEM resources to classrooms.</p>
          </div>
          <div className="card bg-white text-purple-900 shadow-lg p-8 rounded-lg hover:bg-purple-50 transition">
            <h3 className="text-2xl font-semibold mb-4">Volunteer Opportunities</h3>
            <p>Join our team and make a difference in STEM education.</p>
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
