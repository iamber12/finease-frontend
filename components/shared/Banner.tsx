"use client";

import cn from "@/utils/cn";
import useDropdown from "@/utils/useDropdown";
import OpenAccountForm from "./OpenAccount";
import { useAuth } from "../auth/UserContext";
type BannerProps = { title?: string; className?: string };
const Banner = ({ title = "Dashboard", className }: BannerProps) => {
  const { open, toggleOpen } = useDropdown();
  return (
    <>
      <div
        className={cn(
          "flex justify-between flex-wrap items-center gap-4 mb-6 lg:mb-8",
          className
        )}
      >
        <h2 className="h2">{title}</h2>
        <button className="btn" onClick={toggleOpen}>
          <i className="las la-plus-circle text-base md:text-lg"></i>
          Quick Proposal
        </button>
      </div>
      <OpenAccountForm open={open} toggleOpen={toggleOpen} />
    </>
  );
};

export default Banner;
