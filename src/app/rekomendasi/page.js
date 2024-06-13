"use client";
import Navbar from "../../components/landing_page/NavbarCustom";
import Footer from "../../components/landing_page/Footer";
import RekomendasiWisata from "../../components/rekomendasi/RekomendasiWisata";
export default function rekomendasi() {
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="grid lg:grid-cols-2 grid-row-2  items-center min-h-[80vh]  bg-[url('/img/wave.svg')] bg-cover">
        <RekomendasiWisata/>
      </div>
      <div className="bg-[#1EB47D]">
        <Footer />
      </div>
    </>
  );
}
