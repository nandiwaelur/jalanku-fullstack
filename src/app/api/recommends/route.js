import { auth } from "@/libs/auth";
import prisma from "@/libs/db";
import { NextResponse } from "next/server";

export const POST = auth (async function POST(request) {
    if (request.auth) {
      const {userID,recommendation_saved } = await request.json();
      const recommendSave = await prisma.recommendationData.create({
          data: {
              userID:userID,
              recommendation_saved: recommendation_saved,
          },
        });
      return NextResponse.json(
          {
            success: true,
            message: "Recommendation saved successfully!",
            data: recommendSave,
          },
          { status: 201 }
        );
    }
    return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
}
)
export async function GET() {
  //get all posts
  const recommendation = await prisma.recommendationData.findMany()
  //return response JSON
  return NextResponse.json(
    {
      sucess: true,
      message: "List Data Rekomendasi",
      data: recommendation,
    },
    {
      status: 200,
    }
  );
}