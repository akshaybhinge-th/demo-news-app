import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

const LatestPage = () => {
  const latestNews = getLatestNews();
  return (
    <>
      <h1>Latest News</h1>
      <NewsList news={latestNews} />
    </>
  );
};

export default LatestPage;
