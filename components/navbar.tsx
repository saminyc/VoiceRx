"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";

export function Navbar() {
  const { isSignedIn } = useUser();

  return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-14 items-center px-4 md:px-8 justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 bg-black px-3 py-1 rounded-sm">
              <span className="font-bold text-white tracking-tight">VoiceRx</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/contact" className="text-sm font-medium text-foreground/60 hover:text-foreground">
              Contact
            </Link>
            {!isSignedIn ? (
                <div className="flex items-center gap-2">
                  <SignInButton mode="modal">
                    <Button variant="ghost">Login</Button>
                  </SignInButton>

                  <SignUpButton mode="modal">
                    <Button>Sign Up</Button>
                  </SignUpButton>
                </div>
            ) : (
                <UserButton />
            )}
          </div>
        </div>
      </header>
  );
}