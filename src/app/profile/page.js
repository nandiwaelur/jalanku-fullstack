import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import ProfileCard from "@/components/ProfileCard";
import { auth } from "@/libs/auth";
import { redirect } from "next/navigation";

export default async function Profile() {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  return (
    <>
      <div className="bg-[url('/img/bg-image.jpg')] bg-cover bg-top relative">
        <div className="flex justify-center bg-gradient-to-b from-[#0D8292]/60 to-transparent bg-cover bg-center">
          <NavigationBar />
        </div>
        <div className="w-full h-screen">
          {session && <ProfileCard />}
          {!session && (
            <>
              <h1 className="flex justify-center text-white text-9xl ">Tidak Ada User!</h1>
            </>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
