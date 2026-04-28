"use client";

import { useState } from "react";
import Vapi from "@vapi-ai/web";
import { Button } from "@/components/ui/button";

export default function VoiceAssistant() {
    const [isCalling, setIsCalling] = useState(false);

    const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY!);

    const startCall = async () => {
        try {
            setIsCalling(true);
            await vapi.start(process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID!);
        } catch (err) {
            console.error(err);
            setIsCalling(false);
        }
    };

    const stopCall = () => {
        vapi.stop();
        setIsCalling(false);
    };

    return (
        <div className="mt-6">
            {!isCalling ? (
                <Button onClick={startCall}>Start Rixey!</Button>
            ) : (
                <Button variant="destructive" onClick={stopCall}>
                    Stop Rixey
                </Button>
            )}
        </div>
    );
}