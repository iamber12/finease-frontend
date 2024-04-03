import React from "react";
import IncomeExpences from "@/components/dashboardLender/IncomeExpences";
import LatestTransactions from "@/components/dashboardLender/LatestTransactions";
import TransactionAccount from "@/components/dashboardLender/TransactionAccount";
import Statistics from "@/components/dashboardLender/Statistics";
import BannerProposal from "@/components/shared/BannerProposal";
import useDropdown from "@/utils/useDropdown";

type Props = {};

const DashboardLender = (props: Props) => {
  const { open, toggleOpen } = useDropdown();
  return (
    <div>
      <div className="flex justify-between flex-wrap items-center gap-4 mb-6 xl:mb-8">
        <div></div>
        <BannerProposal
          open={open}
          buttTitle="Quick Proposal"
          toggleOpen={toggleOpen}
          title=""
          className="mb-0 lg:mb-0"
        />
      </div>
      <div className="grid grid-cols-12 gap-4 xxl:gap-6">
        <div className="col-span-12 md:col-span-12 lg:col-span-12 flex flex-col gap-4 xxl:gap-6">
          <Statistics />
          <IncomeExpences />
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-12 flex flex-col gap-4 xxl:gap-6">
          <LatestTransactions open={open} />
          <TransactionAccount />
        </div>
      </div>
    </div>
  );
};

export default DashboardLender;
