import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard, ComponentCard } from "@/widgets/cards";
import FCard from "../widgets/cards/feature-card(home)";
import { featuresData, teamData, contactData, componentData } from "@/data";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32 -mb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/bg-1.png')] bg-cover bg-top" />
        <div className="absolute top-0 h-96 w-full bg-gradient-to-b from-[#0D8292]/60 to-transparent bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center mb-8">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className=" font-semibold"
              >
                WELCOME TO JALANKU
              </Typography>
              <Typography variant="lead" color="white" className="-mt-2 font-light text-xl">
                <span className="tracking-wider">l i b u r a n </span><span className="ml-3 tracking-wider"> t a n p a </span><span className="ml-3 tracking-wider"> b a t a s </span>
              </Typography>
            </div>    
          </div>
          <div className="grid px-24">
              <Input
              placeholder="name@mail.com"
              className=" !border-t-white focus:!border-t-gray-500 bg-white flex py-7 rounded-full"
              labelProps={{
                className: "before:content-none after:content-none ",
              }}   
              />
              <Button 
              variant="filled"
              className="absolute right-24 flex items-center justify-center mt-1 mr-1 rounded-3xl py-4 px-7 bg-[#1EB47D]">
              Search</Button>
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
          {featuresData.map(({ color, title, icon, description }) => (
              <FCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="container mx-auto px-28">
          <div className="mt-12 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-3">
            {componentData.map(({ img, name, desc, socials }) => (
              <ComponentCard
                key={name}
                img={img}
                name={name}
                desc={desc}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
          </div>
          
          
        </div>
      </section>

      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
