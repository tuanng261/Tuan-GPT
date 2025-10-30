import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TuanGPT",
  description: "Ask me anything about my background, UX design work, and experience.",
  icons: {
    icon: "/Profile.ico?v=1",
    shortcut: "/Profile.ico?v=1",
    apple: "/Profile.ico?v=1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Profile.ico?v=1" type="image/x-icon" />
        <link rel="shortcut icon" href="/Profile.ico?v=1" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/Profile.ico?v=1" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
