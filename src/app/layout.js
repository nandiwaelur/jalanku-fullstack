import Provider from "../components/Provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
export const metadata = {
  title: "Jalanku",
  description:
    "Ditenagai oleh kecerdasan buatan yang dibuat oleh orang dengan kecerdasan asli",
};

export default function RootLayout({ session, children }) {
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
