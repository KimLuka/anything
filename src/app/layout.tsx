// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "점메추봇",
//   description: "2030 직장인을 위한 메뉴 & 식당 추천 서비스",
//   openGraph: {
//     title: "점메추봇",
//     description: "입맛 따라, 거리 따라 점심 메뉴와 식당을 추천해드립니다.",
//     type: "website",
//     locale: "ko_KR",
//     url: "https://yourdomain.com",
//     siteName: "점메추봇",
//     images: [
//       {
//         url: "/og-image.png", // public 폴더 기준
//         width: 1200,
//         height: 630,
//         alt: "점메추봇 서비스 미리보기 이미지",
//       },
//     ],
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
