"use client";

import { useState, useRef } from "react";
import Vapi from "@vapi-ai/web";
import { Button } from "@/components/ui/button";
import { Mic, Square, Loader2 } from "lucide-react";

export default function VoiceAssistant() {
    const [isCalling, setIsCalling] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const vapiRef = useRef<Vapi | null>(null);

    const startCall = async () => {
        try {
            setIsLoading(true);
            const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY!);
            vapiRef.current = vapi;

            await vapi.start(process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID!);
            setIsCalling(true);

            vapi.on("call-end", () => {
                setIsCalling(false);
                setIsLoading(false);
            });
        } catch (err) {
            console.error(err);
            setIsCalling(false);
            setIsLoading(false);
        } finally {
            setIsLoading(false);
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
        <div className="flex flex-col items-center gap-4">
            {!isCalling ? (
                <Button 
                    onClick={startCall} 
                    disabled={isLoading}
                    className="h-14 rounded-full bg-blue-600 px-8 text-lg font-semibold text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-blue-200 active:scale-95 disabled:opacity-70"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Connecting...
                        </>
                    ) : (
                        <>
                            <Mic className="mr-2 h-5 w-5" />
                            Start Conversation
                        </>
                    )}
                </Button>
            ) : (
                <div className="flex flex-col items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 animate-bounce rounded-full bg-red-500" style={{ animationDelay: '0ms' }} />
                        <div className="h-2 w-2 animate-bounce rounded-full bg-red-500" style={{ animationDelay: '150ms' }} />
                        <div className="h-2 w-2 animate-bounce rounded-full bg-red-500" style={{ animationDelay: '300ms' }} />
                        <span className="ml-2 text-sm font-medium text-red-500 uppercase tracking-wider">Listening</span>
                    </div>
                    <Button 
                        variant="destructive" 
                        onClick={stopCall}
                        className="h-14 rounded-full px-8 text-lg font-semibold shadow-lg transition-all active:scale-95"
                    >
                        <Square className="mr-2 h-4 w-4 fill-current" />
                        End Call
                    </Button>
                </div>
            )}
        </div>
    );
}