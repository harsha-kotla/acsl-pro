import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css'; // Import KaTeX styles

export default function RenderLaTeX({ content }) {
  return (
    <ReactMarkdown
      children={content} // Pass the LaTeX content
      remarkPlugins={[remarkMath]} // Enable math parsing
      rehypePlugins={[rehypeKatex]} // Render LaTeX using KaTeX
      components={{
        math: ({ value }) => <div className="math-block">{value}</div>, // Block math
        inlineMath: ({ value }) => <span className="inline-math">{value}</span>, // Inline math
      }}
    />
  );
}