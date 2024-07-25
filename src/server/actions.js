"use server"
import prisma from "@/libs/db";
import { revalidatePath } from "next/cache";

export async function addRecommendation(data) {
    const {userID,recommendation_saved } = data;
    try {
        await prisma.recommendationData.create({
            data: {
                userID: userID,
                recommendation_saved: recommendation_saved,
            },
          });
    } catch (error) {
        return{
            error:("Tidak bisa menyimpan rekomendasi!")
          }
    }
    revalidatePath("/profile");
}
export async function deleteRecommendations(id) {
      try {
        await prisma.recommendationData.delete({
          where: {
            id:id
          },
        });
      } catch (error) {
        return{
          error:("Tidak bisa menghapus rekomendasi!")
        }
    }
    revalidatePath("/profile");
}
