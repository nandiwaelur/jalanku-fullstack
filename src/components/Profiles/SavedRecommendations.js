import prisma from "@/libs/db";
import RecommendationsData from "./RecommendationsData";
import { revalidatePath } from "next/cache";
export default async function SavedRecommendations({ session }) {
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
      id: rekomendasi.id,
      recommendations: recommendationsArray.map((rekomendasi) => ({
        destinationName: rekomendasi.destination_name,
        category: rekomendasi.category,
        image: rekomendasi.image,
        price: rekomendasi.price,
        rating: rekomendasi.rating,
      })),
    };
  });
  const deleteRecommendation = async (res) => {
    "use server"
    const id = res
      try {
        await prisma.recommendationData.delete({
          where: {
            id:id
          },
        });
      } catch (error) {
        console.log("Error!")
    }
    revalidatePath("/profile")
  };
  return (
    <>
    <RecommendationsData rekomendasiData={rekomendasiData} deleteRecommendation={deleteRecommendation}/>
    </>
  );
}
