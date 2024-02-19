import "@/public/fonts/css/line-awesome.min.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Next13NProgress } from "nextjs13-progress";
import ThemeProvider from "@/utils/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FinEase - Connect. Lend. Borrow",
  description: "FinEase - Connect. Lend. Borrow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-n500 dark:text-n30`}>
        <ThemeProvider>
          <div>
            <Next13NProgress color="#20B757" height={3} />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
