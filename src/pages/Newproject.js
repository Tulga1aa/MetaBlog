import useSWR from "swr";
import { Card } from "./projectComponent/Card";
import { Header } from "./projectComponent/Header";
import { CardDaisy } from "./projectComponent/CardDaisy";
import { Carousel } from "./projectComponent/Carousel";
import { Footer } from "./projectComponent/Footer";
import { useRouter } from "next/router";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const MainPage = () => {
  const router = useRouter();

  const url = "https://dev.to/api/articles";
  const { data: blogdata, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...sorry error</p>;
  }

  return (
    <div className="max-w-[1200px] mx-auto">
      <Header />
      <div className="carousel w-[1200px] h-[600px]">
        {blogdata.map((sel, index) => {
          return (
            <Carousel
              index={index}
              key={sel.id}
              image={sel.cover_image}
              title={sel.title}
              date={sel.published_at}
            />
          );
        })}
      </div>
      <div className="font-bold w-[1200px] mx-auto mb-8 mt-12 text-2xl">
        Trending
      </div>
      <div className="flex gap-[10px]">
        {blogdata.map((card, index) => {
          if (index < 4) {
            return (
              <CardDaisy
                key={card.id}
                image={card.cover_image}
                title={card.title}
                date={card.published_at}
              />
            );
          }
        })}
      </div>
      <div className="font-bold w-[1200px] mx-auto mb-10 mt-10 text-2xl">
        All Blog Post
      </div>
      <div className="max-w-[1200px] grid grid-cols-3 mx-auto">
        {blogdata.map((blog) => {
          return (
            <Link href={`blog/${blog.id}`} key={blog.id}>
              <Card
                image={blog.cover_image}
                title={blog.title}
                date={blog.published_at}
              />
            </Link>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export default MainPage;
