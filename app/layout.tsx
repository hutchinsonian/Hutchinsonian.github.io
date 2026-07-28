import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jiahui Zhang — Research",
  description:
    "The personal academic homepage of Jiahui Zhang: research, publications, and technical notes.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
