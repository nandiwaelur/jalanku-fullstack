import Link from "next/link";
import { auth } from "@/libs/auth";
import ProfilePicture from "@/components/Navigation/ProfilePicture";
import LoginButton from "@/components/Navigation/LoginButton";
import DropDown from "./DropDown";
export default async function NavigationBar() {
  const session = await auth();
  return (
    <>
      <header className="relative bg-transparent flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-4 ">
        <nav
          className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <Link
              className="flex-none text-4xl font-extrabold  dark:text-white dark:hover:bg-gradient-to-r  hover:text-[#34E0A1] dark:hover:bg-clip-text dark:hover:text-transparent dark:hover:from-[#1EB47D] dark:hover:to-[#34E0A1]"
              href="/"
            >
              Jalanku.
            </Link>
            <DropDown session={session}/>
          </div>
          <div className="hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              {session ? (
                <>
                  <ProfilePicture session={session} />
                  <Link
                    className="font-semibold text-xl dark:text-white dark:hover:bg-gradient-to-r  hover:text-[#34E0A1] dark:hover:bg-clip-text dark:hover:text-transparent dark:hover:from-[#1EB47D] dark:hover:to-[#34E0A1]"
                    href="/profile"
                  >
                    {session.user.name}
                  </Link>
                  <Link
                    className="font-semibold text-xl dark:text-white dark:hover:bg-gradient-to-r  hover:text-[#34E0A1] dark:hover:bg-clip-text dark:hover:text-transparent dark:hover:from-[#1EB47D] dark:hover:to-[#34E0A1]"
                    href="/recommends"
                  >
                    Rekomendasi
                  </Link>
                </>
              ) : (
                <LoginButton />
              )}
              <Link
                className="font-semibold text-xl dark:text-white dark:hover:bg-gradient-to-r  hover:text-[#34E0A1] dark:hover:bg-clip-text dark:hover:text-transparent dark:hover:from-[#1EB47D] dark:hover:to-[#34E0A1]"
                href="/about"
              >
                About
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
