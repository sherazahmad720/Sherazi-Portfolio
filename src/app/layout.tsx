import Profile from "@/components/Profile";
import SideMenu from "@/components/SideMenu";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sherazi | Flutter Developer",
  description:
    "Flutter Developer having experience in building mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7700197525069981"
        crossOrigin="anonymous"></script>


      <meta name="google-adsense-account" content="ca-pub-7700197525069981" >
      </meta>
      <body>

        <div className="flex h-screen w-screen bg-red-400 gap-5">
          <Profile />

          <div className="overflow-y-scroll  flex-grow">{children}</div>
          <SideMenu />
        </div>
      </body>
    </html>
  );
}
