"use client";

import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";

const ImagePage = ({ params }) => {
  const router  = useRouter();
  
  const imageSlug = params.slug;
  const newsDetails = DUMMY_NEWS.find((news) => news.slug === imageSlug);
  if (!newsDetails) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={() => router.back()}/>
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img
            src={`/images/news/${newsDetails.image}`}
            alt={newsDetails.title}
          />
        </div>
      </dialog>
    </>
  );
};

export default ImagePage;
