import {fetchBlogArticles} from "@/utils/strapi.utils";
import HighlightArticle from "@/app/_components/Blog/HighlightArticle";
import SubscribeToNewsletter from "@/app/_components/Blog/SubscribeToNewsletter";
import FeaturedItems from "@/app/_components/FeaturedItems/FeaturedItems";

export default async function Page() {
  const data = await fetchBlogArticles();
  const highlightArticleData = data.find((article) => article.isHighlightArticle);
  const featuredArticlesData = data.filter((article) => !article.isHighlightArticle);

  return (
    <main className="blog-page">
      <HighlightArticle data={highlightArticleData} />
      <SubscribeToNewsletter />
      <FeaturedItems items={featuredArticlesData} />
    </main>
  );
}
