"use client";
import { useState } from "react";
import axios from "axios";
import ShowRecommend from "./ShowRecommend";
export default function Recommended({ session }) {
  const [rekomendasi, setRekomendasi] = useState("");
  const [dataRekomendasi, setDataRekomendasi] = useState([]);

  const kirimRekomendasi = async (e) => {
    if (rekomendasi === null || rekomendasi === "") {
      alert("Silahkan isi tujuan anda dibawah");
    } else {
      const data = { destination_name: rekomendasi };
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BACKEND}/recommend`,
          data
        );
        setDataRekomendasi(response.data);
      } catch (error) {
        alert("Tidak bisa mendapatkan rekomendasi!");
      }
    }
  };
  const simpanRekomendasi = async (e) => {
    const data = {
      userID: session.user.id,
      recommendation_saved: JSON.stringify(dataRekomendasi),
    };
    if (dataRekomendasi.length === 0 || rekomendasi === "") {
      alert("Tidak ada rekomendasi yang bisa disimpan!");
    } else {
      try {
        await axios.post("/api/recommends", data);
        alert("Rekomendasi berhasil disimpan!");
      } catch (error) {
        alert("Rekomendasi tidak berhasil disimpan!");
      }
    }
  };
  return (
    <>
      <div className="lg:w-screen lg:h-screen ">
        <div className="flex justify-center gap-2 mt-10 ">
          <div className="flex rounded-lg shadow-sm">
            <input
              type="text"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  kirimRekomendasi();
                }
              }}
              onChange={(e) => setRekomendasi(e.target.value)}
              className="w-[45vh] lg:w-[80vh] p-4  bg-white dark:bg-[#2F3645] dark:text-white dark:placeholder:text-white py-3 px-4 shadow-sm rounded-s-lg text-sm outline-none"
              placeholder="Mau kemana hari ini?"
              required
            />
            <div className="hs-tooltip inline-block">
              <button
                type="button"
                onClick={kirimRekomendasi}
                className="w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold  border border-transparent bg-[#1EB47D] text-white disabled:opacity-50 disabled:pointer-events-none hs-tooltip-toggle border-r-white border-l-white dark:border-[#2F3645] "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 dark:stroke-[#2F3645]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
              <span
                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-white"
                role="tooltip"
              >
                Cari Rekomendasi
              </span>
            </div>
            <button
              type="button"
              onClick={simpanRekomendasi}
              className="w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-[#1EB47D] text-white disabled:opacity-50 disabled:pointer-events-none dark:border-[#2F3645] "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 dark:stroke-[#2F3645]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <ShowRecommend dataRekomendasi={dataRekomendasi} />
      </div>
    </>
  );
}
