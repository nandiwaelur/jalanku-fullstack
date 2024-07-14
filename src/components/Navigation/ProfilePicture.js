import Link from "next/link";
import LogoutButton from "@/components/Navigation/LogoutButton";
export default function ProfilePicture({ session }) {
  return (
    <>
      <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] ">
        <div className="flex items-center w-full ">
          <button
            id="hs-mega-menu-basic-dr"
            type="button"
            className="items-center"
          >
            <img
              src={session?.user.image}
              className="inline-block size-[46px] rounded-full"
            />
          </button>
        </div>
        <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-30 z-10 bg-white sm:shadow-md rounded-lg p-2  before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5 hidden">
          <Link
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent hover:from-[#1EB47D] hover:to-[#34E0A1]"
            href={"/profile"}
          >
            Profil
          </Link>
          <LogoutButton />
        </div>
      </div>
    </>
  );
}
