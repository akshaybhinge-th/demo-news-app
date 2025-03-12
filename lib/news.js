import sql from "better-sqlite3";

const db = sql("data.db");

export async function getAllNews() {
  const news = db.prepare("SELECT * FROM news").all();
  await simulateBackendDelay();
  return news;
}

export async function getNewsItem(slug) {
  const newsItem = db.prepare("SELECT * FROM news WHERE slug = ? ").get(slug);
  await simulateBackendDelay();
  return newsItem;
}

export async function getLatestNews() {
  const latestNews = db
    .prepare("SELECT * FROM news Order BY date DESC LIMIT 3")
    .all();
  await simulateBackendDelay();
  return latestNews;
}

export async function getAvailableNewsYears() {
  const years = db
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all()
    .map((year) => year.year);
  await simulateBackendDelay();
  return years;
}

export function getAvailableNewsMonths(year) {
  return db
  .prepare(
    "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
  )
  .all(year)
  .map((month) => month.month);
}

export async function getNewsForYear(year) {
  const newsForYear = db.prepare("SELECT * FROM news WHERE strftime('%Y', date) = ? ").all(year);
  await simulateBackendDelay();
  return newsForYear;
}

export async function getNewsForYearAndMonth(year, month) {
  const news = db.prepare("SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC").all(year, month);
  await simulateBackendDelay();
  return news;
}

export const getMonthNameFromNumber = (month) => {
  if (month > 12) {
    return month;
  }
  return new Date(0, month).toLocaleString("default", { month: "long" });
};

export function simulateBackendDelay(delay = 2000) {
  return new Promise(resolve => setTimeout(resolve,delay));
}