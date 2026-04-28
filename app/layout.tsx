import type { Metadata } from "next";
import {ClerkProvider} from "@clerk/nextjs";
import "./globals.css";


export const metadata: Metadata = {
  title: "VoiceRx",
  description: "AI-powered voice pharmacist that allows users to ask medication-related questions using natural speech and receive accurate, real-time responses. Built with Next.js, TypeScript, and Vapi, it leverages voice AI to simplify access to drug information, dosage guidance, and safety insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
      </ClerkProvider>
  );
}
