import NavigationBar from "@/components/Navigation/NavigationBar";
import Footer from "@/components/Footer";
import { auth } from "@/libs/auth";
import { redirect } from "next/navigation";
import GetRecommends from "@/components/Recommends/GetRecommends";
export default async function Recommend() {
  const sessions = await auth();
  const session = sessions?.user;
  if (!session.id) {
    redirect("/")
  }
  return (
    <>
    <div className="bg-white dark:bg-[#2F3645] bg-cover bg-top">
        <div className="flex justify-center bg-white dark:bg-[#2F3645] ">
        <NavigationBar session={session?.id} image={session?.image} />
        </div>
        <div className="w-full h-screen flex justify-center  bg-white dark:bg-[#2F3645] lg:bg-transparent dark:lg:bg-transparent ">
          <GetRecommends session={session}/>
        </div>
      <Footer/>
      </div>
    </>
  );
}
