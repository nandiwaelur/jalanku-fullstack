import Link from "next/link";
import { auth } from "@/libs/auth";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

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
              className="flex-none text-4xl font-extrabold text-white hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent hover:from-[#1EB47D] hover:to-[#34E0A1]"
              href="/"
            >
              Jalanku.
            </Link>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border-none  bg-white  shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10"
                data-hs-collapse="#navbar-with-mega-menu"
                aria-controls="navbar-with-mega-menu"
                aria-label="Toggle navigation"
              >
                <svg
                  className="hs-collapse-open:hidden flex-shrink-0 size-10"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden flex-shrink-0 size-10"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
          <div
            id="navbar-with-mega-menu"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
              {session && (
                <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] ">
                  <button
                    id="hs-mega-menu-basic-dr"
                    type="button"
                    className="flex items-center w-full "
                  >
                    <img
                      src={session.user.image}
                      className="inline-block size-[46px] rounded-full"
                    />
                    <h1 className="text-white font-semibold text-2xl ml-3">
                      {session.user.name}
                    </h1>
                  </button>
                  <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-2  before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5 hidden">
                    <Link
                      className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent hover:from-[#1EB47D] hover:to-[#34E0A1]"
                      href={"/profile"}
                    >
                      Profil
                    </Link>
                    <LogoutButton />
                  </div>
                </div>
              )}
              {!session && <LoginButton />}
              <Link
                className="font-semibold text-2xl text-white hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent hover:from-[#1EB47D] hover:to-[#34E0A1]"
                href="/recommend"
              >
                Rekomendasi
              </Link>
              <Link className="font-semibold text-2xl text-white hover:bg-gradient-to-r hover:bg-clip-text hover:text-transparent hover:from-[#1EB47D] hover:to-[#34E0A1]" href="/about">
                About
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
