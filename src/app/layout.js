import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';
export const metadata = {
  title: "Jalanku",
  description: "Ditenagai oleh kecerdasan buatan yang dibuat oleh orang dengan kecerdasan asli",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/img/logo_jalanku.svg" sizes="any" />
      <body>{children}</body>
      <GoogleAnalytics gaId="G-WXG3TWTM12" />
    </html>
  );
}
