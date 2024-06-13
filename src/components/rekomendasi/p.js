import axios from "axios";
import { useState,useEffect } from "react";
const baseURL = "https://flask-ml-pf6kxjxcyq-et.a.run.app/recommend";
function RekomendasiWisata() {
  const [rekomendasi, setRekomendasi] = useState("");
  const [dataRekomendasi,setDataRekomendasi] = useState([]);
  const kirimRekomendasi = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("destination_name", rekomendasi);
    formData.append("_method", "POST");

    await axios
    .post(baseURL, {
      destination_name: rekomendasi,
    })
    .then((response) => {
      setDataRekomendasi(response.data);
      console.log(setDataRekomendasi)
    });
  };
  
  return (
    <>
      <div className="flex justify-center">
        <div className="w-full lg:w-[52vh] lg:h-[75vh] mx-5 p-10 mt-5 lg:mt-0 flex rounded-2xl ">
          <div className="bg-white shadow-2xl rounded-2xl w-full lg:w-[400px] lg:h-[200px] my-[150px]  p-5">
            <h1 className="text-center">Destinasi impianmu</h1>
            <div className="mt-5">
              <div className="mb-5">
                <form method="post" onSubmit={kirimRekomendasi} >
                  <input
                    type="text"
                    id="large-input"
                    value={rekomendasi}
                    onChange={(e) => setRekomendasi(e.target.value)}
                    className="block w-full p-4  border border-[#0D8292] rounded-lg bg-gray-50 text-base "
                  />
                  <div className="mt-5 flex justify-end">
                    <button
                      type="submit"
                      className="bg-[#1EB47D] text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
                    >
                      Rencanakan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="lg:max-w-[100vh] lg:max-h-[75vh] lg:mt-0 overflow-auto">
          <div className="lg:w-[75vh] lg:h-[20vh] m-5 p-10 mb-5 mt-5 bg-[#6aff4c] rounded-2xl">
            {/* {dataRekomendasi.map((rekomendasi)=>{
              <p>{rekomendasi.category}</p>
            })} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default RekomendasiWisata;
