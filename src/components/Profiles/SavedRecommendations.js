"use client";
import { X } from "lucide-react";
import { useToast } from "@/components/shadcn/ui/use-toast";
import deleteRecommendations from "./delete-recommendations";
import PaginationButton from "./PaginationButton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";

export default function SavedRecommendations({
  recommendations,
  page,
  pageSize,
  totalPages,
  totalRecommendations,
}) {
  const { toast } = useToast();
  const rekomendasiData = recommendations.map((rekomendasi) => {
    const recommendationsArray = Object.values(
      JSON.parse(rekomendasi.recommendation_saved)
    );
    return {
      id: rekomendasi.id,
      recommendations: recommendationsArray.map((rekomendasi) => ({
        destinationName: rekomendasi.destination_name,
        category: rekomendasi.category,
        image: rekomendasi.image,
        price: rekomendasi.price,
        rating: rekomendasi.rating,
        description: rekomendasi.description,
      })),
    };
  });

  async function deleteRecommendation(id) {
    const result = await deleteRecommendations(id);
    if (result?.error) {
      toast({
        variant: "destructive",
        className: "bg-red-500 text-white",
        title: "Tidak bisa menghapus rekomendasi!",
      });
    } else {
      toast({
        className: "bg-[#2F3645] dark:bg-white text-white dark:text-black",
        title: "Rekomendasi berhasil dihapus!",
      });
    }
  }

  return (
    <>
      {totalRecommendations > 0 && (
        <div className="mx-5 mb-5 h-screen lg:w-[150vh] lg:h-[80vh] bg-[#2F3645] dark:bg-white rounded-xl shadow-[10px_10px_5px_0px_rgba(0,0,0,0.75)]">
          <>
            <PaginationButton
              page={page}
              pageSize={pageSize}
              totalPages={totalPages}
              recommendations={recommendations}
            />
            <div
              className="w-full h-[85vh] lg:h-[65vh] overflow-y-auto [&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:rounded-full
                [&::-webkit-scrollbar-track]:bg-white
                [&::-webkit-scrollbar-thumb]:rounded-full
                [&::-webkit-scrollbar-thumb]:bg-[#1EB47D]"
            >
              <div className="w-full h-full lg:h-[75vh] rounded-3xl">
                <div className="flex flex-wrap justify-center ">
                  {rekomendasiData?.map((rekomendasi) => (
                    <div key={rekomendasi.id}>
                      <div className="flex justify-between text-white mx-5 p-5 bg-zinc-900 rounded-2xl shadow-[10px_10px_5px_0px_rgba(0,0,0,0.75)]">
                        <div className="rounded-lg px-3 bg-transparent"></div>
                        <button
                          className="bg-white text-black rounded-full p-1 hover:text-red-700"
                          onClick={() => deleteRecommendation(rekomendasi.id)}
                        >
                          <X />
                        </button>
                      </div>
                      {rekomendasi?.recommendations.map(
                        (recommendation, recIndex) => (
                          <div key={`${rekomendasi.id}-${recIndex}`}>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <div className="flex justify-center m-5 ">
                                    <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 w-full lg:w-[40vh] h-[40vh] lg:h-[30vh] shadow-[10px_10px_5px_0px_rgba(0,0,0,0.75)] ">
                                      <img
                                        src={recommendation?.image}
                                        alt="Gambar Rekomendasi"
                                        className="absolute inset-0 h-full w-full object-cover "
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 "></div>
                                      <h3 className="z-10 mt-3 text-3xl font-bold text-white ">
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
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent
                                  className="bg-white w-[30vh] h-[20vh] absolute overflow-y-auto [&::-webkit-scrollbar]:w-2
                                  [&::-webkit-scrollbar-track]:rounded-full
                                [&::-webkit-scrollbar-track]:bg-white
                                  [&::-webkit-scrollbar-thumb]:rounded-full
                                [&::-webkit-scrollbar-thumb]:bg-[#1EB47D]"
                                  align="center"
                                >
                                  {recommendation?.description}
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        )
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        </div>
      )}
    </>
  );
}
