export default function loading() {
  return (
    <>
      <div className="flex justify-center mt-[25rem]">
        <div
          class="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-[#1EB47D] rounded-full"
          role="status"
          aria-label="loading"
        >
          <span class="sr-only text-black">Memuat...</span>
        </div>
      </div>
    </>
  );
}
