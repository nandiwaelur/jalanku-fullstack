import {
  Card,
  CardBody,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";
function Destination() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [rekomendasi, setRekomendasi] = useState(null);
  const [dataRekomendasi, setDataRekomendasi] = useState([]);
  const kirimRekomendasi = async (e) => {
    e.preventDefault();
    if (rekomendasi === null) {
      handleOpen();
    } else {
      const data = { destination_name: rekomendasi };
      console.log(data);
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BACKEND}/recommend`,
          data
        );
        setDataRekomendasi(response.data);
      } catch (error) {
        console.error("cant send recommendation:", error);
      }
    }
  };
  return (
    <>
      <div className="relative flex h-[80vh] content-center items-center justify-center pb-32 -mb-32">
        <Dialog open={open} handler={handleOpen}>
          <DialogHeader >Silahkan isi tempat tujuan anda</DialogHeader>
          <DialogFooter>
            <Button className="bg-[#1EB47D]" onClick={handleOpen}>
              Oke
            </Button>
          </DialogFooter>
        </Dialog>
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
                  className="ml-5 bg-transparent flex border-none outline-none lg:text-[25px] text-[#000000]"
                  placeholder="Mau liburan kemana?"
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
                  className="max-w-sm max-h-[50vh] p-6 rounded-2xl shadow-2xl"
                >
                  <h2>{recommendation.destination_name}</h2>
                  <p>Kategori: {recommendation.category}</p>
                  <p>Harga: {recommendation.price}</p>
                  <p>Rating: {recommendation.rating}</p>
                  <div className="">
                  <p>Deskripsi: {recommendation.description}</p>
                  </div>
                  <img src={recommendation.image}  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Destination;
