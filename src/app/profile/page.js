import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";
import { auth } from "@/libs/auth";
import { redirect } from "next/navigation";

export default async function Profile() {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  return (
    <>
      <div className="bg-[url('/img/bg-image.jpg')] bg-cover bg-top">
        <div className="flex justify-center bg-gradient-to-b from-[#0D8292]/60 to-transparent bg-cover bg-center">
          <NavigationBar />
        </div>
        <div className="w-full h-full">
          {session && (
            <div className="min-h-[75vh]">
              <div className="flex flex-auto justify-center">
                <div className="w-96 mt-10 bg-white rounded-3xl">
                  <img
                    src={session.user.image.replace(/=s\d+/, "=s400")}
                    alt="profile-picture"
                    className="inline-block size-[200px] ml-[90px] mt-10 rounded-full"
                  />

                  <div className="text-center">
                    <h4 className="text-xl mb-2 mt-2 font-bold">{session.user.name}</h4>
                    <h4 className="text-sm  mb-10 ">{session.user.email}</h4>
                  </div>
                </div>
              </div>
            </div>
          )}
          {!session && (
            <>
              <h1 className="flex justify-center text-white text-9xl ">
                Tidak Ada User!
              </h1>
            </>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
}
