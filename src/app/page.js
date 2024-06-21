"use client";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Dialog,
} from "@material-tailwind/react";
import axios from "axios";
import { useSession,signIn } from "next-auth/react";
import { useState } from "react";
export default function page() {
    // show more text
    const [moreText, setMoretext] = useState(false);
    // dialog when searchbar is empty
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    // dialog when user is not log-in
    const [openLogindialog, setopenLogindialog] = useState(false);
    const loginDialog = () => setopenLogindialog((cur) => !cur);
    // usestate for rekomendasi data
    const [rekomendasi, setRekomendasi] = useState(null);
    const [dataRekomendasi, setDataRekomendasi] = useState([]);
    // get session
    const { data: session } = useSession();
    const kirimRekomendasi = async (e) => {
      e.preventDefault();
      if (!rekomendasi) {
        handleOpen();
      } else if (!session) {
        loginDialog();
      } else {
        const data = { destination_name: rekomendasi };
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_BACKEND}/recommend`,
            data
          );
          setDataRekomendasi(response.data);
        } catch (error) {
          console.error("can't send recommendation");
        }
      }
    };
  return (
    <>
      <NavigationBar />
      <div className="relative flex h-[80vh] content-center items-center justify-center pb-32 -mb-32">
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
            <div className="lg:max-w-[200vh] lg:max-h-[8vh] flex items-center justify-center">
              <form
                className="w-[400px] h-[20px] lg:w-full lg:h-full bg-[#ffffff] flex items-center rounded-full p-10 relative"
                onSubmit={kirimRekomendasi}
              >
                <svg
                  className="svg-icon absolute left-1 search-icon w-[40px] ml-[10px]"
                  aria-labelledby="title desc"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 19.9 19.7"
                >
                  <title id="title">Search Icon</title>
                  <desc id="desc">A magnifying glass icon.</desc>
                  <g className="search-path" fill="none" stroke="#848F91">
                    <path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4" />
                    <circle cx="8" cy="8" r="7" />
                  </g>
                </svg>
                <input
                  type="text"
                  onChange={(e) => setRekomendasi(e.target.value)}
                  className="ml-5 bg-transparent flex border-none outline-none lg:text-[25px] w-full  text-[#000000]"
                  placeholder="Mau liburan kemana heri ini?"
                />
                <button
                  className="absolute font-bold bg-[#1eb47d] px-7 py-4 lg:text-[25px] text-[#ffffff] cursor-pointer rounded-full right-1 mr-1"
                  type="submit"
                >
                  Rekomendasi
                </button>
              </form>
            </div>
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
              className="font-normal text-[#000000] -mt-3"
            >
              Rekomendasi Wisata Personal dengan AI!
            </Typography>
          </CardBody>
        </Card>
        <div className="container mx-auto min-h-[0vh] px-20">
          <div className="grid grid-cols-1 gap-[50px] md:grid-cols-2 xl:grid-cols-3">
            {Object.keys(dataRekomendasi).map((key, index) => {
              const recommendation = dataRekomendasi[key];
              return (
                <div
                  key={index}
                  className="max-w-sm  p-5 mb-5 rounded-2xl shadow-2xl"
                >
                  <h2>{recommendation.destination_name}</h2>
                  <p>Kategori: {recommendation.category}</p>
                  <p>Harga: {recommendation.price}</p>
                  <p>Rating: {recommendation.rating}</p>
                  <p>
                    {moreText
                      ? recommendation.description
                      : `${recommendation.description.substring(0, 100)}`}
                    <button className="text-sm px-2 py-2 " onClick={() => setMoretext(!moreText)}>{moreText ? " Show less" : " Show more"}</button>
                  </p>
                  <img src={recommendation.image} className="bg-auto" />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Dialog
        size="xs"
        open={openLogindialog}
        handler={loginDialog}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[17rem]">
          <CardBody>
              <Button size="lg" className="flex items-center gap-3 bg-black" onClick={()=> signIn("google")}>
                <img
                  src="https://docs.material-tailwind.com/icons/google.svg"
                  alt="metamask"
                  className="h-6 w-6"
                />
                <h1 className="text-white">Continue with Google</h1>
              </Button>
          </CardBody>
        </Card>
      </Dialog>
      <Dialog
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-row gap-4 w-full h-full">
            <h1>Silahkan isi tujuan wisata anda</h1>
            <Button className="bg-[#1EB47D] " onClick={handleOpen}>
              Oke
            </Button>
          </CardBody>
        </Card>
      </Dialog>
      <Footer />
    </>
  );
}
