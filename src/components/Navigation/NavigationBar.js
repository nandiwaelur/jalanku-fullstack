import Link from "next/link";
import { auth } from "@/libs/auth";
import LoginButton from "@/components/Navigation/LoginButton";
import ProfilePicture from "@/components/Navigation/ProfilePicture";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/shadcn/ui/sheet";
import { Button } from "@/components/shadcn/ui/button";
import { Menu, } from "lucide-react";
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
            <div className="sm:hidden">
            <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                className="shrink-0 md:hidden h-8 w-8"
              >
                <Menu className="size-10" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="top"  className="bg-white">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                    Jalanku
                </Link>
                <Link
                  href="/recommends"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Rekomendasi
                </Link>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
            </div>
          </div>
          <div
            id="navbar-with-mega-menu"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              {session ? 
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
              :<LoginButton /> }
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
