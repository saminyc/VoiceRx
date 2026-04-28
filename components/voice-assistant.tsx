"use client";

import { useState, useRef } from "react";
import Vapi from "@vapi-ai/web";
import { Button } from "@/components/ui/button";

export default function VoiceAssistant() {
    const [isCalling, setIsCalling] = useState(false);
    const vapiRef = useRef<Vapi | null>(null);

    const startCall = async () => {
        try {
            const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY!);
            vapiRef.current = vapi;

            setIsCalling(true);
            await vapi.start(process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID!);

            // OPTIONAL: listen for call end event
            vapi.on("call-end", () => {
                setIsCalling(false);
            });
        } catch (err) {
            console.error(err);
            setIsCalling(false);
        }
    };

    const stopCall = () => {
        if (vapiRef.current) {
            vapiRef.current.stop();
            vapiRef.current = null;
        }
        setIsCalling(false);
    };

    return (
        <div className="mt-6">
            {!isCalling ? (
                <Button onClick={startCall}>Start Voice Assistant</Button>
            ) : (
                <Button variant="destructive" onClick={stopCall}>
                    Stop Call
                </Button>
            )}
        </div>
    );
}