"use client";
import { useState } from "react";
import {
  Card,
  CardBody,
  Button,
  Dialog,
} from "./MaterialTailwindComponent";
import axios from "axios";
export default function Recommended() {
  // show more text
  const [moreText, setMoretext] = useState(false);
  // dialog when searchbar is empty
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  // dialog when user is not log-in
  const [openLogindialog, setopenLogindialog] = useState(false);
  const loginDialog = () => setopenLogindialog(!openLogindialog);
  // dialog when cannot send recommendation
  const [cantSend, setCantsend] = useState(false);
  const handleSend = () => setCantsend(!cantSend);
  // usestate for rekomendasi data
  const [rekomendasi, setRekomendasi] = useState(null);
  const [dataRekomendasi, setDataRekomendasi] = useState([]);
  const kirimRekomendasi = async (e) => {
    e.preventDefault();
    if (!rekomendasi) {
      handleOpen();
    } else {
      const data = { destination_name: rekomendasi };
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BACKEND}/recommend`,
          data
        );
        setDataRekomendasi(response.data);
      } catch (error) {
        setCantsend(true);
      }
    }
  };
  return (
    <>
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
      {/* Cardlist */}
      <div className="container mx-auto min-h-[0vh] px-20">
          <div className="grid grid-cols-1 gap-[50px] md:grid-cols-2 xl:grid-cols-3">
            {Object.keys(dataRekomendasi).map((key, index) => {
              const recommendation = dataRekomendasi[key];
              return (
                <div
                  key={index}
                  className="max-w-sm max-h-[50rem] p-5 m-5 rounded-2xl shadow-2xl"
                >
                <img src={recommendation.image} className="bg-auto" />
                  <h2>{recommendation.destination_name}</h2>
                  <p>Kategori: {recommendation.category}</p>
                  <p>Harga: {recommendation.price}</p>
                  <p>Rating: {recommendation.rating}</p>
                  <div>
                    {moreText
                      ? recommendation.description
                      : `${recommendation.description.substring(0, 40)}`}
                    <button className="text-sm px-2 py-2 " onClick={() => setMoretext(!moreText)}>{moreText ? "Sembunyikan" : "Tunjukan lebih"}</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Dialog */}
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
      <Dialog
        open={cantSend}
        handler={handleSend}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-row gap-4 w-full h-full">
            <h1>Tidak bisa mengirimkan rekomendasi</h1>
            <Button className="bg-[#1EB47D] " onClick={handleSend}>
              Oke
            </Button>
          </CardBody>
        </Card>
      </Dialog>
    </>
  );
}
