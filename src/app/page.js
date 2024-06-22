import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <>
      <div className="bg-[url('/img/bg-image.jpg')] bg-cover bg-top relative">
        <div className="flex justify-center bg-gradient-to-b from-[#0D8292]/60 to-transparent bg-cover bg-center">
          <NavigationBar />
        </div>
        <div className="relative flex h-[80vh] content-center items-center justify-center pb-32 ">
          <div className="absolute top-0 h-96 w-full" />
          <div className="max-w-8xl container relative mx-auto">
            <div className="flex flex-wrap items-center mb-8">
              <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
                <h1
                  variant="h1"
                  color="white"
                  className="text-[white] font-extrabold  text-5xl"
                >
                  WELCOME TO JALANKU
                </h1>
                <h2 className="-mt-2 font-light text-xl text-white">
                  <span className="tracking-wider">l i b u r a n </span>
                  <span className="ml-3 tracking-wider"> t a n p a </span>
                  <span className="ml-3 tracking-wider"> b a t a s </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <section className="h-[30vh]">
          <div className="rounded-t-3xl shadow-2xl h-full shadow-gray-500/0 py-11 bg-white">
            <div className="px-8 text-center">
              <div className="mb-2 font-extrabold text-6xl">
                Jelajahi Destinasi{" "}
                <span className="text-[#1EB47D]">Impianmu</span>
              </div>
              <div className="mb-2 font-extrabold text-xl text-[#000000] -mt-3">
                Rekomendasi Wisata Personal dengan AI!
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
