import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import Recommended from "@/components/Recommended";
import { auth } from "@/libs/auth";
import { redirect } from "next/navigation";
export default async function Recommend() {
  const session = await auth();
  if (!session) {
    redirect('/');
  }
  return (
    <>
      <div className="bg-[url('/img/bg-image.jpg')] bg-cover bg-top relative">
      <div className="flex justify-center bg-gradient-to-b from-[#0D8292]/60 to-transparent bg-cover bg-center">
          <NavigationBar />
        </div>
        <div className="w-full h-screen flex justify-center">
          <Recommended/>
        </div>
        <Footer />
      </div>
    </>
  );
}
