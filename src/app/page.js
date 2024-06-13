"use client"
import Navbar from "../components/landing_page/NavbarCustom";
import Footer from "../components/landing_page/Footer";
import SearchBar from "../components/landing_page/SearchBar";
import DestinationList from "../components/landing_page/DestinationList";
import Hero from "../components/landing_page/Hero";
export default function page() {
  return (
    <>
      <Navbar />
      <div className="relative flex h-[80vh] content-center items-center justify-center pb-32 -mb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/bg-1.png')] bg-cover bg-top" />
        <div className="absolute top-0 h-96 w-full bg-gradient-to-b from-[#0D8292]/60 to-transparent bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center mb-8">
            <Hero/>
          </div>
          {/* <div className="grid md:px-24">
            <SearchBar />
          </div> */}
        </div>
      </div>
      <section className=" bg-white  pb-20 pt-0">
        <DestinationList/>
      </section>
      <div className="bg-[#1EB47D]">
        <Footer />
      </div>
    </>
  );
}
