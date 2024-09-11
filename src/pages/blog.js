import useSWR from "swr";
import { Card } from "@/components/component/Card";
import { CardDaisy } from "../components/component/CardDaisy";
import { Carousel } from "@/components/component/Carousel";
import { useRouter } from "next/router";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const MainPage = () => {
  const router = useRouter();

  const url = "https://dev.to/api/articles";
  const { data: blogdata, error, isLoading } = useSWR(url, fetcher);

  const [selectedBolgindex, setSelectedBolgindex] = useState(0);
  const [selectedTag, setSelectedTag] = useState("");

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...sorry error</p>;
  }
  const blogTags = [];

  blogdata.forEach((blog) => {
    blog.tag_list.forEach((tag) => {
      if (blogTags.includes(tag)) {
        return;
      }
      blogTags.push(tag);
    });
  });

  const carouselBlogs = [...blogdata].slice(0, 4);
  const carouselBlogsLastIndex = carouselBlogs.length - 1; // hamgin suulin blogin index

  const selectedBlog = carouselBlogs[selectedBolgindex];

  const handleNextCarousel = () => {
    if (selectedBolgindex === carouselBlogsLastIndex) {
      setSelectedBolgindex(0);
      return;
    }
    setSelectedBolgindex((prevSelectedBolgindex) => prevSelectedBolgindex + 1);
  };
  const handlePrevCarousel = () => {
    if (selectedBolgindex === 0) {
      setSelectedBolgindex(carouselBlogsLastIndex);
      return;
    }
    setSelectedBolgindex((prevSelectedBolgindex) => prevSelectedBolgindex - 1);
  };

  const handleSelectTag = (tag) => {
    setSelectedTag(tag);
  };

  const filteredByTagBlogs = [...blogdata].filter((blog) => {
    if (blog.tag_list.includes(selectedTag)) {
      return true;
    } else {
      return false;
    }
  });

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="w-[1200px] h-[600px]">
        <Carousel
          id={selectedBlog.id}
          key={selectedBlog.id}
          image={selectedBlog.cover_image}
          title={selectedBlog.title}
          date={selectedBlog.published_at}
          handleNext={handleNextCarousel}
          handlePrev={handlePrevCarousel}
        />
      </div>
      <div className="font-bold w-[1200px] mx-auto mb-8 mt-12 text-2xl">
        Trending
      </div>
      <div className="flex gap-[10px]">
        {carouselBlogs.map((card) => {
          return (
            <CardDaisy
              key={card.id}
              image={card.cover_image}
              title={card.title}
              date={card.published_at}
            />
          );
        })}
      </div>
      <div className="font-bold w-[1200px] mx-auto mb-10 mt-10 text-2xl">
        All Blog Post
      </div>
      <div className="flex flex-wrap gap-2 container font-bold mx-auto">
        {filteredByTagBlogs.map((tag) => {
          return <div onClick={() => handleSelectTag(tag)}>{tag}</div>;
        })}

        <button className="flex font-bold">View All</button>
      </div>
      <div className="max-w-[1200px] grid grid-cols-3 mx-auto">
        {blogdata.map((blog) => {
          return (
            <Card
              image={blog.cover_image}
              title={blog.title}
              date={blog.published_at}
              tags={blog.tags}
            />
          );
        })}
        <Card />
      </div>
      <div className="flex justify-center ">
        <button className="bg-white border-2 w-[120px] h-[48px]">
          LoadMore
        </button>
      </div>
    </div>
  );
};
export default MainPage;
