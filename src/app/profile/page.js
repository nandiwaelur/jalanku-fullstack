"use client";
import Navbar from "../../components/landing_page/NavbarCustom";
import Footer from "../../components/landing_page/Footer";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
export default function Profile() {
  const { data: session } = useSession();
  if (!session) {
    redirect('/api/auth/signin')
  }
  return (
    <>
      <Navbar />
      <div className="bg-[url('/img/wave.svg')] bg-cover min-h-screen">
        <div className="flex flex-auto justify-center">
          {!session && (
            <>
              <Card className="w-96 mt-10"></Card>
            </>
          )}
          {session && (
            <>
              <Card className="w-96 mt-10">
              <img
                src={session.user.image}
                alt="profile-picture"
                className="bg-cover"
              />
                <CardBody className="text-center">
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                  {session.user.name}
                  </Typography>
                  <Typography
                    color="blue-gray"
                    className="font-medium"
                    textGradient
                  >
                   {session.user.email}
                  </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2"></CardFooter>
              </Card>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
