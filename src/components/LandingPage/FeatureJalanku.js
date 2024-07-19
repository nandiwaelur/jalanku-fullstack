import { Sparkles,Banknote,CheckCheckIcon,Map } from "lucide-react";
export default function Service() {
  return (
    <>
      <div className="max-w-[100rem]  px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-10">
          <div className="h-[15rem] flex flex-col justify-center bg-[#2F3645] dark:bg-white  rounded-xl p-4 md:p-7 shadow-[10px_10px_5px_0px_rgba(0,0,0,0.75)]">
            <div className="flex justify-center items-center size-12 bg-[#34E0A1] rounded-xl">
              <Sparkles />
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-white dark:text-black">
                Rekomendasi Wisata yang diperkasai oleh Kecerdasan Buatan!!
              </h3>
              <p className="mt-1 text-white dark:text-black">
                AI merekomendasikan perjalanan liburan anda
              </p>
            </div>
          </div>
          <div className="h-[15rem]  flex flex-col justify-center bg-[#2F3645] dark:bg-white  rounded-xl p-4 md:p-7 shadow-[10px_10px_5px_0px_rgba(0,0,0,0.75)]">
            <div className="flex justify-center items-center size-12 bg-[#34E0A1] rounded-xl">
            <Banknote />
            </div>
            <div className="mt-5">
              <h3 className=" text-lg font-semibold text-white dark:text-black">
              Hemat waktu dan tenaga
              </h3>
              <p className="mt-1 text-white dark:text-black">
              Dengan Jalanku, Anda tidak perlu ribet dalam merencanakan liburan yang telah anda tunggu-tunggu.
              </p>
            </div>
          </div>
          <div className="h-[15rem] flex flex-col justify-center bg-[#2F3645] dark:bg-white  rounded-xl p-4 md:p-7 shadow-[10px_10px_5px_0px_rgba(0,0,0,0.75)]">
            <div className="flex justify-center items-center size-12 bg-[#34E0A1] rounded-xl">
            <CheckCheckIcon />
            </div>
            <div className="mt-5">
              <h3 className=" text-lg font-semibold text-white dark:text-black">
              Praktis dan Sederhana
              </h3>
              <p className="mt-1 text-white dark:text-black">
              Dapatkan hasil pencarian dalam bentuk ringkas, mempercepat keputusan dalam rencana berlibur Anda.
              </p>
            </div>
          </div>
          <div className="h-[15rem] flex flex-col justify-center bg-[#2F3645] dark:bg-white  rounded-xl p-4 md:p-7 shadow-[10px_10px_5px_0px_rgba(0,0,0,0.75)]">
            <div className="flex justify-center items-center size-12 bg-[#34E0A1] rounded-xl">
            <Map />
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-white dark:text-black">
                Temukan dan jelajahi tempat wisata
              </h3>
              <p className="mt-1 text-white dark:text-black">
              Jelajahi tempat baru dan unik yang ditemukan oleh Kecerdasan Buatan.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
