
import { Typography } from "@material-tailwind/react";
export function Footer() {
  return (
    <footer className="relative px-4 pt-8 pb-6 bg-[#]">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-6 text-center lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              JALANKU.
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
