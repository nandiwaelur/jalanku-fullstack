"use client";
import { signOut } from "next-auth/react";
export default function LogoutButton() {
  return (
    <>
      <btn
        className="flex flex-row font-semibold text-xl text-black dark:text-white dark:hover:bg-gradient-to-r  hover:text-[#34E0A1] dark:hover:bg-clip-text dark:hover:text-transparent dark:hover:from-[#1EB47D] dark:hover:to-[#34E0A1]"
        onClick={() => signOut("google")}
      >
        Keluar
      </btn>
    </>
  );
}
