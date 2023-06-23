import UserCard from "../components/usercard"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function Home() {
  const entries = await prisma.feedback.findMany()
  prisma.$disconnect()
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">Feedbacks</h1>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
        {entries.map(function(data){
          return <UserCard 
              feedback={data.feedback} 
              userId={data.userId} 
              playerName={data.playerName} 
              feedbackId={data.feedbackId} 
              rating={data.rating}
              />
        })}
      </ul>
    </div>
  )
}
