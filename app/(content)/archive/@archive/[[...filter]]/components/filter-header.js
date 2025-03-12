import { getAvailableNewsMonths, getAvailableNewsYears, getMonthNameFromNumber } from "@/lib/news";
import Link from "next/link";


const FilterHeader = async ({ year, month }) => {
  let links;
  const availableYears = await getAvailableNewsYears();
  links = [...availableYears];
  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }
  if (year && month) {
    links = [];
  }

  // error page for invalid year or month is selected
  if (
    (year && !availableYears.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error("Invalid Filter!");
  }

  return (
    <header id="archive-header">
      <nav>
        <ul id="archive-filter">
          {links?.map((link) => {
            const value = getMonthNameFromNumber(link);
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;
            return (
              <li key={link}>
                <Link href={href}>{value}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default FilterHeader;
