"use client";
import BannerProposal from "@/components/shared/BannerProposal";
import IncomeExpenseChart from "@/components/style-03/IncomeExpenseChart";
import LatestTransactions from "@/components/style-03/LatestTransactions";
import Statistics from "@/components/style-03/Statistics";
import TransactionOverview from "@/components/style-03/TransactionOverview";
import useDropdown from "@/utils/useDropdown";
import dynamic from "next/dynamic";

const LiveUsers = dynamic(() => import("@/components/style-03/Users"), {
  ssr: false,
});
const page = () => {
  const { open, toggleOpen } = useDropdown();

  return (
    <div className="flex flex-col items-end gap-2 p-2">
      <BannerProposal
        open={open}
        toggleOpen={toggleOpen}
        title=""
        buttTitle="Quick Loan Proposal"
        className="mb-0 lg:mb-0"
      />
      <div className="grid grid-cols-12 gap-4 xxl:gap-6">
        <Statistics />
        <TransactionOverview />
        <IncomeExpenseChart />
        <LatestTransactions />
        <LiveUsers />
      </div>
    </div>
  );
};

export default page;
