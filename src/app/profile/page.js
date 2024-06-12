"use client";
import Footer from "../../components/landing_page/Footer";
import Navbar from "../../components/landing_page/NavbarCustom";

export default function Profile() {
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div className="items-center lg:min-h-[80vh]  bg-gradient-to-r from-[#1EB47D] to-[#ffffff] ">
        <div className="flex justify-center">
          <div className="bg-white w-[75vh] h-screen mb-5 lg:mt-5 lg:mb-0 lg:h-[75vh] mx-5 p-10 mt-5 rounded-lg shadow-2xl ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              harum ipsa libero accusamus rem facilis nemo ex dolorem eaque
              ducimus vero non, laborum animi illo tempora blanditiis. Aliquid,
              consequatur sequi!
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1EB47D]">
        <Footer />
      </div>
    </>
  );
}
