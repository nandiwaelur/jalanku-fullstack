import { GoogleAnalytics } from "@next/third-parties/google";
import PrelineScript from "@/components/PrelineScript";
import "./globals.css";
export const metadata = {
  title: "Jalanku",
  description:
    "Ditenagai oleh kecerdasan buatan yang dibuat oleh orang dengan kecerdasan asli",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["jalanku", "wisata"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "nandiwaelur" },
    {
      name: "nandiwaelur",
      url: "https://www.github.com/nandiwaelur",
    },
  ],
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-128x128.png" },
    { rel: "icon", url: "icons/icon-128x128.png" },
  ],
};

export default function RootLayout({ children }) {
  // const session = await auth();
  return (
    <html lang="en">
      <link rel="icon" href="/img/logo_jalanku.svg" sizes="any" />
      <body>{children}</body>
      {/* <Provider session={session}>
      </Provider> */}
      <GoogleAnalytics gaId="G-WXG3TWTM12" />
      <PrelineScript />
    </html>
  );
}
