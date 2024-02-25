"use client";
import logoIconDark from "@/public/images/logo-dark.png";
import logoDark from "@/public/images/logo-with-text-dark.png";
import logo from "@/public/images/logo-with-text.png";
import logoIcon from "@/public/images/logo.png";
import { IconArrowUpRight, IconMenu2 } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

import {
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import ModeSwitcher from "@/components/topbar/TopbarThree/ModeSwitcher";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();

  useLayoutEffect(() => {
    window.addEventListener("scroll", function () {
      if (this.window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  const searchContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className={`fixed top-0 w-full max-lg:bg-n0 dark:max-lg:bg-bg4 max-lg:shadow-lg z-10 ${
        scrolled && "bg-n0 dark:bg-bg3 shadow-lg"
      }`}>
      <nav
        className={`container top-0 flex duration-500 justify-between items-center gap-2 py-3 md:py-4 lg:py-6 xxl:py-8 ${
          scrolled && "lg:py-4 xxl:!py-5"
        }`}>
        <div className="flex items-center gap-2 sm:gap-4 xl:gap-6">
          <Link href="/" className="shrink-0">
            <Image
              width={174}
              height={38}
              src={theme == "dark" ? logoDark : logo}
              className="max-xxl:hidden"
              alt="logo"
            />
            <Image
              src={theme == "dark" ? logoIconDark : logoIcon}
              className="xxl:hidden"
              alt="logo"
            />
          </Link>
          <div className="relative" ref={searchContainerRef}>
          </div>
        </div>

        <ul
          className={`lg:flex z-20 items-center gap-4 absolute top-full lg:static ${
            menuOpen
              ? "bg-n0 dark:bg-bg4 w-full left-0 right-0 p-4 flex text-start translate-x-0 justify-start max-lg:flex-col"
              : "max-lg:hidden max-lg:-translate-x-full"
          }`}>
          <li>
            <Link href="#c-features">Core Features</Link>
          </li>
          <li>
            <Link href="#testimonials">Testimonials</Link>
          </li>
          <li>
            <Link href="#aboutus">About Us</Link>
          </li>
          <li>
            <Link href="/auth/sign-in">Login</Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <ModeSwitcher />
          <Link className="btn max-md:hidden" href="/auth/sign-up">
            Sign Up <IconArrowUpRight />
          </Link>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden">
          <IconMenu2 />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
