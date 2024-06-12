import { Card, CardBody, Typography } from "@material-tailwind/react";
function DestinationList() {
  return (
    <>
      <Card className="rounded-3xl shadow-lg shadow-gray-500/0 py-11">
        <CardBody className="px-8 text-center">
          <Typography variant="h2" className="mb-2" color="black">
            Jelajahi Destinasi <span className="text-[#1EB47D]">Impianmu</span>
          </Typography>
          <Typography
            variant="h3"
            className="font-normal text-blue-gray-600 -mt-3"
          >
            Rekomendasi Wisata Personal dengan AI!
          </Typography>
        </CardBody>
      </Card>
      <div className="container mx-auto  px-20">
        <div className="grid grid-cols-1 gap-[100px] md:grid-cols-2 xl:grid-cols-3">
       
        </div>
      </div>
    </>
  );
}

export default DestinationList;
