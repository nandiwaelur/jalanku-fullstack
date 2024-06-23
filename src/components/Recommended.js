"use client";
import { useState } from "react";
import axios from "axios";
export default function Recommended() {
  const [rekomendasi, setRekomendasi] = useState(null);
  const [dataRekomendasi, setDataRekomendasi] = useState([]);
  console.log(dataRekomendasi);
  const kirimRekomendasi = async (e) => {
    e.preventDefault();
    if (!rekomendasi) {
      handleOpen();
    } else {
      const data = { destination_name: rekomendasi };
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BACKEND}/recommend`,
          data
        );
        setDataRekomendasi(response.data);
      } catch (error) {
        console.log("error!");
      }
    }
  };
  return (
    <>
      <div className="lg:bg-white w-screen lg:w-[190vh] mt-5 lg:h-[90vh] p-10 lg:rounded-2xl shadow-2xl ">
        <div className="flex">
          <form className="w-[50vh] mx-auto" onSubmit={kirimRekomendasi}>
            <div className="relative">
              <input
                type="text"
                onChange={(e) => setRekomendasi(e.target.value)}
                id="default-search"
                className="block w-full p-4 ps-10 text-sm bg-white rounded-3xl shadow-2xl outline outline-lime-700"
                placeholder="Mau kemana hari ini?"
                required
              />
              <button
                type="submit"
                className="cursor-pointer text-white absolute end-2.5 bottom-2.5 bg-green-500 font-medium rounded-full text-sm px-4 py-2"
              >
                Rekomendasi!
              </button>
            </div>
          </form>
        </div>
        <div className="overflow-y-auto w-full h-full lg:h-[75vh] rounded-3xl">
          {/* Rekomendasi */}
          <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-0 lg:gap-10 ">
            {Object.keys(dataRekomendasi).map((key, index) => {
              const recommendation = dataRekomendasi[key];
              return (
                <div class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 lg:w-[50vh] h-[75vh] lg:h-[30vh] mt-24" key={index}>
                  <img
                    src={recommendation.image}
                    alt="gambar rekomendasi"
                    class="absolute inset-0 h-full w-full object-cover"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <h3 class="z-10 mt-3 text-3xl font-bold text-white">{recommendation.destination_name}</h3>
                  <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  Kategori: {recommendation.category}
                  </div>
                  <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  Rating: {recommendation.rating}
                  </div>
                  <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  Tiket Masuk: Rp.{recommendation.price}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
