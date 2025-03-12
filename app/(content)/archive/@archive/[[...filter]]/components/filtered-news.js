import NewsList from "@/components/news-list";
import { getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";

const FilteredNews = async ({ year, month }) => {
  let filteredNews;

  if (year && !month) {
    filteredNews = await getNewsForYear(year);
  } else if (year && month) {
    filteredNews = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No news found for the selected filter!</p>;

  if (filteredNews && filteredNews.length > 0) {
    newsContent = <NewsList news={filteredNews} />;
  }

  return newsContent;
};

export default FilteredNews;
