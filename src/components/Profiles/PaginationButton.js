export default function PaginationButton({ page, pageSize, totalPages }) {
  return (
    <>
      <div className="flex justify-center my-4">
        <button
          disabled={page === 1}
          onClick={() =>(
            window.location.href = `?page=${page - 1}&pageSize=${pageSize}`
          )
          }
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mx-1 disabled:opacity-50"
        >
          Sebelum
        </button>
        <span className="text-gray-700 mx-2 my-2">
          {page} 
        </span>
        <button
          disabled={page === totalPages}
          onClick={() =>
            (window.location.href = `?page=${page + 1}&pageSize=${pageSize}`)
          }
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mx-1 disabled:opacity-50"
        >
          Selanjutnya
        </button>
      </div>
    </>
  );
}
