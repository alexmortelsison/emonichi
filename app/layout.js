import "./globals.css";
import { Fugaz_One } from "@next/font/google";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Emonichi",
  description: "Track your daily mood, every day of everyday",
};

export default function RootLayout({ children }) {
  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <h1
        style={{ fontFamily: fugaz.style.fontFamily }}
        className="text-base sm:text-lg textGradient"
      >
        Emonichi
      </h1>
    </header>
  );

  const footer = <footer className="p-4 sm:p-8">cdcdc</footer>;
  return (
    <html lang="en">
      <body
        className={
          "antialiased w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-7"
        }
      >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
