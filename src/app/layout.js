import Provider from "../components/Provider";
import { auth } from "../lib/auth";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
export const metadata = {
  title: "Jalanku",
  description:
    "Ditenagai oleh kecerdasan buatan yang dibuat oleh orang dengan kecerdasan asli",
};

export default async function RootLayout({ children }) {
  const session = await auth();
  return (
    <html lang="en">
      <link rel="icon" href="/img/logo_jalanku.svg" sizes="any" />
      <Provider session={session}>
        <body>{children}</body>
      </Provider>
      <GoogleAnalytics gaId="G-WXG3TWTM12" />
    </html>
  );
}
