import NavigationBar from "@/components/Navigation/NavigationBar";
import Footer from "@/components/Footer";
import { auth } from "@/libs/auth";
import { redirect } from "next/navigation";
import Recommended from "@/components/Recommends/Recommended";
export default async function Recommend() {
  const session = await auth();
  if (!session) {
    redirect('/');
  }
  return (
    <>
    <div className="bg-white dark:bg-[#2F3645] bg-cover bg-top">
        <div className="flex justify-center bg-white dark:bg-[#2F3645] ">
          <NavigationBar />
        </div>
        <div className="w-full h-screen flex justify-center  bg-white dark:bg-[#2F3645] lg:bg-transparent dark:lg:bg-transparent ">
          <Recommended session={session}/>
        </div>
      <Footer/>
      </div>
    </>
  );
}
