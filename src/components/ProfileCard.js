"use client"
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useSession } from "next-auth/react";
export default function ProfileCard() {
  const { data: session } = useSession();
  return (
    <>
    <div className="min-h-[75vh]">
        <div className="flex flex-auto justify-center">
              <Card className="w-96 mt-10">
              <img
                src={session.user.image.replace(/=s\d+/, '=s400')}
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
        </div>
      </div>
    
    
    </>
  )
}
