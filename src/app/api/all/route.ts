import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET(request: Request) {
    const entries = await prisma.feedback.findMany()
    return NextResponse.json(entries)
}