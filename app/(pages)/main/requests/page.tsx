import React from "react";
import LatestTransactions from "@/components/dashboardBorrow/LatestTransactions";
type Props = {};
const page = (props: Props) => {

  return (
    <div>
      <LatestTransactions limitRows={false} />
    </div>
  );
};

export default page;
