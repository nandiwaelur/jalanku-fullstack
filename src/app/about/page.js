"use client";
import Navbar from "../../components/landing_page/NavbarCustom";
import Footer from "../../components/landing_page/Footer";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="bg-[url('/img/wave.svg')] bg-cover min-h-screen">
        <div className="flex flex-col lg:flex-row justify-center gap-5 mx-5 px-5">
          <Card className="w-90 mt-5 lg:mt-10 ">
              <img src="/about/ahmad.png" alt="profile-picture" className="object-cover w-[400px]"/>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
                Ahmad Hawari
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                Frontend/UI UX
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-90 mt-5 lg:mt-10 ">
              <img src="/about/kevin.png" alt="profile-picture" className="object-cover w-[400px]" />
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
              Kevin Arnandes
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                Backend/ML Engineer
              </Typography>
            </CardBody>
          </Card>
          <Card className="w-90 mt-5 lg:mt-10 ">
              <img src="/about/widi.png" alt="profile-picture" className="object-cover w-[400px]" />
            <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Widi Dwiky Alhamdi
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                Scrum Master
              </Typography>
            </CardBody>
          </Card>
          
          <Card className="w-90 mt-5 lg:mt-10 grow-0">
              <img src="/about/dhuta.png" alt="profile-picture" className="object-cover w-[400px]"/>
            <CardBody className="text-center">
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Dhuta Azikirra Subroto
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                Product Owner
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="bg-[#1EB47D]">
        <Footer />
      </div>
    </>
  );
}
