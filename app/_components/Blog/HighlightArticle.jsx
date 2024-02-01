import Link from "next/link";
import ReactMarkdown from "react-markdown";

const HighlightArticle = ({ data }) => {
  const { headline, excerpt, slug, featuredImage } = data;

  return (
    <article className="highlight-article">
      <div className="highlight-article__info">
        <h3>{headline}</h3>
        <ReactMarkdown className="copy">{excerpt}</ReactMarkdown>
        <Link className="btn btn--turquoise btn--medium" href={`/blog/${slug}`}>
          Read more
        </Link>
      </div>
      <img className="highlight-article__image" src={featuredImage} alt="" />
    </article>
  );
};

export default HighlightArticle;
