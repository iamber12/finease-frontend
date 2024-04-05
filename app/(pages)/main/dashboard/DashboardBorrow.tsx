import React from "react";
import IncomeExpences from "@/components/dashboardBorrow/IncomeExpences";
import LatestTransactions from "@/components/dashboardBorrow/LatestTransactions";
import Statistics from "@/components/dashboardBorrow/Statistics";

type Props = {};

const DashboardBorrow = (props: Props) => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4 xxl:gap-6">
        <div className="col-span-12 md:col-span-12 lg:col-span-12 flex flex-col gap-4 xxl:gap-6">
          <Statistics />
          <IncomeExpences />
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-12 flex flex-col gap-4 xxl:gap-6">
          <LatestTransactions limitRows />
        </div>
      </div>
    </div>
  );
};

export default DashboardBorrow;
