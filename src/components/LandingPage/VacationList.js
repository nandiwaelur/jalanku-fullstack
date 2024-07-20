export default function VacationList() {
  return (
    <>
      <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8  lg:w-[50vh] h-[30vh] lg:h-[30vh] lg:mb-12 lg:mt-12 shadow-[10px_10px_5px_0px_rgba(0,0,0,0.75)]">
        <img
          src={
            "https://img.okezone.com/content/2020/10/06/408/2289436/bendung-lepen-wisata-baru-di-yogya-tawarkan-sensasi-bermain-dengan-ikan-QlMIhoU5Uk.jpeg"
          }
          alt="gambar rekomendasi"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <h3 className="z-10 mt-3 text-3xl font-bold text-white">
          Bendung Lepen
        </h3>
      </div>
      <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 lg:w-[50vh] h-[30vh] lg:h-[30vh] lg:mb-12 lg:mt-12 shadow-[10px_10px_5px_0px_rgba(0,0,0,0.75)]">
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/d/d8/Gedung_Bank_BNI_1946_Yogyakarta.jpg"
          }
          alt="gambar rekomendasi"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <h3 className="z-10 mt-3 text-3xl font-bold text-white">
          Nol Kilometer Jl.Malioboro
        </h3>
      </div>
      <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 lg:w-[50vh] h-[30vh] lg:h-[30vh] lg:mb-12 lg:mt-12 shadow-[10px_10px_5px_0px_rgba(0,0,0,0.75)]">
        <img
          src={
            "https://alodiatour.com/wp-content/uploads/2019/01/Wisata-Malam-Alun-alun-Selatan-Yogya.jpg"
          }
          alt="gambar rekomendasi"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <h3 className="z-10 mt-3 text-3xl font-bold text-white">
          Alun Alun Selatan Yogyakarta
        </h3>
      </div>
    </>
  );
}
