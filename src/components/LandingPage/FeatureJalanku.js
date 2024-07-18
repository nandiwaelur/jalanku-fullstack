import { Sparkles,Banknote } from "lucide-react";
export default function Service() {
  return (
    <>
      <div className="max-w-[100rem]  px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-10">
          <div className="max-h-[100rem] group flex flex-col justify-center bg-[#2F3645] dark:bg-white hover:bg-gray-50 rounded-xl p-4 md:p-7">
            <div className="flex justify-center items-center size-12 bg-[#34E0A1] rounded-xl">
              <Sparkles />
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800">
                Rekomendasi Wisata yang ditenagai oleh AI!
              </h3>
              <p className="mt-1 text-black">
                AI merekomendasikan perjalanan liburan anda
              </p>
            </div>
          </div>
          <div className="group flex flex-col justify-center bg-[#2F3645] dark:bg-white hover:bg-gray-50 rounded-xl p-4 md:p-7">
            <div className="flex justify-center items-center size-12 bg-[#34E0A1] rounded-xl">
            <Banknote />
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800">
                Hemat Uang dengan rekomendasi wisata 
              </h3>
              <p className="mt-1 text-black">
                AI merekomendasikan perjalanan liburan anda
              </p>
            </div>
          </div>
          <div className="group flex flex-col justify-center bg-[#2F3645] dark:bg-white hover:bg-gray-50 rounded-xl p-4 md:p-7">
            <div className="flex justify-center items-center size-12 bg-[#34E0A1] rounded-xl">
              <Sparkles />
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800">
                Rekomendasi Wisata yang ditenagai oleh AI!
              </h3>
              <p className="mt-1 text-black">
                AI merekomendasikan perjalanan liburan anda
              </p>
            </div>
          </div>
          <div className="group flex flex-col justify-center bg-[#2F3645] dark:bg-white hover:bg-gray-50 rounded-xl p-4 md:p-7">
            <div className="flex justify-center items-center size-12 bg-[#34E0A1] rounded-xl">
              <Sparkles />
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800">
                Rekomendasi Wisata yang ditenagai oleh AI!
              </h3>
              <p className="mt-1 text-black">
                AI merekomendasikan perjalanan liburan anda
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
