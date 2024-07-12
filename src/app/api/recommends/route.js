import prisma from "@/libs/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    const {recommendation_saved} = await request.json();
    const recommendSave = await prisma.recommendation_data.create({
        data: {
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