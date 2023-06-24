import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function push(pushData: any){
    const entry = await prisma.feedback.create({
        data: {
            feedbackId: Math.floor(100000 + Math.random() * 900000),
            feedback: pushData['f-body'],
            playerName: pushData['f-playerName'],
            userId: pushData['f-user'],
            rating: pushData['f-rating']
        },
    })
    return entry
}

export async function POST(request: Request) {
    await push(await (request.json()))
    await prisma.$disconnect()
    return NextResponse.json({"status": "success"})
}