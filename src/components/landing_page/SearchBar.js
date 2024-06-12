
import { Typography } from "@material-tailwind/react";
function SearchBar() {
  return (
    <>
      <div className="lg:max-w-[200vh] lg:max-h-[8vh] flex items-center justify-center">
        <form className="w-[400px] h-[20px] lg:w-full lg:h-full bg-[#ffffff] flex items-center rounded-full p-10 relative">
          <svg
            className="svg-icon absolute left-1 search-icon w-[30px] ml-[20px]"
            aria-labelledby="title desc"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 19.9 19.7"
          >
            <title id="title">Search Icon</title>
            <desc id="desc">A magnifying glass icon.</desc>
            <g className="search-path" fill="none" stroke="#848F91">
              <path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4" />
              <circle cx="8" cy="8" r="7" />
            </g>
          </svg>
          <input
            type="text"
            className="ml-5 bg-transparent flex border-none outline-none  text-[20px] text-[#cac7ff]"
            placeholder="Mau liburan kemana minggu ini?"
          />
          <button
            className="absolute font-bold bg-[#1eb47d] px-7 py-4 lg:text-[25px] text-[#ffffff] cursor-pointer rounded-full right-1 mr-1"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      <Typography
              variant="h6"
              color="white"
              className=" font-semibold mt-4 ml-6"
            >
              Powered by AI
            </Typography>
    </>
  );
}

export default SearchBar;
