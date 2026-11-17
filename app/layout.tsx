import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jiahui Zhang | Robotics",
  description:
    "Jiahui Zhang is a Ph.D. student at Fudan University researching embodied intelligence, robotic foundation models, and robot data scaling.",
  alternates: {
    canonical: "https://hutchinsonian.github.io/",
  },
  icons: {
    icon: "/favicon.svg?v=7",
    shortcut: "/favicon.svg?v=7",
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
