"use client";
import axios from "axios";
import ShowRecommend from "@/components/Recommends/ShowRecommend";
import { useToast } from "@/components/shadcn/ui/use-toast";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
import { Bookmark, Search } from "lucide-react";
import addRecommendation from "./add-recommendation";
export default function Recommended({ session }) {
  const [rekomendasi, setRekomendasi] = useState("");
  const [dataRekomendasi, setDataRekomendasi] = useState([]);
  const { toast } = useToast();
  const kirimRekomendasi = async (e) => {
    if (rekomendasi === null || rekomendasi === "") {
      toast({
        variant: "destructive",
        className: "bg-red-500 text-white",
        title: "Silahkan isi tujuan anda!",
      });
    } else {
      const data = { destination_name: rekomendasi };
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BACKEND}/recommend`,
          data
        );
        setDataRekomendasi(response.data);
      } catch (error) {
        toast({
          variant: "destructive",
          className: "bg-red-500 text-white",
          title: "Tidak bisa mendapatkan rekomendasi!",
        });
      }
    }
  };
  const simpanRekomendasi = async (e) => {
    const data = {
      userID: session.user.id,
      recommendation_saved: JSON.stringify(dataRekomendasi),
    };
    if (dataRekomendasi.length === 0 || rekomendasi === "") {
      toast({
        variant: "destructive",
        className: "bg-red-500 text-white",
        title: "Tidak ada rekomendasi yang bisa disimpan!",
      });
    } else {
      try {
        addRecommendation(data);
        toast({
          className: "bg-[#2F3645] dark:bg-white  text-white dark:text-black",
          title: "Rekomendasi berhasil disimpan",
        });
      } catch (error) {
        toast({
          variant: "destructive",
          className: "bg-[#2F3645] dark:bg-white  text-white dark:text-black",
          title: "Rekomendasi tidak berhasil disimpan!",
        });
      }
    }
  };
  return (
    <>
      <div className="lg:w-screen lg:h-screen ">
        <div className="flex justify-center gap-2 mt-10  ">
          <div className="flex rounded-lg shadow-sm ">
            <input
              type="text"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  kirimRekomendasi();
                }
              }}
              onChange={(e) => setRekomendasi(e.target.value)}
              className="min-w-[30vh] lg:w-[80vh] p-4  dark:bg-white bg-[#2F3645] dark:text-black dark:placeholder:text-black py-3 px-4 shadow-sm rounded-s-lg text-sm outline-none"
              placeholder="Mau kemana hari ini?"
              required
            />
            <TooltipProvider>
              <Tooltip >
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    onClick={kirimRekomendasi}
                    className="w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold  border border-transparent bg-[#1EB47D]  disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:border-l-white"
                  >
                    <Search color="#ffffff" />
                  </button>
                </TooltipTrigger>
                <TooltipContent className="bg-white">
                  <p>Kirim rekomendasi</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip >
                <TooltipTrigger asChild>
                <button
              type="button"
              onClick={simpanRekomendasi}
              className="w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-[#1EB47D] text-white disabled:opacity-50 disabled:pointer-events-none dark:border-l-transparent dark:border-white  "
            >
            <Bookmark color="#ffffff" />
            </button>
                </TooltipTrigger>
                <TooltipContent className="bg-white">
                  <p>Simpan rekomendasi</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <ShowRecommend dataRekomendasi={dataRekomendasi} />
      </div>
    </>
  );
}
