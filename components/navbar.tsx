"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";

export function Navbar() {
  const { isSignedIn } = useUser();

  return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-6 md:px-12">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <span className="text-xl font-bold text-white">V</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
            VoiceRx
          </span>
          </Link>

          <div className="flex items-center gap-6">
            {isSignedIn && (
                <>
                  <Link
                      href="/dashboard"
                      className="text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600"
                  >
                    VoiceRx
                  </Link>

                  <Link
                      href="/contact"
                      className="text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600"
                  >
                    Contact
                  </Link>
                </>
            )}

            {!isSignedIn ? (
                <div className="flex items-center gap-3">
                  <SignInButton mode="modal">
                    <Button variant="ghost" className="font-semibold text-slate-600 hover:text-blue-600">
                      Login
                    </Button>
                  </SignInButton>

                  <SignUpButton mode="modal">
                    <Button className="rounded-xl bg-blue-600 px-5 font-semibold text-white hover:bg-blue-700">
                      Sign Up
                    </Button>
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