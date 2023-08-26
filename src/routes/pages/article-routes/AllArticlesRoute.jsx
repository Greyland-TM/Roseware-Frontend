import { useEffect, useState } from "react";
import PageHeader from "../../../components/UI/PageHeader";
import AllArticles from "../../../components/page-components/articles/AllArticles";

const JournalRoute = () => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    const backend_url = import.meta.env.VITE_BACKEND_URL || 'http://127.0.0.1:8000'
    const response = await fetch(`${backend_url}/marketing-manager/blog-articles`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    if (data.ok) {
      const blogArticles = data.blog_articles;
      setArticles(blogArticles); // set the state of articles here
    } else {
      setArticles([]); // set the state of articles to an empty array if there's an error
    }
  };

  useEffect(() => {
    fetchArticles(); // call the fetchArticles function directly
  }, []);

  return (
    <div>
      <PageHeader title="Articles"/>
      <AllArticles articles={articles}/>
    </div>
  );
};

export default JournalRoute;