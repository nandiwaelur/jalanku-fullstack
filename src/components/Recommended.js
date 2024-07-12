"use client";
import { useState } from "react";
import axios from "axios";
export default function Recommended({ session }) {
  const [rekomendasi, setRekomendasi] = useState(null);
  const [dataRekomendasi, setDataRekomendasi] = useState([]);
  console.log(rekomendasi);
  const kirimRekomendasi = async (e) => {
    e.preventDefault();
    if (rekomendasi === null || rekomendasi === "") {
      alert("Silahkan isi form dibawah")
    }else{
      const data = { destination_name: rekomendasi };
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/recommend`, data);
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
      <div className="lg:bg-white w-screen lg:w-[190vh] lg:h-full h-[100vh] p-10 lg:rounded-2xl shadow-2xl ">
            <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
              <div className="w-full">
                <input
                  type="text"
                  onChange={(e) => setRekomendasi(e.target.value)}
                  id="default-search"
                  className="w-full p-4 text-sm bg-white rounded-lg shadow-2xl outline outline-[#1EB47D] "
                  placeholder="Mau kemana hari ini?"
                  required
                />
              </div>
              <button onClick={kirimRekomendasi} className="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#1EB47D] text-white">
                Cari Rekomendasi
              </button>
              <button onClick={simpanRekomendasi} className="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-[#1EB47D] text-white">
                Simpan Rekomendasi
              </button>
            </div>
        <div
          className="overflow-y-auto w-full h-full lg:h-[75vh] rounded-3xl [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-white
          [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-[#1EB47D]"
        >
          {/* Rekomendasi */}
          <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-0 lg:gap-10 lg:mt-5">
            {Object.keys(dataRekomendasi).map((key, index) => {
              const recommendation = dataRekomendasi[key];
              return (
                <div
                  className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 lg:w-[50vh] h-[40vh] lg:h-[30vh] mt-2 "
                  key={index}
                >
                  <img
                    src={recommendation.image}
                    alt="gambar rekomendasi"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <h3 className="z-10 mt-3 text-3xl font-bold text-white">
                    {recommendation.destination_name}
                  </h3>
                  <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    Kategori: {recommendation.category}
                  </div>
                  <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    Rating: {recommendation.rating}
                  </div>
                  <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
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
