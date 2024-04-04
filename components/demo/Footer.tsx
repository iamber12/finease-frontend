import Link from "next/link";
import SocialLinks from "../shared/SocialLinks";

const Footer = () => {
  return (
    <footer className="bg-n0 footer dark:bg-bg4">
      <div
        className={`py-6 px-3 flex flex-wrap justify-between items-center gap-4 container`}>
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
            <Link href="/">Terms and Conditions</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
