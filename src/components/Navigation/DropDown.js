"use client";
import { signOut } from "next-auth/react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/shadcn/ui/sheet";
import { Button } from "@/components/shadcn/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import LoginButton from "./LoginButton";
export default function DropDown({ session }) {
  return (
    <>
      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" className="shrink-0 md:hidden size-10">
              <Menu className="size-10" color="white" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="bg-white border-none">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="/"
                className="flex items-center text-lg font-extrabold  hover:text-[#1ea774]"
              >
                Jalanku
              </Link>
              {session ? (
                <>
                  <Link href="/profile" className="hover:text-[#1ea774]">
                    Profile
                  </Link>
                  <Link href="/recommends" className="hover:text-[#1ea774]">
                    Rekomendasi
                  </Link>
                  <btn className="hover:text-[#1ea774]" onClick={() => signOut("google")}>
                    Keluar
                  </btn>
                </>
              ) : (
                <>
                  <div className="w-[45vh]">
                    <LoginButton />
                  </div>
                </>
              )}
              <Link
                href="/about"
                className="hover:text-[#1ea774]"
              >
                About
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
