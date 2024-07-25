"use client";
import { X,Info } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { deleteRecommendations } from "@/server/actions";
import PaginationButton from "@/components/Profiles/PaginationButton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
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
                            <Popover>
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
                                      <PopoverTrigger>
                                      <div className="lg:hidden absolute top-0 right-0 m-5 size-8 bg-[#34E0A1] text-black rounded-full p-1 hover:text-gray-600">
                                      <Info/>
                                      </div>
                                      </PopoverTrigger>
                                      <PopoverContent className="bg-white w-[40vh] h-[20vh] p-1 overflow-y-auto [&::-webkit-scrollbar]:w-2
                                  [&::-webkit-scrollbar-track]:rounded-full
                                [&::-webkit-scrollbar-track]:bg-white
                                  [&::-webkit-scrollbar-thumb]:rounded-full
                                [&::-webkit-scrollbar-thumb]:bg-[#1EB47D]" align="end"  side="top"
                                  >{recommendation.description}</PopoverContent>
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
                                  className="hidden md:block bg-white w-[30vh] h-[20vh] absolute overflow-y-auto [&::-webkit-scrollbar]:w-2
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
                            </Popover>
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
