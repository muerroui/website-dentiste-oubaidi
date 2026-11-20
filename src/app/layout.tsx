import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { getGlobalClinicSchema } from "@/data/seo";

const geistSans = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mimosasmile.ma"),
  icons: {
    icon: [{ url: "/assets/favicon-mimosa-smile.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr-MA"
      className={`${geistSans.variable} ${geistMono.variable} w-mod-js`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600&family=Geist:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="/assets/caliora-shared.css"
          precedence="shared"
        />
        <JsonLd data={getGlobalClinicSchema()} />
      </head>
      <body>
        <MotionProvider />
        {children}
      </body>
    </html>
  );
}
