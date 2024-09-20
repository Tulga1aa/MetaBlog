import { useEffect, useState } from "react";

const url = `https://api.giphy.com/v1/gifs/trending?api_key=QPX2V1qnPNhQPS641OGxj8iOvadhGUVE&limit=25&offset=0&rating=g&bundle=messaging_non_clips`;

const Page = () => {
  const [gifs, setGifs] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const getGifs = async () => {
      const respose = await fetch(url);
      const { data } = await respose.json();

      setGifs(data);
    };

    getGifs();
  }, []);

  const onSubmit = async () => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=QPX2V1qnPNhQPS641OGxj8iOvadhGUVE&q=${searchValue}&limit=15&offset=0&rating=g`
    );
    const { data } = await response.json();

    setGifs(data);
  };

  return (
    <div>
      <h1>Page</h1>
      <input
        className="py-2 px-4 bg-blue-200 "
        type="text"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button
        className="border border-r-green-500 bg-green-500 h-[38px] w-[78px] rounded-2xl"
        onClick={onSubmit}
      >
        search
      </button>
      <div className="grid grid-cols-3">
        {gifs.map((gif) => {
          return (
            <img key={gif.id} src={gif.images.fixed_height.url} alt="gif" />
          );
        })}
      </div>
    </div>
  );
};

export default Page;
