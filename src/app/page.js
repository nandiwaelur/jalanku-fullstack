import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
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
        <section>
          <div className="rounded-t-3xl shadow-2xl h-full shadow-gray-500/0 py-11 bg-white">
            <div className="px-8 text-center">
              <div className="mb-2 mt-10 font-extrabold text-6xl">
                Jelajahi Destinasi{" "}
                <span className="text-[#1EB47D]">Impianmu</span>
              </div>
              <div className="mb-2 font-extrabold text-xl text-[#000000] mt-4">
                Rekomendasi Wisata Personal dengan AI!
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="mb-10 px-5 mx-5 lg:px-0 lg:mx-0">
        <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-10 bg-white">
          <div class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 lg:w-[50vh] h-[75vh] lg:h-[30vh] mt-24">
            <img
              src={
                "https://img.okezone.com/content/2020/10/06/408/2289436/bendung-lepen-wisata-baru-di-yogya-tawarkan-sensasi-bermain-dengan-ikan-QlMIhoU5Uk.jpeg"
              }
              alt="gambar rekomendasi"
              class="absolute inset-0 h-full w-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 class="z-10 mt-3 text-3xl font-bold text-white">
              Bendung Lepen
            </h3>
            <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Kategori: Taman Hiburan
            </div>
            <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Rating: 4
            </div>
            <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Tiket Masuk: Rp.0
            </div>
          </div>
          <div class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 lg:w-[50vh] h-[75vh] lg:h-[30vh] mt-24">
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/d/d8/Gedung_Bank_BNI_1946_Yogyakarta.jpg"
              }
              alt="gambar rekomendasi"
              class="absolute inset-0 h-full w-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 class="z-10 mt-3 text-3xl font-bold text-white">
            Nol Kilometer Jl.Malioboro
            </h3>
            <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Kategori: Taman Hiburan
            </div>
            <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Rating: 4
            </div>
            <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Tiket Masuk: Rp.0
            </div>
          </div>
          <div class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 lg:w-[50vh] h-[75vh] lg:h-[30vh] mt-24">
            <img
              src={
                "https://alodiatour.com/wp-content/uploads/2019/01/Wisata-Malam-Alun-alun-Selatan-Yogya.jpg"
              }
              alt="gambar rekomendasi"
              class="absolute inset-0 h-full w-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <h3 class="z-10 mt-3 text-3xl font-bold text-white">
            Alun Alun Selatan Yogyakarta
            </h3>
            <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Kategori: Taman Hiburan
            </div>
            <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Rating: 4
            </div>
            <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              Tiket Masuk: Rp.0
            </div>
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
}
