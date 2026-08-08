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

export const metadata = {
  title: "MuratovaLife | Светлана Муратова",
  description:
    "Психолог Светлана Муратова. Обучение и развитие для детей и подростков и пространство эмоционального восстановления.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${forum.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
