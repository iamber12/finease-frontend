"use client";
import Footer from "@/components/shared/Footer";
import SidebarHovered from "@/components/sidebar/SidebarHovered";
import TopBarThree from "@/components/topbar/TopbarThree/TopBarThree";
import { useLayout } from "@/utils/LayoutContext";
import useWindowSize from "@/utils/useWindowSize";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const { layout } = useLayout();
  const { windowSize } = useWindowSize();

  useEffect(() => {
    if (window.innerWidth > 1200) {
      setSidebarIsOpen(true);
    } else {
      setSidebarIsOpen(false);
    }
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setSidebarIsOpen(false);
      } else {
        setSidebarIsOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* Hovered Layout */}
      <>
        <TopBarThree
          setSidebar={setSidebarIsOpen}
          sidebarIsOpen={sidebarIsOpen}
        />
        <SidebarHovered
          sidebarIsOpen={sidebarIsOpen}
          setSidebar={setSidebarIsOpen}
        />
      </>
      {/* main content  */}
      <div
        className={`pt-[72px] md:pt-20 xl:pt-[98px] transition-all duration-500 bg-secondary1/5 dark:bg-bg3  ${
          sidebarIsOpen &&
          layout == "Vertical" &&
          "xl:ltr:ml-[280px] xxxl:ltr:ml-[336px] xl:rtl:mr-[280px] xxxl:rtl:mr-[336px]"
        } ${
          sidebarIsOpen &&
          layout == "Two Column" &&
          "xl:ltr:ml-[280px] xxxl:ltr:ml-[360px] xl:rtl:mr-[280px] xxxl:rtl:mr-[360px]"
        } ${
          sidebarIsOpen && layout == "Hovered" && "xl:ltr:ml-24 xl:rtl:mr-24"
        } ${layout == "Horizontal" && windowSize! > 1400 && "!pt-[172px]"}`}>
        <div
          className={`px-3 relative sm:px-4 xxxl:px-6 py-6 lg:py-8 duration-300 ${
            layout == "Horizontal" && "max-w-[1850px] mx-auto xxl:px-3"
          } ${
            layout == "Detached" &&
            "max-w-[1850px] mx-auto xxl:px-3 grid grid-cols-12 gap-4 xxl:gap-6"
          }`}>
          <div
            className={`${layout == "Detached" && "col-span-12"} ${
              sidebarIsOpen &&
              layout == "Detached" &&
              "xl:ltr:ml-[300px] xxl:ltr:ml-[350px] xl:rtl:mr-[300px] xxl:rtl:mr-[350px]"
            }`}>
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
