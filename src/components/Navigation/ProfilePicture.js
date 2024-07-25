import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import LogoutButton from "./LogoutButton";
export default function ProfilePicture({ image }) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div size="icon" className="rounded-full">
            <img
              src={image || "/img/default-avatar.png"}
              className="inline-block size-10 rounded-full"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className=" bg-white dark:bg-[#2F3645] border- border-[#34E0A1] border-2"
        >
          <DropdownMenuItem>
            {" "}
            <Link
              className="font-semibold text-xl dark:text-white dark:hover:bg-gradient-to-r  hover:text-[#34E0A1] dark:hover:bg-clip-text dark:hover:text-transparent dark:hover:from-[#1EB47D] dark:hover:to-[#34E0A1]"
              href="/profile"
            >
              Profil
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              className="font-semibold text-xl dark:text-white dark:hover:bg-gradient-to-r  hover:text-[#34E0A1] dark:hover:bg-clip-text dark:hover:text-transparent dark:hover:from-[#1EB47D] dark:hover:to-[#34E0A1]"
              href="/recommends"
            >
              Rekomendasi
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Link
                className="font-semibold text-xl dark:text-white dark:hover:bg-gradient-to-r  hover:text-[#34E0A1] dark:hover:bg-clip-text dark:hover:text-transparent dark:hover:from-[#1EB47D] dark:hover:to-[#34E0A1]"
                href="/about"
              >
                Tentang
              </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogoutButton />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
