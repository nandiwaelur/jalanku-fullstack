import NavigationBar from "@/components/Navigation/NavigationBar";
import SavedRecommendations from "@/components/Profiles/SavedRecommendations";
import UserProfiles from "@/components/Profiles/UserProfiles";
import Footer from "@/components/Footer";
import { auth } from "@/libs/auth";
import prisma from "@/libs/db";
import { redirect } from "next/navigation";
export default async function Profile() {
  const session = await auth();
  const recommendation = await prisma.recommendationData.findMany({
    where: {
      userID: session?.user.id,
    },
  });
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
            <SavedRecommendations
              recommendation={recommendation}
              session={session}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
