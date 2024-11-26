// pages/admin/add-problem.js
import { useState } from 'react';
import { db } from '../../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import RenderLaTeX from '@/components/RenderLaTeX';

export default function AddProblem() {
  const [title, setTitle] = useState('');
  const [problemStatement, setProblemStatement] = useState('');
  const [options, setOptions] = useState({ A: '', B: '', C: '', D: '', E: '' });
  const [solution, setSolution] = useState('');
  const [correctOption, setCorrectOption] = useState('');
  const [preview, setPreview] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'problems'), {
        topic: title,
        problemStatement,
        options,
        solution,
        correctOption,
        createdAt: serverTimestamp(),
      });
      alert('Problem added successfully!');
      setTitle('');
      setProblemStatement('');
      setOptions({ A: '', B: '', C: '', D: '', E: '' });
      setSolution('');
      setCorrectOption('');
    } catch (error) {
      console.error('Error adding problem:', error);
      alert('Failed to add problem.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Add New Problem</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-bold">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-bold">Problem Statement (LaTeX)</label>
          <textarea
            value={problemStatement}
            onChange={(e) => setProblemStatement(e.target.value)}
            className="w-full p-2 border rounded"
            rows="5"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-lg font-bold">Options</label>
          {['A', 'B', 'C', 'D', 'E'].map((opt) => (
            <div key={opt} className="flex items-center space-x-2">
              <label>{opt}:</label>
              <input
                type="text"
                value={options[opt]}
                onChange={(e) => setOptions({ ...options, [opt]: e.target.value })}
                className="flex-1 p-2 border rounded"
              />
            </div>
          ))}
        </div>
        <div>
          <label className="block text-lg font-bold">Correct Option</label>
          <select
            value={correctOption}
            onChange={(e) => setCorrectOption(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Correct Option</option>
            {['A', 'B', 'C', 'D', 'E'].map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-lg font-bold">Solution (LaTeX)</label>
          <textarea
            value={solution}
            onChange={(e) => setSolution(e.target.value)}
            className="w-full p-2 border rounded"
            rows="5"
            required
          ></textarea>
        </div>
        <div>
          <button
            type="button"
            onClick={() => setPreview(!preview)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            {preview ? 'Hide Preview' : 'Show Preview'}
          </button>
        </div>
        {preview && (
          <div className="mt-6 border p-4 rounded bg-gray-100">
            <h2 className="text-xl font-bold mb-2">Preview:</h2>
            <RenderLaTeX content={problemStatement} />
            <h3 className="text-lg font-bold mt-4">Options:</h3>
            <ul>
              {Object.entries(options).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-bold mt-4">Solution:</h3>
            <RenderLaTeX content={solution} />
          </div>
        )}
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Save Problem
        </button>
      </form>
    </div>
  );
}