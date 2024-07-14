import Footer from "@/components/Footer";
import NavigationBar from "@/components/Navigation/NavigationBar";
export default function page() {
  return (
    <>
    <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32 -mb-32">
    <div className="absolute top-0 h-full w-full bg-[url('/img/bg-image.jpg')] bg-cover bg-top">
        <div className="bg-gradient-to-b from-[#0D8292]/60 to-transparent bg-cover bg-center">
          <div className="flex justify-center ">
            <NavigationBar />
          </div>
          <div className="relative flex h-[70vh] content-center items-center justify-center ">
            <div className="absolute top-0 h-96 w-full" />
            <div className="max-w-8xl container relative mx-auto">
              <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12 ">
                <h1
                  variant="h1"
                  color="white"
                  className="hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent hover:from-[#1EB47D] hover:to-[#34E0A1] font-bold text-white text-5xl cursor-pointer"
                >
                  WELCOME TO JALANKU
                </h1>
                <h2 className="mt-1 font-light text-xl text-white hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent hover:from-[#1EB47D] hover:to-[#34E0A1]  cursor-pointer">
                  <span className="tracking-wider">l i b u r a n </span>
                  <span className="ml-3 tracking-wider"> t a n p a </span>
                  <span className="ml-3 tracking-wider"> b a t a s </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="bg-transparent">
          <section className="rounded-t-3xl shadow-2xl h-full shadow-gray-500/0 py-11 bg-white dark:bg-[#2F3645]">
            <div className="mt-10 text-center">
              <div className="font-extrabold text-6xl dark:text-white">
                Jelajahi Destinasi 
                <span className="text-[#1EB47D]"> Impianmu</span>
              </div>
              <div className="my-5 font-extrabold text-xl dark:text-white">
                Rekomendasi Wisata Personal dengan AI!
              </div>
            </div>
            <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-10 p-5">
              <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8  lg:w-[50vh] h-[60vh] lg:h-[30vh] lg:mb-12 lg:mt-12">
                <img
                  src={
                    "https://img.okezone.com/content/2020/10/06/408/2289436/bendung-lepen-wisata-baru-di-yogya-tawarkan-sensasi-bermain-dengan-ikan-QlMIhoU5Uk.jpeg"
                  }
                  alt="gambar rekomendasi"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <h3 className="z-10 mt-3 text-3xl font-bold text-white">
                  Bendung Lepen
                </h3>
              </div>
              <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 lg:w-[50vh] h-[60vh] lg:h-[30vh] lg:mb-12 lg:mt-12">
                <img
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/d/d8/Gedung_Bank_BNI_1946_Yogyakarta.jpg"
                  }
                  alt="gambar rekomendasi"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <h3 className="z-10 mt-3 text-3xl font-bold text-white">
                  Nol Kilometer Jl.Malioboro
                </h3>
              </div>
              <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 lg:w-[50vh] h-[60vh] lg:h-[30vh] lg:mb-12 lg:mt-12">
                <img
                  src={
                    "https://alodiatour.com/wp-content/uploads/2019/01/Wisata-Malam-Alun-alun-Selatan-Yogya.jpg"
                  }
                  alt="gambar rekomendasi"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <h3 className="z-10 mt-3 text-3xl font-bold text-white">
                  Alun Alun Selatan Yogyakarta
                </h3>
              </div>
            </div>
          </section>
        </div>
        <div className="bg-white dark:bg-[#2F3645] w-full h-full">
          
        </div>
        <Footer />
      </div>
    </div>
    </>
  );
}
