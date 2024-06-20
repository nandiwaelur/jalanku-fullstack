import { Typography } from "@material-tailwind/react";
export function Footer() {
  return (
    <footer className="relative pt-8 pb-6 bg-[#1EB47D]">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-3 pb-5 text-center lg:text-left">
          <div className="w-full mt-5 lg:w-[20rem]">
            <a href="/">
              {" "}
              <Typography variant="h1" className="mb-4 font-bold" color="white">
                JALANKU
              </Typography>
            </a>
          </div>
          <div className="text-white">
            <a href="/">
              <h1 className="my-2">Faqs</h1>
            </a>
            <a href="/">
              <h1 className="my-2">Live Chat</h1>
            </a>
            <a href="/">
              <h1 className="my-2">Help Center</h1>
            </a>
          </div>
          <div className="text-white ml-5">
            <a href="/">
              <h1 className="my-2">Privacy Policy</h1>
            </a>
            <a href="/">
              <h1 className="my-2">Terms of Service</h1>
            </a>
            <a href="/">
              <h1 className="my-2">Cookie Policy</h1>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
