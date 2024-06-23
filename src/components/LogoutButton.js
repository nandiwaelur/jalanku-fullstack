"use client";
import { signOut } from "next-auth/react";
export default function LogoutButton() {
  return (
    <>
      <button
        className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm r"
        onClick={() => signOut("google")}
      >Keluar</button>
    </>
  );
}
