import Link from "next/link";
import moment from "moment";

export const Card = (props) => {
  const { image, title, date, tags } = props;
  const formattedDate = moment(date).format("LL");

  return (
    // <Link href={`blog/${blog.id}`} key={blog.id}>
    <div className="px-4 py-2 border border-solid rounded w-fit">
      <img width={300} src={image} alt={title} />
      <h2>{title}</h2>
      <p>{formattedDate}</p>
      <p>{tags}</p>
    </div>
    //{" "}
    // </Link>
  );
};
