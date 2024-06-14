import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
 
function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {/* <Typography
        as="li"
        variant="h6"
        className="p-1 font-bold"
      >
        <a href="/profile" className="flex items-center text-[#ffffff] hover:text-[#6CEFBF]">
          Profil
        </a>
      </Typography> */}
      {/* <Typography
        as="li"
        variant="h6"
        className="p-1 font-bold"
      >
        <a href="/rekomendasi" className="flex items-center text-[#ffffff] hover:text-[#6CEFBF]">
          Rekomendasi
        </a>
      </Typography> */}
      <Typography
        as="li"
        variant="h6"
        className="p-1 font-bold"
      >
        <a href="/about" className="flex items-center text-[#ffffff] hover:text-[#6CEFBF]">
          Tentang
        </a>
      </Typography>
      {/* <a href="https://be-jalanku.vercel.app/auth/google">
      <Button
        size="lg"
        className="flex items-center gap-3 bg-black"
      >
        <img src="https://docs.material-tailwind.com/icons/google.svg" alt="metamask" className="h-6 w-6" />
        <h1 className="text-white">Continue with Google</h1>
      </Button>
      </a> */}
    </ul>
  );
}
 
export function NavbarCustom() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar fullWidth="true" className="bg-[#1EB47D] px-6 py-3">
      <div className="flex items-center justify-between text-[#ffffff]">
        <Typography
          as="a"
          href="/"
          variant="h4"
          className="mr-4 cursor-pointer py-1.5"
        >
          Jalanku.
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
export default NavbarCustom;