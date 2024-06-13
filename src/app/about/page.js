"use client";
import Navbar from "../../components/landing_page/NavbarCustom";
import Footer from "../../components/landing_page/Footer";
export default function Profile() {
  return (
    <>
      <div className="bg-[url('/img/wave.svg')] bg-cover min-h-screen">
        <Navbar />
      </div>
      <div className="bg-[#1EB47D]">
        <Footer />
      </div>
    </>
  );
}
