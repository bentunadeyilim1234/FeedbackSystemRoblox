import { redirect } from "next/navigation";
import { MongoClient } from "mongodb"

require("dotenv").config()

const uri = process.env.DATABASE_URL ?? ""

export default async function Delete({params}: any) {
    const id = parseInt(params.id)
    const client = new MongoClient(uri)
    const feedbacks = client.db("roblox").collection("Feedback")
    await feedbacks.deleteOne({
        feedbackId: id
    })
    redirect("/")
}
