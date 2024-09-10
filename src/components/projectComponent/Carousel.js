import Link from "next/link";
import moment from "moment";

export const Carousel = (props) => {
  const { id, image, title, date, handleNext, handlePrev } = props;

  const formattedDate = moment(date).format("LL");

  return (
    <div className="carousel-item relative">
      <Link href={`blog/${id}`}>
        <img className="w-[1200px] h-[600px]" src={image} />
      </Link>
      <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 transform justify-between">
        <p className="btn btn-circle" onClick={handlePrev}>
          ❮
        </p>
        <p className="btn btn-circle" onClick={handleNext}>
          ❯
        </p>
      </div>

      <div className="w-[500px] h-[200px] absolute p-[40px] bg-white rounded-2xl ml-[20px] mt-[380px]">
        <p className="flex items-center justify-center w-[90px] h-[30px] text-sm bg-blue-600 rounded-md text-white">
          Technology
        </p>
        <h4 className="text-3xl mt-[13px]">{title}</h4>
        <p className="text-slate-400 mt-[px]">{formattedDate}</p>
      </div>
    </div>
  );
};
