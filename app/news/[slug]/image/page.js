import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

const ImagePage = ({ params }) => {
  const imageSlug = params.slug;
  const newsDetails = DUMMY_NEWS.find((news) => news.slug === imageSlug);
  if (!newsDetails) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${newsDetails.image}`} alt={newsDetails.title} />
    </div>
  );
};

export default ImagePage;
