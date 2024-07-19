import NavigationBar from "@/components/Navigation/NavigationBar";
import Footer from "@/components/Footer";
import FeatureJalanku from "@/components/LandingPage/FeatureJalanku";
import VacationList from "@/components/LandingPage/VacationList";
import { auth } from "@/libs/auth";
export default async function page() {
  const session = await auth();
  return (
    <>
    <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32 -mb-32">
    <div className="absolute top-0 h-full w-full bg-[url('/img/bg-image.jpg')] bg-cover bg-top">
        <div className="bg-gradient-to-b from-[#2F3645]/40 to-transparent bg-cover bg-center">
          <div className="flex justify-center ">
            <NavigationBar session={session}  />
          </div>
          <div className="relative flex h-[70vh] content-center items-center justify-center ">
            <div className="absolute top-0 h-96 w-full" />
            <div className="max-w-8xl container relative mx-auto">
              <div className="ml-auto mr-auto w-full px-4  text-center lg:w-8/12 ">
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
        <main>
        <div className="bg-transparent mt-[18vh] lg:mt-0 ">
          <section className="rounded-t-3xl shadow-2xl h-full shadow-gray-500/0 py-11 bg-white dark:bg-[#2F3645]">
            <div className="mt-5 text-center">
              <div className="font-extrabold text-6xl dark:text-white">
                Jelajahi Destinasi 
                <span className="text-[#1EB47D]"> Impianmu</span>
              </div>
              <div className="my-5 px-5 font-extrabold text-xl dark:text-white">
                Rekomendasi Wisata Personal dengan Keerdasan Buatan!
              </div>
            </div>
            <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-10 p-5">
              <VacationList/>
            </div>
          </section>
        </div>
        <div className="bg-white dark:bg-[#2F3645] w-full h-full">
          <h1 className="dark:text-white text-center text-6xl font-extrabold">Kenapa Memilih Jalanku?</h1>
         <FeatureJalanku/>
        </div>
        </main>
        <Footer />
      </div>
    </div>
    </>
  );
}
