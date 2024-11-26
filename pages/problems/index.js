import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import RenderLaTeX from '@/components/RenderLaTeX';

export default function Problems() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const fetchProblems = async () => {
      const querySnapshot = await getDocs(collection(db, 'problems'));
      const problemsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProblems(problemsData);
    };
    fetchProblems();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Problems</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map(problem => (
            <div key={problem.id} className="p-4 bg-white shadow-md rounded-md">
              <div className="text-lg font-semibold">
                <RenderLaTeX content={problem.problemStatement.split(' ').slice(0, 10).join(' ') + '...'} />
              </div>
              <p className="text-sm text-gray-500">{problem.topic || 'No Topic'}</p>
              <Link href={`/problems/${problem.id}`} className="text-blue-600 mt-2 inline-block hover:underline">
                
                  View Problem &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}