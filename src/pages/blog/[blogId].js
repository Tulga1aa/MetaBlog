import { useRouter } from "next/router";
import useSWR from "swr";
import parse from "html-react-parser";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const BlogPage = () => {
  const router = useRouter();
  const { blogId } = router.query;

  const url = `https://dev.to/api/articles/${blogId}`;
  const { data: blog, error, isLoading } = useSWR(url, fetcher);

  if (error) {
    return <div>error</div>;
  }

  if (isLoading) {
    return <div>loading</div>;
  }

  const body_html = blog?.body_html;
  return (
    <div className="container max-w-[1000px] mx-auto">{parse(body_html)}</div>
  );
};

export default BlogPage;
