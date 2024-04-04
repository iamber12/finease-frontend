"use client";
import { useLayout } from "@/utils/LayoutContext";
import cn from "@/utils/cn";
import Link from "next/link";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const { layout } = useLayout();
  return (
    <footer
      className={cn("bg-n0 footer dark:bg-bg4", {
        "xl:ml-[300px] xxl:ml-[350px] min-[1720px]:pl-12 4xl:pl-20":
          layout == "Detached",
      })}
    >
      <div
        className={`py-5 px-4 xxl:px-8 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-3 ${
          layout == "Horizontal" && "max-w-[1700px] mx-auto xxl:px-3"
        } `}
      >
        <p className="text-sm lg:text-base max-md:text-center max-md:w-full">
          Copyright ©{new Date().getFullYear()}{" "}
          <Link className="text-primary" href="/">
            FinEase
          </Link>
          . Designed By{" "}
          <Link href="#" className="text-secondary1">
            Group 18
          </Link>
        </p>
        <div className="max-md:w-full max-md:flex justify-center">
          <SocialLinks />
        </div>

        <ul className="flex gap-3 lg:gap-4 text-sm lg:text-base max-lg:justify-center max-lg:w-full">
          <li>
            <Link href="/main/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="#">Terms of condition</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
