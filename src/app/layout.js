import { GoogleAnalytics } from "@next/third-parties/google";
import PrelineScript from "@/components/PrelineScript";
import "./globals.css";
export const metadata = {
  title: "Jalanku",
  description:
    "Ditenagai oleh kecerdasan buatan yang dibuat oleh orang dengan kecerdasan asli",
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
