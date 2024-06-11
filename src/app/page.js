"use client";
import React from "react";
import Navbar from "../components/landing_page/NavbarCustom";
import Footer from "../components/landing_page/Footer";
import SearchBar from "../components/landing_page/SearchBar";
import { Card, CardBody, Avatar, Typography } from "@material-tailwind/react";
export default function page() {
  return (
    <>
      <Navbar />
      <div className="relative flex h-screen content-center items-center justify-center  pb-32 -mb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/bg-1.png')] bg-cover bg-top" />
        <div className="absolute top-0 h-96 w-full bg-gradient-to-b from-[#0D8292]/60 to-transparent bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center mb-8">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography variant="h1" color="white" className=" font-semibold">
                WELCOME TO JALANKU
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="-mt-2 font-light text-xl"
              >
                <span className="tracking-wider">l i b u r a n </span>
                <span className="ml-3 tracking-wider"> t a n p a </span>
                <span className="ml-3 tracking-wider"> b a t a s </span>
              </Typography>
            </div>
          </div>
          <div className="grid md:px-24">
            <SearchBar />
            <Typography
              variant="h6"
              color="white"
              className=" font-semibold mt-4 ml-6"
            >
              Powered by AI
            </Typography>
          </div>
        </div>
      </div>
      <section className=" bg-white  pb-20 pt-0">
            <Card className="rounded-3xl shadow-lg shadow-gray-500/0 py-11">
              <CardBody className="px-8 text-center">
                <Typography variant="h2" className="mb-2" color="black">
                  Jelajahi Destinasi{" "}
                  <span className="text-[#1EB47D]">Impianmu</span>
                </Typography>
                <Typography
                  variant="h3"
                  className="font-normal text-blue-gray-600 -mt-3"
                >
                  Rekomendasi Wisata Personal dengan AI!
                </Typography>
              </CardBody>
            </Card>
          <div className="container mx-auto px-28">
            <div className="mt-12 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-3">
              <div className="">
                <Card
                  color="transparent"
                  shadow={false}
                  className="shadow-lg shadow-gray-500/25"
                >
                  <Avatar
                    src={"/img/bg-1.png"}
                    alt="Y"
                    size="xxl"
                    variant="rounded"
                    className="h-full w-full rounded-b-none"
                  />
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="ml-3 mt-1"
                  >
                    Bandung
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="font-light text-sm text-blue-gray-700 ml-3  leading-4 tracking-wide"
                  >
                    Berwisata di Bandung
                  </Typography>
                </Card>
              </div>
              <div className="">
                <Card
                  color="transparent"
                  shadow={false}
                  className="shadow-lg shadow-gray-500/25"
                >
                  <Avatar
                    src={"/img/bg-1.png"}
                    alt="Y"
                    size="xxl"
                    variant="rounded"
                    className="h-full w-full rounded-b-none"
                  />
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="ml-3 mt-1"
                  >
                    Bandung
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="font-light text-sm text-blue-gray-700 ml-3  leading-4 tracking-wide"
                  >
                    Berwisata di Bandung
                  </Typography>
                </Card>
              </div>
              <div className="">
                <Card
                  color="transparent"
                  shadow={false}
                  className="shadow-lg shadow-gray-500/25"
                >
                  <Avatar
                    src={"/img/bg-1.png"}
                    alt="Y"
                    size="xxl"
                    variant="rounded"
                    className="h-full w-full rounded-b-none"
                  />
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="ml-3 mt-1"
                  >
                    Bandung
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="font-light text-sm text-blue-gray-700 ml-3  leading-4 tracking-wide"
                  >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Nesciunt error dolorem voluptate, pariatur quas obcaecati id
                    molestias architecto at alias quidem nisi commodi.
                    Distinctio hic soluta possimus, perspiciatis ratione nisi!
                    Atque quas itaque, vel iste cum cupiditate at dolor dolores?
                    Dicta similique molestiae ipsum commodi maiores vitae fugiat
                    repudiandae ad alias explicabo officiis, perspiciatis esse
                    asperiores! Praesentium iure tempore dicta.
                  </Typography>
                  <h1 className="mt-2 ml-3">Hello</h1>
                </Card>
              </div>
            </div>
          </div>
      </section>
      <div className="bg-[#1EB47D]">
        <Footer />
      </div>
    </>
  );
}
