"use client";
import { signIn } from "next-auth/react";
export default function LoginButton() {
  return (
    <>
      <button
        className="flex h-full items-center gap-3 bg-black p-3 rounded-lg"
        onClick={() => signIn("google")}
      >
        <img
          src="https://docs.material-tailwind.com/icons/google.svg"
          alt="metamask"
          className="h-6 w-6"
        />
        <h1 className="text-white">Continue with Google</h1>
      </button>
    </>
  );
}
