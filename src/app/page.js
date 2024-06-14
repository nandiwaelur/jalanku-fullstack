"use client"
import Navbar from "../components/landing_page/NavbarCustom";
import Footer from "../components/landing_page/Footer";
import Destination from "../components/landing_page/Destination";
export default function page() {
  return (
    <>
    <div className="">
    <Navbar />
    </div>
    <Destination/>
      <div className="bg-[#1EB47D]">
        <Footer />
      </div>
    </>
  );
}
