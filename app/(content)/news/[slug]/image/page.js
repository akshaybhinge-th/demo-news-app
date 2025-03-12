import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

const ImagePage = async ({ params }) => {
  const imageSlug = params.slug;
  const newsDetails = await getNewsItem(imageSlug);
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
