"use client";
import cn from "@/utils/cn";
import useDropdown from "@/utils/useDropdown";
import AddProposal from "./AddProposal";
type BannerProps = {
  title?: string;
  className?: string;
  open?: boolean;
  toggleOpen?: () => void;
  buttTitle?: string;
};
const Banner = ({
  title = "Dashboard",
  className,
  open = false,
  buttTitle = "",
  toggleOpen = () => {},
}: BannerProps) => {
  return (
    <>
      <div
        className={cn(
          "flex justify-between flex-wrap items-center gap-4 mb-6 lg:mb-8",
          className
        )}
      >
        <h2 className="h3">{title}</h2>
        <button className="btn" onClick={toggleOpen}>
          <i className="las la-plus-circle text-base md:text-lg"></i>
          {buttTitle}
        </button>
      </div>
      <AddProposal open={open} toggleOpen={toggleOpen} />
    </>
  );
};

export default Banner;
