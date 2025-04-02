import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import ClientBody from "./ClientBody"; // Fixed to default import

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Journalist - AI Article Writer for SEO",
  description: "Generate SEO-optimized articles with AI, automatically publish to your blog, and boost your organic traffic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
