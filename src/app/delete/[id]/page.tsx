import { PrismaClient } from "@prisma/client";
import { redirect } from 'next/navigation';

const prisma = new PrismaClient()

export default async function Home({params}: any) {
    const id = parseInt(params.id)
    await prisma.feedback.delete({
        where: {
            feedbackId: id
        }
    }).catch(e => ({}))
    redirect("/")
}
