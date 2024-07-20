import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/shadcn/ui/popover";
import { Info } from "lucide-react";
export default function ListRecommend({ dataRekomendasi }) {
  return (
    <>
      <div
        className="overflow-y-auto mt-2 lg:mt-10 w-full h-full lg:h-[75vh] rounded-3xl 
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-track]:bg-white
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb]:bg-[#1EB47D]"
      >
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-0 lg:gap-10  lg:mt-5 lg:mb-0  mb-[15vh] mx-8">
          {Object.keys(dataRekomendasi).map((key, index) => {
            const recommendation = dataRekomendasi[key];
            return (
              <Popover>
                <TooltipProvider>
                  <Tooltip>
                    <>
                      <TooltipTrigger asChild>
                        <div
                          className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8  lg:w-[50vh] h-[40vh] lg:h-[30vh] mt-2"
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
                          <PopoverTrigger>
                            <div className="md:hidden absolute top-0 right-0 m-5 size-8 bg-[#34E0A1] text-black rounded-full p-1 hover:text-gray-600">
                              <Info/>
                            </div>
                          </PopoverTrigger>
                          <PopoverContent
                            className="bg-white w-[40vh] h-[20vh] p-1 overflow-y-auto [&::-webkit-scrollbar]:w-2
                                  [&::-webkit-scrollbar-track]:rounded-full
                                [&::-webkit-scrollbar-track]:bg-white
                                  [&::-webkit-scrollbar-thumb]:rounded-full
                                [&::-webkit-scrollbar-thumb]:bg-[#1EB47D]"
                            align="end"
                            side="top"
                          >
                            {recommendation.description}
                          </PopoverContent>
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
                      </TooltipTrigger>
                      <TooltipContent
                        className="hidden md:block bg-white w-[30vh] h-[20vh] absolute overflow-y-auto [&::-webkit-scrollbar]:w-2
                                  [&::-webkit-scrollbar-track]:rounded-full
                                [&::-webkit-scrollbar-track]:bg-white
                                  [&::-webkit-scrollbar-thumb]:rounded-full
                                [&::-webkit-scrollbar-thumb]:bg-[#1EB47D]"
                        align="center"
                      >
                        {recommendation.description}
                      </TooltipContent>
                    </>
                  </Tooltip>
                </TooltipProvider>
              </Popover>
            );
          })}
        </div>
      </div>
    </>
  );
}
