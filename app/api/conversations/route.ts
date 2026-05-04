import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: Request) {
    try {
        const { userId } = await auth();

        if (!userId) {
            return new Response("Unauthorized", { status: 401 });
        }

        const { question, answer } = await req.json();

        const conversation = await prisma.conversation.create({
            data: {
                userId,
                question,
                answer,
            },
        });

        return Response.json(conversation);
    } catch (error) {
        console.error(error);
        return new Response("Error saving conversation", { status: 500 });
    }
}