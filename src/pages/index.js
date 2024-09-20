import React, { useState } from "react";
import useSWR from "swr";
import { Card } from "@/components/component/Card";
import { CardDaisy } from "../components/component/CardDaisy";
import { Carousel } from "@/components/component/Carousel";
import Link from "next/link";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const MainPage = () => {
  const url = "https://dev.to/api/articles";
  const { data: blogdata, error, isLoading } = useSWR(url, fetcher);

  const [selectedBlogIndex, setSelectedBlogIndex] = useState(0);
  const [selectedTag, setSelectedTag] = useState("");
  const [numberOfTags, setNumberOfTags] = useState(4);
  const [viewBlogsCount, setViewBlogsCount] = useState(9);

  if (isLoading) {
    return <p>...loading</p>;
  }

  if (error) {
    return <p>...sorry, there was an error</p>;
  }

  const blogTagsSliced = [];
  blogdata.forEach((blog) => {
    blog.tag_list.forEach((tag) => {
      if (!blogTagsSliced.includes(tag)) {
        blogTagsSliced.push(tag);
      }
    });
  });

  const length = blogTagsSliced.length;
  const blogTags = blogTagsSliced.slice(0, numberOfTags);

  const viewAll = () => {
    setNumberOfTags((prev) => (prev > 4 ? 4 : length));
  };

  const carouselBlogs = [...blogdata].slice(0, 4);
  const carouselBlogsLastIndex = carouselBlogs.length - 1;
  const selectedBlog = carouselBlogs[selectedBlogIndex];

  const handleNextCarousel = () => {
    setSelectedBlogIndex((prevIndex) =>
      prevIndex === carouselBlogsLastIndex ? 0 : prevIndex + 1
    );
  };

  const handlePrevCarousel = () => {
    setSelectedBlogIndex((prevIndex) =>
      prevIndex === 0 ? carouselBlogsLastIndex : prevIndex - 1
    );
  };

  const handleSelectTag = (tag) => {
    setSelectedTag(tag);
  };

  const filteredByTagBlogs = [...blogdata].filter((blog) =>
    selectedTag === "" ? true : blog.tag_list.includes(selectedTag)
  );

  const slicedblogs = filteredByTagBlogs.slice(0, viewBlogsCount);

  const loadMore = () => {
    setViewBlogsCount((prev) => prev + 3); // Adjust increment value if needed
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="w-[1200px] h-[600px]">
        {selectedBlog && (
          <Link key={selectedBlog.id} href={`/blog/${selectedBlog.id}`}>
            <Carousel
              id={selectedBlog.id}
              key={selectedBlog.id}
              image={selectedBlog.cover_image}
              title={selectedBlog.title}
              date={selectedBlog.published_at}
              handleNext={handleNextCarousel}
              handlePrev={handlePrevCarousel}
            />
          </Link>
        )}
      </div>
      <div className="font-bold w-[1200px] mx-auto mb-8 mt-12 text-2xl">
        Trending
      </div>
      <div className="flex gap-[10px]">
        {carouselBlogs.map((card) => (
          <Link key={card.id} href={`/blog/${card.id}`}>
            <CardDaisy
              image={card.cover_image}
              title={card.title}
              date={card.published_at}
            />
          </Link>
        ))}
      </div>
      <div className="font-bold w-[1200px] mx-auto mb-10 mt-10 text-2xl">
        All Blog Posts
      </div>
      <div className="flex flex-wrap gap-2 container font-bold mx-auto">
        <p onClick={viewAll}>All</p>
        {blogTags.map((tag) => (
          <div key={tag} onClick={() => handleSelectTag(tag)}>
            {tag}
          </div>
        ))}
        <button onClick={viewAll} className="flex font-bold">
          View All
        </button>
      </div>
      <div className="max-w-[1200px] grid grid-cols-3 mx-auto">
        {slicedblogs.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.id}`}>
            <Card
              key={blog.id}
              image={blog.cover_image}
              title={blog.title}
              date={blog.published_at}
              tags={blog.tag_list} // Assuming blog.tags should be blog.tag_list
            />
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={loadMore}
          className="bg-white border-2 w-[120px] h-[48px]"
        >
          Load More
        </button>
      </div>
    </div>
  );
};
export default MainPage;

// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// const Mybutton = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(count);
//   }, [count]);

//   return (
//     <div>
//       <button onClick={() => setCount((count) => count + 1)}>
//         You clicked{count} times!
//       </button>
//     </div>
//   );
// };

// export default Mybutton;
