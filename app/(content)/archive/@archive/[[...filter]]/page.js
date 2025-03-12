import { Suspense } from "react";

import FilterHeader from "./components/filter-header"
import FilteredNews from "./components/filtered-news";

const FilteredNewsPage = async ({ params }) => {
  const filter = params.filter;
  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading filters...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth}/>
      </Suspense>
      <Suspense fallback={<p>Loading News...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth}/>
      </Suspense>
    </>
  );
};

export default FilteredNewsPage;
