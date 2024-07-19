import NavigationBar from "@/components/Navigation/NavigationBar";
import SavedRecommendations from "@/components/Profiles/SavedRecommendations";
import UserProfiles from "@/components/Profiles/UserProfiles";
import Footer from "@/components/Footer";
import { auth } from "@/libs/auth";
import prisma from "@/libs/db";
import { redirect } from "next/navigation";
export default async function Profile({ searchParams }) {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  const page = parseInt(searchParams.page) || 1;
  const pageSize = parseInt(searchParams.pageSize) || 3;
  const [recommendations, totalRecommendations] = await Promise.all([
    prisma.recommendationData.findMany({
      where: {
        userID: session?.user.id,
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
    prisma.recommendationData.count({
      where: {
        userID: session?.user.id,
      },
    }),
  ]);
  const totalPages = Math.ceil(totalRecommendations / pageSize);
  return (
    <>
      <div className="bg-white dark:bg-[#2F3645] bg-cover bg-top relative">
        <div className="flex justify-center bg-white dark:bg-[#2F3645] bg-cover bg-center">
          <NavigationBar />
        </div>
        <div className="w-full h-full mb-5">
          <div className="flex md:flex-col flex-col-reverse mt-5 mb-5 lg:flex-row justify-center">
            <UserProfiles session={session} />
            <SavedRecommendations
              recommendations={recommendations}
              session={session}
              page={page}
              pageSize={pageSize}
              totalPages={totalPages}
              totalRecommendations={totalRecommendations}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
