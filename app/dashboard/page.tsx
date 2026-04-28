import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import VoiceAssistant from "@/components/voice-assistant";

const Dashboard = async () => {
    const {userId}=await auth();

    if(!userId){
        redirect("/sign-in");
    }

    return (
        <main>
        <h1>VoiceRx</h1>
        <p>Ask general medication question using voice</p>
            <VoiceAssistant/>
        </main>
    )
}

export default Dashboard;