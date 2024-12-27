import Navbar from '@/components/Navbar';
import Head from 'next/head';

export default function Outreach() {
  return (
    <div className="min-h-screen flex flex-col">
        <Head>
            <title>Outreach - CodeClimb</title>
        </Head>
      <Navbar />
      <main className="flex-grow bg-gray-100 text-gray-800">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">Outreach</h1>
          <p className="text-lg mb-4">
            At <span className="font-semibold">CodeClimb</span>, we believe in empowering learners and developers from all
            backgrounds to excel in coding and problem-solving.
          </p>
          <p className="text-lg mb-4">
            Our outreach programs aim to bridge the gap between aspiring coders and the resources they need to succeed.
            Whether it's hosting workshops, organizing competitions, or collaborating with educational institutions, we're
            here to make a difference.
          </p>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Get Involved</h2>
            <ul className="list-disc ml-8 text-lg">
              <li className="mb-2">
                <strong>Workshops:</strong> Join or host coding workshops to inspire and teach the next generation of developers.
              </li>
              <li className="mb-2">
                <strong>Competitions:</strong> Participate in or sponsor competitive programming contests to challenge yourself and others.
              </li>
              <li className="mb-2">
                <strong>Educational Partnerships:</strong> Collaborate with schools, colleges, and universities to bring CodeClimb to more learners.
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Contact Us</h2>
            <p className="text-lg">
              Interested in working with us? Reach out at{' '}
              <a href="mailto:outreach@codeclimb.com" className="text-blue-600 underline">
                outreach@codeclimb.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <footer className="py-6 bg-gray-800 text-center text-white">
        <p>&copy; {new Date().getFullYear()} CodeClimb. All Rights Reserved.</p>
      </footer>
    </div>
  );
}