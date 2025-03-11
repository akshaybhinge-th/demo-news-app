// "use client";
import NewsList from "@/components/news-list";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getMonthNameFromNumber,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";

const NewsPerYear = ({ params }) => {
  const filter = params.filter;

  let links = getAvailableNewsYears();
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  let filteredNews;
  if (selectedYear && !selectedMonth) {
    filteredNews = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }
  if (selectedYear && selectedMonth) {
    filteredNews = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = [];
  }

  let newsContent = <p>No news found for the selected filter!</p>;

  if (filteredNews && filteredNews.length > 0) {
    newsContent = <NewsList news={filteredNews} />;
  }

  // error page for invalid year or month is selected
  if (
    (selectedYear && !getAvailableNewsYears().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error("Invalid Filter!");
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const value = getMonthNameFromNumber(link);
            const href = selectedYear
              ? `/archive/${selectedYear}/${link}`
              : `/archive/${link}`;
            return (
              <li key={link}>
                <Link href={href}>{value}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      Archive Page
      {newsContent}
    </header>
  );
};

export default NewsPerYear;
