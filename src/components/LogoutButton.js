"use client";
import { signOut } from "next-auth/react";
export default function LogoutButton() {
  return (
    <>
      <button
        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent hover:from-[#1EB47D] hover:to-[#34E0A1]"
        onClick={() => signOut("google")}
      >Keluar</button>
    </>
  );
}
