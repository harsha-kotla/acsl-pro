// pages/resources.js

import Navbar from '@/components/Navbar';
import Head from 'next/head';
import Link from 'next/link';

export default function Resources() {
  const resources = [
    {
      title: 'Computer Number Systems',
      description: 'Explore binary, octal, decimal, and hexadecimal number systems.',
      slug: 'computer-number-systems',
    },
    {
      title: 'Prefix/Infix/Postfix Notation',
      description: 'Learn different ways to represent arithmetic expressions.',
      slug: 'prefix-infix-postfix-notation',
    },
    {
      title: 'Boolean Algebra',
      description: 'Understand the fundamentals of logical operations and expressions.',
      slug: 'boolean-algebra',
    },
    {
      title: 'Data Structures',
      description: 'Study arrays, linked lists, stacks, queues, trees, and graphs.',
      slug: 'data-structures',
    },
    {
      title: 'Graph Theory',
      description: 'Dive into the study of graphs and their applications.',
      slug: 'graph-theory',
    },
    {
      title: 'Recursive Functions',
      description: 'Learn about functions that call themselves to solve problems.',
      slug: 'recursive-functions',
    },
    {
      title: 'Regular Expressions',
      description: 'Understand patterns used for string matching and validation.',
      slug: 'regular-expressions',
    },
    {
      title: 'Digital Electronics',
      description: 'Explore the basics of electronic circuits and digital signals.',
      slug: 'digital-electronics',
    },
    {
      title: 'Assembly Language',
      description: 'Get introduced to low-level programming and instruction sets.',
      slug: 'assembly-language',
    },
    {
      title: 'LISP Programming',
      description: 'Learn about LISP, one of the oldest high-level programming languages.',
      slug: 'lisp-programming',
    },
    {
      title: 'Python Programming',
      description: 'Enhance your skills in Python programming.',
      slug: 'python-programming',
    },
    {
      title: 'SQL (Structured Query Language)',
      description: 'Understand how to interact with relational databases using SQL.',
      slug: 'sql',
    },
    // Add more topics as needed
  ];

  return (
    <div>
      <Head>
        <title>ACSL Pro - Learning Resources</title>
        <meta
          name="description"
          content="Access resources to improve in competitive programming."
        />
      </Head>
      <Navbar />
      <main className="min-h-screen bg-gray-100 flex flex-col items-center py-12">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">Learning Resources</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl px-8">
          {resources.map((resource, index) => (
            <Link key={index} href={`/resources/${resource.slug}`}>
              <div className="bg-white shadow-lg p-6 rounded-lg cursor-pointer hover:bg-blue-50">
                <h3 className="text-2xl font-semibold text-blue-600">{resource.title}</h3>
                <p className="text-gray-600">{resource.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}