import "@/public/fonts/css/line-awesome.min.css";
import "@/public/styles/style.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Next13NProgress } from "nextjs13-progress";
import { LayoutProvider } from "@/utils/LayoutContext";
import ThemeProvider from "@/utils/ThemeProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "@/components/auth/UserContext";
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
        <AuthProvider>
          <ThemeProvider>
            <LayoutProvider>
              <div>
                <Next13NProgress color="#20B757" height={3} />
                <ToastContainer />
                {children}
              </div>
            </LayoutProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
