// import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import { notFound } from "next/navigation";

const NewsDetails = (props) => {
  const { slug } = props.params;
  const newsDetails = DUMMY_NEWS.find((news) => news.slug === slug);
  if (!newsDetails) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${slug}/image`}>
          <img
            src={`/images/news/${newsDetails.image}`}
            alt={newsDetails.title}
          />
        </Link>
        <h1>{newsDetails.title}</h1>
        <time dateTime={newsDetails.date}>{newsDetails.date}</time>
      </header>
      <p>{newsDetails.content}</p>
    </article>
  );
};

export default NewsDetails;
