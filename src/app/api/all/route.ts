import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET(request: Request) {
    const entries = await prisma.feedback.findMany()
    console.log(entries);
    return NextResponse.json(entries)
}