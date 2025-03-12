import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

const NewsPage = async () => {
  // get news by using backend server
  // const response = await fetch('http://localhost:8080/news');
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // if(!response.ok) {
  //   throw new Error('Something went wrong while fetching news!');
  // }
  // const news = await response.json();
  const news = await getAllNews();
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
};

export default NewsPage;
