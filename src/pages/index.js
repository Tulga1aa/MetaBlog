import useSWR from "swr";
import { Card } from "@/components/component/Card";
import { CardDaisy } from "../components/component/CardDaisy";
import { Carousel } from "@/components/component/Carousel";
import { useRouter } from "next/router";
import Link from "next/link";

import { useContext, useState } from "react";
// import { ThemeContext } from "@/components/component/ThemeContext";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const MainPage = () => {
  const router = useRouter();
  const { blogdataId } = router.query;

  const url = "https://dev.to/api/articles";
  const { data: blogdata, error, isLoading } = useSWR(url, fetcher);

  const [selectedBolgindex, setSelectedBolgindex] = useState(0);
  const [selectedTag, setSelectedTag] = useState("");
  const [numberOfTags, setNumberOfTags] = useState(4);
  const [nineBlogs, setNineBlogs] = useState(9);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...sorry error</p>;
  }
  const blogTagsSliced = [];

  blogdata.forEach((blog) => {
    blog.tag_list.forEach((tag) => {
      if (blogTagsSliced.includes(tag)) {
        return;
      }
      blogTagsSliced.push(tag);
    });
  });
  const length = blogTagsSliced.length;
  const blogTags = blogTagsSliced.slice(0, numberOfTags);
  const viewAll = () => {
    setNumberOfTags(length);
  };

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
    if (selectedTag === "") {
      return true;
    }

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
        All
        {blogTags.map((tag) => {
          return <div onClick={() => handleSelectTag(tag)}>{tag}</div>;
        })}
        <button onClick={viewAll} className="flex font-bold">
          View All
        </button>
      </div>
      <div className="max-w-[1200px] grid grid-cols-3 mx-auto">
        {filteredByTagBlogs.map((blog) => {
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

// export default function Page() {
//   const light = useContext(ThemeContext);

//   console.log(light);
//   return (
//     <div>
//       <button onClick={() => setDark("dark")}>summer</button>
//     </div>
//   );
// }
