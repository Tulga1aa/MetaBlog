import { useState } from "react";
import { FaStar } from "react-icons/fa";

const stars = [1, 2, 3, 4, 5];

const Airbnb = () => {
  const [rating, setRating] = useState(0);
  const starColor = rating === 1 ? "#eba134" : "#babab8";
  const handleChangeColor = () => {};
  return (
    <div className="w-[960px] h-[400px] m-auto mt-80 bg-gray-300 rounded-2xl  justify-center">
      <div>
        <p className="text-8xl font-extrabold justify-center">
          How was your stay?
        </p>
      </div>
      <div className="mt-40 ml-16">
        <div className="flex justify-center">
          <div className="">
            <FaStar className="size-28" color="#eba134" />
            <p className="ml-[29px]  ">Terrible</p>
          </div>{" "}
          <div className="">
            <FaStar className="size-28" color="#eba134" />
            <p className="ml-[29px]  ">Terrible</p>
          </div>{" "}
          <div className="">
            <FaStar className="size-28" color="#eba134" />
            <p className="ml-[29px]  ">Terrible</p>
          </div>{" "}
          <div className="">
            <FaStar className="size-28" color="#eba134" />
            <p className="ml-[29px]  ">Terrible</p>
          </div>{" "}
          <div className="">
            <FaStar className="size-28" color="#babab8" />
            <p className="ml-[29px]  ">Terrible</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Airbnb;
