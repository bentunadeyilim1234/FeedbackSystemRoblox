import { NextResponse } from "next/server"
import { MongoClient } from "mongodb"

require("dotenv").config()

const uri = process.env.DATABASE_URL ?? ""


export async function GET(request: Request) {
    const client = new MongoClient(uri)
    const feedbacks = client.db("roblox").collection("Feedback")
    const entries = await feedbacks.find({}).toArray()
    return NextResponse.json(entries)
}