import NavigationBar from "@/components/Navigation/NavigationBar";
import Footer from "@/components/Footer";
import { auth } from "@/libs/auth";
import { redirect } from "next/navigation";
import SavedRecommendations from "@/components/Profiles/SavedRecommendations";
import UserProfiles from "@/components/Profiles/UserProfiles";
import Configuration from "@/components/Profiles/Configuration";
export default async function Profile() {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  return (
    <>
      <div className="bg-white dark:bg-[#2F3645] bg-cover bg-top relative">
        <div className="flex justify-center bg-white dark:bg-[#2F3645] bg-cover bg-center">
          <NavigationBar />
        </div>
        <div className="w-full h-full mb-5">
          <div className="flex flex-col lg:flex-row justify-center">
            <UserProfiles session={session} />
            <SavedRecommendations rekomendasiData={session} />
            <Configuration/>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
