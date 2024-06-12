import "./globals.css";
export const metadata = {
  title: "Jalanku",
  description: "Jalanku keren",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
