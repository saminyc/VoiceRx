"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";

export function Navbar() {
  const { isSignedIn } = useUser();

  return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center px-6 md:px-12 justify-between mx-auto">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="font-bold text-slate-900 tracking-tight text-xl">VoiceRx</span>
            </Link>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/about" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors">
              About
            </Link>
            {!isSignedIn ? (
                <div className="flex items-center gap-3">
                  <SignInButton mode="modal">
                    <Button variant="ghost" className="font-semibold text-slate-600 hover:text-blue-600">Login</Button>
                  </SignInButton>

                  <SignUpButton mode="modal">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl px-5">Sign Up</Button>
                  </SignUpButton>
                </div>
            ) : (
                <UserButton afterSignOutUrl="/" />
            )}
          </div>
        </div>
      </header>
  );
}