import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PlateStudio — Restaurant Web Design Portfolio",
  description: "Restaurant web design agency portfolio with live design previews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
