"use client";
import React from "react";
import Navbar from "../components/landing_page/Navbar";
import Footer from "../components/landing_page/Footer";
import {
  Card,
  CardBody,
  Avatar,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import SearchBar from "@/components/landing_page/SearchBar";
export default function page() {
  return (
    <>
        <Navbar />
      <div className="relative flex h-screen content-center items-center justify-center  pb-32 -mb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e')] bg-cover bg-top" />
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
            <SearchBar/>
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
      <section className="-mt-32 bg-white  pb-20 pt-4">
        <div className="">
          <div className="">
            <Card className="rounded-3xl shadow-lg shadow-gray-500/0 py-11">
              <CardBody className="px-8 text-center">
                <Typography variant="h2" className="mb-2" color="black">
                  Jelajahi Destinasi{" "}
                  <span class="text-[#1EB47D]">Impianmu</span>
                </Typography>
                <Typography
                  variant="h3"
                  className="font-normal text-blue-gray-600 -mt-3"
                >
                  Rekomendasi Wisata Personal dengan AI!
                </Typography>
              </CardBody>
            </Card>
          </div>
          <div className="container mx-auto px-28">
            <div className="mt-12 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-3">
              <div className="">
                <Card
                  color="transparent"
                  shadow={false}
                  className="shadow-lg shadow-gray-500/25"
                >
                  <Avatar
                    src={
                      "https://images.unsplash.com/photo-1527965408463-82ae0731825c"
                    }
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
                    src={
                      "https://images.unsplash.com/photo-1527965408463-82ae0731825c"
                    }
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
                    src={
                      "https://images.unsplash.com/photo-1527965408463-82ae0731825c"
                    }
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
