import IncomeExpences from "@/components/dashboard/IncomeExpences";
import LatestTransactions from "@/components/dashboard/LatestTransactions";
import TransactionAccount from "@/components/dashboard/TransactionAccount";
import Statistics from "@/components/dashboard/Statistics";
import Banner from "@/components/shared/Banner";
const page = () => {
  return (
    <div>
      <div className="flex justify-between flex-wrap items-center gap-4 mb-6 xl:mb-8">
        <div></div>
        <Banner title="" className="mb-0 lg:mb-0" />
      </div>
      <div className="grid grid-cols-12 gap-4 xxl:gap-6">
        <div className="col-span-12 md:col-span-12 lg:col-span-12 flex flex-col gap-4 xxl:gap-6">
          <Statistics />
          <IncomeExpences />
        </div>
        <div className="col-span-12 md:col-span-12 lg:col-span-12 flex flex-col gap-4 xxl:gap-6">
          <LatestTransactions />
          <TransactionAccount />
        </div>
      </div>
    </div>
  );
};

export default page;
