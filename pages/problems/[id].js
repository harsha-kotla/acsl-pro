import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import Navbar from '@/components/Navbar';
import RenderLaTeX from '@/components/RenderLaTeX';

export default function ProblemDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [problem, setProblem] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null); // Track the selected option
  const [submitted, setSubmitted] = useState(false); // Track submission state

  useEffect(() => {
    if (id) {
      const fetchProblem = async () => {
        const docRef = doc(db, 'problems', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProblem(docSnap.data());
        }
      };
      fetchProblem();
    }
  }, [id]);

  if (!problem) {
    return <p>Loading...</p>;
  }

  // Sort options alphabetically by key (A-E)
  const sortedOptions = Object.entries(problem.options).sort(([keyA], [keyB]) =>
    keyA.localeCompare(keyB)
  );

  // Handle answer selection
  const handleOptionClick = (key) => {
    if (!submitted) {
      setSelectedOption(key);
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    setSubmitted(true);
    if (selectedOption === problem.correctOption) {
      alert('Correct Answer!');
    } else {
      alert(`Incorrect! The correct answer is ${problem.correctOption}.`);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        {/* Problem Statement */}
        <h1 className="text-3xl font-bold mb-4">Problem</h1>
        <div className="prose">
          <RenderLaTeX content={problem.problemStatement} />
        </div>

        {/* Options */}
        <h2 className="text-2xl font-semibold mt-6">Options</h2>
        <div className="space-y-4 mt-4">
          {sortedOptions.map(([key, value]) => (
            <button
              key={key}
              onClick={() => handleOptionClick(key)}
              className={`block w-full text-left px-6 py-3 rounded-md border transition-all duration-300 ${
                selectedOption === key
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-black border-gray-300 hover:bg-gray-100'
              }`}
            >
              <strong>{key}:</strong> <RenderLaTeX content={value} />
            </button>
          ))}
        </div>

        {/* Submit Button */}
        {!submitted && (
          <button
            onClick={handleSubmit}
            className="mt-6 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Submit Answer
          </button>
        )}

        {/* Solution */}
        {submitted && problem.solution && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Solution</h2>
            <div className="prose">
              <RenderLaTeX content={problem.solution} />
            </div>
          </div>
        )}

        {/* Topic */}
        <p className="text-gray-500 mt-4">
          <strong>Topic:</strong> {problem.topic || 'No Topic'}
        </p>
      </div>
    </div>
  );
}