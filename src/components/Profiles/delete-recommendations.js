"use server"
import prisma from "@/libs/db";
import { revalidatePath } from "next/cache";
export default async function deleteRecommendations(id) {
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
