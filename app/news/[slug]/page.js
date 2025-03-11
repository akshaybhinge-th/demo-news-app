import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound } from "next/navigation";

const NewsDetails = (props) => {
  const { slug } = props.params;
  const newsDetails = DUMMY_NEWS.find((news) => news.slug === slug);
  console.log("NewsDetails -> newsDetails", newsDetails);
  if (!newsDetails) {
    notFound();
    return;
  }

  return (
    // <div className="">
    //   <div>
    //     <Image
    //       src={"/images/news/" + newsDetails.image}
    //       alt={newsDetails.title}
    //       width={600}
    //       height={600}
    //     />
    //     <h2>{newsDetails.title}</h2>
    //   </div>
    //   <div>
    //     <time dateTime={newsDetails.date}>{newsDetails.date}</time>
    //     <p>{newsDetails.content}</p>
    //   </div>
    // </div>
    <article className="news-article">
      <header>
        <img
          src={`/images/news/${newsDetails.image}`}
          alt={newsDetails.title}
        />
        <h1>{newsDetails.title}</h1>
        <time dateTime={newsDetails.date}>{newsDetails.date}</time>
      </header>
      <p>{newsDetails.content}</p>
    </article>
  );
};

export default NewsDetails;
