import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';
export const metadata = {
  title: "Jalanku",
  description: "Jalanku keren",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <GoogleAnalytics gaId="G-WXG3TWTM12" />
    </html>
  );
}
