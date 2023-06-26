import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"

require("dotenv").config()

const uri = process.env.DATABASE_URL ?? ""

async function push(pushData: any){
    const client = new MongoClient(uri)
    const feedbacks = client.db("roblox").collection("Feedback")
    const entry = await feedbacks.insertOne({
        feedbackId: Math.floor(100000 + Math.random() * 900000),
        feedback: pushData['f-body'],
        playerName: pushData['f-playerName'],
        userId: pushData['f-user'],
        rating: pushData['f-rating']
    })
    await client.close()
    return entry
}

export async function POST(request: Request) {
    await push(await (request.json()))
    
    return NextResponse.json({"status": "success"})
}