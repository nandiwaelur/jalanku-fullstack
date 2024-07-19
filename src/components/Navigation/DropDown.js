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
              <Menu className="size-10 dark:text-white" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="bg-white border-none">
            <nav className="grid gap-6 text-lg font-medium">
              <div size="icon" className="rounded-full">
                <Link href="/profile">
                  <img
                    src={session?.user?.image || "/img/default-avatar.png"}
                    className="inline-block size-10 rounded-full"
                  />
                </Link>
              </div>
              {session ? (
                <>
                  <Link href="/recommends" className="hover:text-[#1ea774]">
                    Rekomendasi
                  </Link>
                  <btn
                    className="hover:text-[#1ea774]"
                    onClick={() => signOut("google")}
                  >
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
              <Link href="/about" className="hover:text-[#1ea774]">
                Tentang
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
