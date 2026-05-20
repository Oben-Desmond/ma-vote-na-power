export default function ArticleContent({ blocks }) {
  return (
    <article className="prose prose-sm max-w-none">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return <h2 key={i} className="text-xl font-black text-gray-900 mt-10 mb-3">{block.text}</h2>;
          case "h3":
            return <h3 key={i} className="text-lg font-bold text-gray-900 mt-6 mb-2">{block.text}</h3>;
          case "p":
            return <p key={i} className="text-gray-700 text-sm leading-relaxed mb-4">{block.text}</p>;
          case "ul":
            return (
              <ul key={i} className="list-disc pl-5 text-gray-700 text-sm space-y-2 mb-4">
                {block.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="list-decimal pl-5 text-gray-700 text-sm space-y-2 mb-4">
                {block.items.map((item) => <li key={item}>{item}</li>)}
              </ol>
            );
          case "img":
            return (
              <figure key={i} className="my-6 rounded-xl overflow-hidden">
                <img src={block.src} alt={block.alt || ""} className="w-full h-40 sm:h-48 md:h-56 object-cover" />
              </figure>
            );
          case "callout":
            return (
              <div key={i} className="bg-blue-50 border-l-4 border-blue-600 px-4 py-3 mb-4 text-sm text-gray-800 leading-relaxed">
                {block.text}
              </div>
            );
          default:
            return null;
        }
      })}
    </article>
  );
}
