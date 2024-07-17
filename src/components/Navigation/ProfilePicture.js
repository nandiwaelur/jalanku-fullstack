"use client";
import { signOut } from "next-auth/react";
import { Button } from "@/components/shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import Link from "next/link";
export default function ProfilePicture({ session }) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div variant="secondary" size="icon" className="rounded-full">
            <img
              src={session.user.image}
              className="inline-block size-10 rounded-full"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="bg-white dark:bg-[#2F3645]">
          <DropdownMenuLabel>
            {" "}
            <Link
              className="font-semibold text-xl dark:text-white dark:hover:bg-gradient-to-r  hover:text-[#34E0A1] dark:hover:bg-clip-text dark:hover:text-transparent dark:hover:from-[#1EB47D] dark:hover:to-[#34E0A1]"
              href="/profile"
            >
              Profile
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuItem>
            {" "}
            <btn
              className="font-semibold text-xl dark:text-white dark:hover:bg-gradient-to-r  hover:text-[#34E0A1] dark:hover:bg-clip-text dark:hover:text-transparent dark:hover:from-[#1EB47D] dark:hover:to-[#34E0A1]"
              onClick={() => signOut("google")}
            >
              Keluar
            </btn>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
