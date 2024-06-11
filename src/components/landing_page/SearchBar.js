import React from 'react'

function SearchBar() {
  return (
    <>
    <div class="max-w-[200vh] max-h-[8vh] flex items-center justify-center">
              <form class="w-full h-full  bg-[#ffffff] flex items-center rounded-full p-10 relative">
                <svg
                  class="svg-icon absolute left-1  search-icon w-[30px] ml-[20px]"
                  aria-labelledby="title desc"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19.9 19.7"
                >
                  <title id="title">Search Icon</title>
                  <desc id="desc">A magnifying glass icon.</desc>
                  <g class="search-path" fill="none" stroke="#848F91">
                    <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
                    <circle cx="8" cy="8" r="7" />
                  </g>
                </svg>
                <input
                  type="text"
                  class="ml-5 bg-transparent flex border-none outline-none  text-[20px] text-[#cac7ff]"
                  placeholder="Mau liburan kemana minggu ini?"
                />
                <button
                  class="absolute font-bold bg-[#1eb47d] px-5 py-3 text-xl text-[#ffffff] cursor-pointer rounded-full right-1 mr-5"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
    </>
  )
}

export default SearchBar;