import useSWR from "swr";
import { Card } from "./projectComponent/Card";
import { Header } from "./projectComponent/Header";

const url = "https://dev.to/api/articles";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const MainPage = () => {
  const { data: blogdata, error, isLoading } = useSWR(url, fetcher);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...oh sorry error</p>;
  }

  return (
    <div>
      <Header />
      <div className="max-w-[1200px] grid grid-cols-3 mx-auto">
        {blogdata.map((blog) => {
          return (
            <Card
              key={blog.id}
              image={blog.cover_image}
              title={blog.title}
              date={blog.published_at}
            />
          );
        })}
      </div>
    </div>
  );
};
export default MainPage;
