import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlatCall",
  description: "Discover tokens, zero-fee trading with $WIF, campaigns on Robinhood Chain",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}