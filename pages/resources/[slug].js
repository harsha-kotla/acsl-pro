// pages/resources/[slug].js

import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Head from 'next/head';

const resourceContent = {
  'computer-number-systems': {
    title: 'Computer Number Systems',
    content: `
      <p>Computer number systems are fundamental to how data is represented and processed. Understanding different number systems is crucial for computer science.</p>
      <h2>Binary Number System (Base 2)</h2>
      <p>The binary system uses two digits, 0 and 1. It's the basis of all binary code and is used internally by almost all modern computers.</p>
      <h2>Octal Number System (Base 8)</h2>
      <p>Octal uses digits from 0 to 7. It's sometimes used in computing as a more compact representation of binary numbers.</p>
      <h2>Decimal Number System (Base 10)</h2>
      <p>The decimal system uses digits from 0 to 9. It's the standard system for denoting integer and non-integer numbers.</p>
      <h2>Hexadecimal Number System (Base 16)</h2>
      <p>Hexadecimal uses digits from 0 to 9 and letters A to F. It's widely used in computing as a human-friendly representation of binary-coded values.</p>
    `,
  },
  'prefix-infix-postfix-notation': {
    title: 'Prefix/Infix/Postfix Notation',
    content: `
      <p>These notations are different ways of writing arithmetic expressions.</p>
      <h2>Infix Notation</h2>
      <p>The operator is placed between operands, e.g., <code>A + B</code>. This is the common arithmetic notation.</p>
      <h2>Prefix Notation</h2>
      <p>The operator precedes the operands, e.g., <code>+ A B</code>. Also known as Polish notation.</p>
      <h2>Postfix Notation</h2>
      <p>The operator is placed after the operands, e.g., <code>A B +</code>. Also known as Reverse Polish notation. Useful for stack-based calculations.</p>
    `,
  },
  'boolean-algebra': {
    title: 'Boolean Algebra',
    content: `
      <p>Boolean algebra is a branch of algebra that deals with true or false values, typically denoted as 1 and 0, respectively. It's essential for digital circuit design and computer programming.</p>
      <h2>Basic Operations</h2>
      <ul>
        <li><strong>AND</strong> (Conjunction): Returns true if both operands are true.</li>
        <li><strong>OR</strong> (Disjunction): Returns true if at least one operand is true.</li>
        <li><strong>NOT</strong> (Negation): Inverts the value of the operand.</li>
      </ul>
      <h2>Laws of Boolean Algebra</h2>
      <p>Includes laws like De Morgan's Theorems, Associative, Commutative, and Distributive laws, which are used to simplify logical expressions.</p>
    `,
  },
  'data-structures': {
    title: 'Data Structures',
    content: `
      <p>Data structures are ways of organizing and storing data to enable efficient access and modification.</p>
      <h2>Arrays</h2>
      <p>A collection of items stored at contiguous memory locations. Elements can be accessed using indices.</p>
      <h2>Linked Lists</h2>
      <p>A linear data structure where each element contains a reference (link) to the next element.</p>
      <h2>Stacks</h2>
      <p>A collection that follows Last In First Out (LIFO) principle. Elements are added and removed from the top.</p>
      <h2>Queues</h2>
      <p>A collection that follows First In First Out (FIFO) principle. Elements are added at the rear and removed from the front.</p>
      <h2>Trees</h2>
      <p>A hierarchical data structure consisting of nodes connected by edges. Used to represent hierarchical relationships.</p>
      <h2>Graphs</h2>
      <p>A set of nodes connected by edges. Used to represent pairwise relationships between objects.</p>
    `,
  },
  'graph-theory': {
    title: 'Graph Theory',
    content: `
      <p>Graph theory studies graphs, which are mathematical structures used to model pairwise relations between objects.</p>
      <h2>Components of a Graph</h2>
      <ul>
        <li><strong>Vertices (Nodes)</strong>: Fundamental units represented as points.</li>
        <li><strong>Edges (Links)</strong>: Connections between pairs of vertices.</li>
      </ul>
      <h2>Applications</h2>
      <p>Used in computer networks, social networks, transportation, and more.</p>
    `,
  },
  'recursive-functions': {
    title: 'Recursive Functions',
    content: `
      <p>A recursive function is a function that calls itself to solve a smaller instance of the same problem.</p>
      <h2>Base Case</h2>
      <p>The condition under which the recursion ends.</p>
      <h2>Recursive Case</h2>
      <p>The part of the function where it calls itself with a smaller or simpler input.</p>
      <h2>Examples</h2>
      <p>Common examples include calculating factorials, Fibonacci numbers, and traversing data structures like trees.</p>
    `,
  },
  'regular-expressions': {
    title: 'Regular Expressions',
    content: `
      <p>Regular expressions (regex) are sequences of characters that define a search pattern, mainly for use in pattern matching with strings.</p>
      <h2>Basic Syntax</h2>
      <ul>
        <li><strong>Characters</strong>: Match themselves unless they have special meaning.</li>
        <li><strong>Metacharacters</strong>: Characters with special meanings, like <code>.</code>, <code>*</code>, <code>+</code>, <code>?</code>.</li>
        <li><strong>Character Classes</strong>: Define a set of characters, e.g., <code>[a-z]</code>.</li>
      </ul>
      <h2>Applications</h2>
      <p>Used in search engines, text processing, input validation, and more.</p>
    `,
  },
  'digital-electronics': {
    title: 'Digital Electronics',
    content: `
      <p>Digital electronics involve circuits that operate using digital signals. These circuits are the foundation of modern computers and digital communications.</p>
      <h2>Logic Gates</h2>
      <p>Basic building blocks of digital circuits that perform logical operations like AND, OR, NOT.</p>
      <h2>Flip-Flops</h2>
      <p>Memory elements that can store one bit of data.</p>
      <h2>Microprocessors</h2>
      <p>Integrated circuits that contain the functions of a central processing unit (CPU).</p>
    `,
  },
  'assembly-language': {
    title: 'Assembly Language',
    content: `
      <p>Assembly language is a low-level programming language that is specific to a computer architecture. It uses mnemonic codes to represent machine-level code instructions.</p>
      <h2>Basic Concepts</h2>
      <ul>
        <li><strong>Registers</strong>: Small storage locations in the CPU.</li>
        <li><strong>Instructions</strong>: Commands that tell the CPU what to do.</li>
        <li><strong>Opcode</strong>: The portion of a machine language instruction that specifies the operation to be performed.</li>
      </ul>
      <h2>Usage</h2>
      <p>Used when performance is critical or to directly manipulate hardware.</p>
    `,
  },
  'lisp-programming': {
    title: 'LISP Programming',
    content: `
      <p>LISP is one of the oldest high-level programming languages, known for its fully parenthesized prefix notation and as a functional programming language.</p>
      <h2>Features</h2>
      <ul>
        <li><strong>Code as Data</strong>: Programs can manipulate their own code as data.</li>
        <li><strong>Garbage Collection</strong>: Automatic memory management.</li>
      </ul>
      <h2>Applications</h2>
      <p>Used in artificial intelligence research, symbolic computations, and more.</p>
    `,
  },
  'python-programming': {
    title: 'Python Programming',
    content: `
      <p>Python is a high-level, interpreted programming language known for its readability and versatility.</p>
      <h2>Key Features</h2>
      <ul>
        <li><strong>Simplicity</strong>: Easy-to-read syntax.</li>
        <li><strong>Dynamic Typing</strong>: Variable types are determined at runtime.</li>
        <li><strong>Extensive Libraries</strong>: Rich set of modules and packages.</li>
      </ul>
      <h2>Applications</h2>
      <p>Used in web development, data analysis, artificial intelligence, scientific computing, and more.</p>
    `,
  },
  'sql': {
    title: 'SQL (Structured Query Language)',
    content: `
      <p>SQL is a standard language for accessing and manipulating relational databases.</p>
      <h2>Basic Commands</h2>
      <ul>
        <li><strong>SELECT</strong>: Retrieve data from a database.</li>
        <li><strong>INSERT</strong>: Add new data to a database.</li>
        <li><strong>UPDATE</strong>: Modify existing data.</li>
        <li><strong>DELETE</strong>: Remove data.</li>
      </ul>
      <h2>Joins</h2>
      <p>Combine rows from two or more tables based on a related column.</p>
    `,
  },
  // Add more resources with their content
};

export default function ResourcePage() {
  const router = useRouter();
  const { slug } = router.query;
  const resource = resourceContent[slug];

  if (!resource) {
    return (
      <div>
        <Head>
          <title>Resource Not Found - ACSL Pro</title>
        </Head>
        <Navbar />
        <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4 text-red-600">Resource Not Found</h1>
          <p className="text-lg text-gray-700">The requested resource does not exist.</p>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>{resource.title} - ACSL Pro</title>
      </Head>
      <Navbar />
      <main className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-blue-600">{resource.title}</h1>
        <div
          className="bg-white shadow-lg p-6 rounded-lg max-w-4xl w-full prose"
          dangerouslySetInnerHTML={{ __html: resource.content }}
        ></div>
      </main>
    </div>
  );
}