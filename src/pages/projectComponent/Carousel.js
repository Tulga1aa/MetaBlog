export const Carousel = (props) => {
  const { image, title, date, index } = props;
  return (
    <div id={index} className="carousel-item relative ">
      <img className="w-[1200px] h-[600px]" src={image} />
      <div className="absolute left-4 right-4 top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href={index} className="btn btn-circle">
          ❮
        </a>
        <a href={index} className="btn btn-circle">
          ❯
        </a>
      </div>
      {/* <button className="btn btn-primary relative mt-[440px] ml-[15px]">
        Technology
      </button> */}
      <div className="w-[500px] h-[200px] absolute p-[40px] bg-white rounded-2xl ml-[20px] mt-[380px]">
        <p className="flex items-center justify-center w-[90px] h-[30px] text-sm bg-blue-600 rounded-md text-white">
          Technology
        </p>
        <h4 className="text-3xl mt-[13px]">{title}</h4>
        <p className="text-slate-400 mt-[px]">{date}</p>
      </div>
    </div>
  );
};

<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      className="w-full"
    />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">
        ❮
      </a>
      <a href="#slide2" className="btn btn-circle">
        ❯
      </a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full"
    />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">
        ❮
      </a>
      <a href="#slide3" className="btn btn-circle">
        ❯
      </a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full"
    />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">
        ❮
      </a>
      <a href="#slide4" className="btn btn-circle">
        ❯
      </a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full"
    />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">
        ❮
      </a>
      <a href="#slide1" className="btn btn-circle">
        ❯
      </a>
    </div>
  </div>
</div>;
