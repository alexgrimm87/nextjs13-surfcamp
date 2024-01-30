import ArticleHeadline from "@/app/_components/Blog/ArticleHeadline";
import ImageTextComponent from "@/app/_components/Blog/ImageTextComponent";
import ArticleParagraph from "@/app/_components/Blog/ArticleParagraph";

const ArticleComponent = ({ component }) => {
  const componentType = component.__component.split("blog-article.")[1];

  switch (componentType) {
    case "headline":
      return <ArticleHeadline headline={component} />;
    case "paragraph-with-image":
      return <ImageTextComponent component={component} />;
    case "paragraph":
      return <ArticleParagraph paragraph={component} />;
    case "landscape-image":
      return <h1>Landscape Image</h1>;
    default:
      return <h1>Component not found</h1>;
  }
};

export default ArticleComponent;
