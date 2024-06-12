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
      <div className="grid lg:grid-cols-2 grid-row-2  items-center min-h-[80vh]  bg-gradient-to-r from-[#1EB47D] to-[#34E0A1]">
        <RekomendasiWisata/>
      </div>
      <div className="bg-[#1EB47D]">
        <Footer />
      </div>
    </>
  );
}
