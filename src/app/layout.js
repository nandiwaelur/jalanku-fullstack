import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Toaster } from "@/components/shadcn/ui/toaster";
export const metadata = {
  title: "Jalanku",
  description:
    "Ditenagai oleh kecerdasan buatan yang dibuat oleh orang dengan kecerdasan asli",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/img/logo_jalanku.svg" sizes="any" />
      <body
        className="[&::-webkit-scrollbar]:w-2
                [&::-webkit-scrollbar-track]:rounded-full
              [&::-webkit-scrollbar-track]:bg-white
                [&::-webkit-scrollbar-thumb]:rounded-full
              [&::-webkit-scrollbar-thumb]:bg-[#1EB47D]"
      >
        {children}
        <Toaster/>
      </body>
      <GoogleAnalytics gaId="G-WXG3TWTM12" />
    </html>
  );
}
