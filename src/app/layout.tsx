import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import { GlobalStyle } from "@/presentation/external/styled/global";
import { StyledProvider } from "@/presentation/external/styled/provider";

const openSans = Open_Sans({
  weight: ["400", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <StyledProvider>
        <body className={openSans.className}>{children}</body>
        <GlobalStyle/>
      </StyledProvider>
    </html>
  );
}
