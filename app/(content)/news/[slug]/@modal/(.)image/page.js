import { notFound } from "next/navigation";
import { getNewsItem } from "@/lib/news";
import ModalBackdrop from "@/components/modal-backdrop";

const InterceptedImagePage = async ({ params }) => {
  const imageSlug = params.slug;
  const newsDetails = await getNewsItem(imageSlug);
  if (!newsDetails) {
    notFound();
  }

  return (
    <>
      <ModalBackdrop />
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

export default InterceptedImagePage;
