import { useEffect, useState } from "react";
import Article from '../../../components/page-components/articles/Article';

export default function ArticleRoute() {
  const [article, setArticle] = useState([]);

  const fetchArticles = async () => {
    const backend_url = import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:8000'
    const pathname = window.location.pathname;
    const article_pk = pathname.split('/')["2"];
    const response = await fetch(`${backend_url}/marketing-manager/blog-articles?article_pk=${article_pk}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (data.ok) {
      const blogArticle = data.blog_article;
      setArticle(blogArticle); // set the state of articles here
    } else {
      setArticle([]); // set the state of articles to an empty array if there's an error
    }
  };

  useEffect(() => {
    fetchArticles(); // call the fetchArticles function directly
  }, []); 

  return(
    <div className="">
      <Article article={article}/>
    </div>
  )
}