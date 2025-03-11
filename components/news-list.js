import Link from "next/link";
import Image from "next/image";

const NewsList = ({ news }) => {
  return (
    <ul className="news-list">
      {news.map((news) => (
        <li key={news.id}>
          <Link href={`/news/${news.slug}`}>
            {/* <Image
              src={`/images/news/${news.image}`}
              alt={news.title}
              width={200}
              height={200}
            /> */}
            <img src={`/images/news/${news.image}`} alt={news.title} width={200} height={200} />
            <span>{news.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
