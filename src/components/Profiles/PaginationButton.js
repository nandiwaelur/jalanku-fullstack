import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";
export default function PaginationButton({ page, pageSize,totalPages,recommendations}) {
  useEffect(() => {
    if (recommendations.length === 0 && page > 1) {
      window.location.href = `?page=${page - 1}&pageSize=${pageSize}`;
    }
  }, [recommendations, page, pageSize]);
  return (
    <>
      <div className="flex justify-center my-4 ">
        <div className="flex justify-between w-full text-white mx-5 p-5 bg-zinc-900 rounded-2xl shadow-[10px_10px_5px_0px_rgba(0,0,0,0.75)]">
        <button
            disabled={page === 1}
            className="bg-white text-black rounded-lg p-1 disabled:text-red-600"
            onClick={() =>(
              window.location.href = `?page=${page - 1}&pageSize=${pageSize}`
            )
            }
          >
            <ChevronLeft size={25} strokeWidth={5} />
          </button>
          <div className="p-1 text-xl font-extrabold">
            <h1>{page}</h1>
          </div>
          <button
            disabled={page === totalPages }
            className="bg-white text-black rounded-lg p-1 disabled:text-red-600"
            onClick={() =>
              (window.location.href = `?page=${page + 1}&pageSize=${pageSize}`)
            }
          >
            <ChevronRight size={25} strokeWidth={5} />
          </button>
        </div>
      </div>
    </>
  );
}
