import NavigationBar from "@/components/Navigation/NavigationBar";
import Footer from "@/components/Footer";
import { auth } from "@/libs/auth";
export default async function About() {
  const session = await auth();
  return (
    <>
      <div className="bg-white bg-cover bg-top relative">
      <div className="flex justify-center bg-white dark:bg-[#2F3645] bg-cover bg-center">
      <NavigationBar session={session}/>
        </div>
        <div className="w-full h-screen bg-white dark:bg-[#2F3645] flex justify-center ">
       
        </div>
        <Footer />
      </div>
    </>
  );
}
