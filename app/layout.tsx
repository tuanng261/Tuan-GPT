import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tuan Nguyen - UX Designer • Tech Sales • D1 Vibecoder",
  description: "Ask me anything about my background, UX design work, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
