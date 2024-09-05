export const Header = () => {
  return (
    <div className="flex justify-around w-[1200px] h-[150px] mx-auto">
      <img className="w-[100px] h-[50px] mt-3" src="/header.svg" />
      <div className="flex gap-4 mt-6 justify-center">
        <p>Home</p>
        <p>Blog</p>
        <p>Contact</p>
      </div>
      <div className="flex justify-center h-[30px] items-center container-fit mt-6">
        <input className="w-[170px] h-[30px]" placeholder="Search" />
        <img className="w-[20px] h-[20px]" src="/searchicon.png" />
      </div>
    </div>
  );
};
