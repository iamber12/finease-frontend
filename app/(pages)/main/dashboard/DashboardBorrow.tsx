import React from "react";
import IncomeExpences from "@/components/dashboardBorrow/IncomeExpences";
import LatestTransactions from "@/components/dashboardBorrow/LatestTransactions";
import TransactionAccount from "@/components/dashboardBorrow/TransactionAccount";
import Statistics from "@/components/dashboardBorrow/Statistics";
import BannerLoan from "@/components/shared/BannerLoan";
import useDropdown from "@/utils/useDropdown";

type Props = {};

const DashboardBorrow = (props: Props) => {
  const { open, toggleOpen } = useDropdown();
  return (
    <div>
      <div className="flex justify-between flex-wrap items-center gap-4 mb-6 xl:mb-8">
        <div></div>
        <BannerLoan
          open={open}
          toggleOpen={toggleOpen}
          title=""
          buttTitle="Quick Loan Request"
          className="mb-0 lg:mb-0"
        />
      </div>
      <div className="grid grid-cols-12 gap-4 xxl:gap-6">
        <div className="col-span-12 md:col-span-12 lg:col-span-12 flex flex-col gap-4 xxl:gap-6">
          <Statistics />
          <IncomeExpences />
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-12 flex flex-col gap-4 xxl:gap-6">
          <LatestTransactions limitRows/>
          <TransactionAccount />
        </div>
      </div>
    </div>
  );
};

export default DashboardBorrow;
