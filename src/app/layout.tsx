import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Casaly — Phần mềm quản lý căn hộ, khách sạn, homestay",
  description:
    "Casaly giúp bạn quản lý đặt phòng, phòng, khách hàng và thu chi cho khách sạn, homestay, căn hộ dịch vụ — tất cả trong một nơi.",
  metadataBase: new URL("https://casaly.vn"),
  openGraph: {
    title: "Casaly — Phần mềm quản lý căn hộ, khách sạn, homestay",
    description:
      "Quản lý đặt phòng, phòng, khách hàng và thu chi tại một nơi duy nhất.",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${montserrat.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans">{children}</body>
    </html>
  );
}
