import { typo as displayTypography } from '../lib/typography';
import { Forum, Manrope } from "next/font/google";
import "./tokens.css";
import "./globals.css";

const forum = Forum({
  subsets: ["cyrillic"],
  weight: "400",
  variable: "--font-forum",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["cyrillic"],
  variable: "--font-manrope",
  display: "swap",
});

import {siteUrl, homeTitle, homeDescription} from '../lib/seo';
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: homeTitle,
  description: homeDescription,
  ...(process.env.GOOGLE_SITE_VERIFICATION || process.env.YANDEX_VERIFICATION ? {verification: {google: process.env.GOOGLE_SITE_VERIFICATION, yandex: process.env.YANDEX_VERIFICATION}} : {}),
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${forum.variable} ${manrope.variable}`}>
      <body>{displayTypography(children)}</body>
    </html>
  );
}
