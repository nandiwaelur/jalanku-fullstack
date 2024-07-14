import React from "react";

export default function SavedRecommendations({ rekomendasiData }) {
  return (
    <>
      <div className="lg:w-[120vh] lg:h-[80vh] bg-white dark:bg-[#2F3645] rounded-xl ml-5">
        <div
          className="overflow-y-auto mt-10 w-full h-full lg:h-[75vh] rounded-3xl [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:rounded-full
              [&::-webkit-scrollbar-track]:bg-white
                [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-[#1EB47D]"
        >
          <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-0 lg:gap-10 ">
            {rekomendasiData.map((rekomendasi, index) => (
              <div key={index}>
                <div className="bg-white rounded-2xl min-h-[220vh]">
                  <h1 className="text-left mx-4 ">{index + 1}</h1>
                  {rekomendasi.recommendations.map(
                    (recommendation, recIndex) => (
                      <div
                        className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 lg:w-[50vh] h-[40vh] lg:h-[30vh] mx-2 mt-2 "
                        key={recIndex}
                      >
                        <img
                          src={recommendation?.image}
                          alt="Gambar Rekomendasi"
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                        <h3 className="z-10 mt-3 text-3xl font-bold text-white">
                          {recommendation?.destinationName}
                        </h3>
                        <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                          Kategori: {recommendation?.category}
                        </div>
                        <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                          Rating: {recommendation?.rating}
                        </div>
                        <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                          Tiket Masuk: Rp.{recommendation?.price}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
