"use client";
import { signIn } from "next-auth/react";
export default function LoginButton() {
  return (
    <>
      <button
        size="lg"
        id="hs-mega-menu-basic-dr" type="button"
        className="flex items-center gap-3 bg-black p-3 rounded-lg"
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
