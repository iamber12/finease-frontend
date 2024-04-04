"use client";
import React from "react";
import useDropdown from "@/utils/useDropdown";
import LatestTransactions from "@/components/dashboardBorrow/LatestTransactions";
type Props = {};
const page = (props: Props) => {
  const { open, toggleOpen } = useDropdown();

  return (
    <div>
      <LatestTransactions limitRows={false} open={open} />
    </div>
  );
};

export default page;
