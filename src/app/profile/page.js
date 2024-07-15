import NavigationBar from "@/components/Navigation/NavigationBar";
import Footer from "@/components/Footer";
import { auth } from "@/libs/auth";
import { redirect } from "next/navigation";
import prisma from "@/libs/db";
import SavedRecommendations from "@/components/Profiles/SavedRecommendations";
import UserProfiles from "@/components/Profiles/UserProfiles";
import Configuration from "@/components/Profiles/Configuration";

export default async function Profile() {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  const recommendation = await prisma.recommendationData.findMany({
    where: {
      userID: session?.user.id,
    },
  });
  const rekomendasiData = recommendation.map((rekomendasi) => {
    const recommendationsArray = Object.values(
      JSON.parse(rekomendasi.recommendation_saved)
    );
    return {
      recommendations: recommendationsArray.map((rekomendasi) => ({
        destinationName: rekomendasi.destination_name,
        category: rekomendasi.category,
        image: rekomendasi.image,
        price: rekomendasi.price,
        rating: rekomendasi.rating,
      })),
    };
  });
  return (
    <>
      <div className="bg-white dark:bg-[#2F3645] bg-cover bg-top relative">
        <div className="flex justify-center bg-white dark:bg-[#2F3645] bg-cover bg-center">
          <NavigationBar />
        </div>
        <div className="w-full h-full mb-5">
          <div className="flex flex-col lg:flex-row justify-center">
            <UserProfiles session={session} />
            <SavedRecommendations rekomendasiData={rekomendasiData} />
            <Configuration/>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
