export const Header = () => {
  return (
    <div className="flex justify-around w-[1200px] h-[150px]">
      <img className="w-[100px] h-[50px]" src="/header.svg" />
      <p>Home</p>
      <p>Blog</p>
      <p>Contact</p>
      <div className="flex justify-center h-[30px] items-center container-fit ">
        <input className="w-[170px] h-[30px]" placeholder="Search" />
        <img className="w-[20px] h-[20px]" src="/searchicon.png" />
      </div>
    </div>
  );
};
