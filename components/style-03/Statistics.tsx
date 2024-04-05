"use client";
import cn from "@/utils/cn";
import { REQUESTS_GET_LINK, TRANSACTIONS_POST } from "@/utils/constants";
import { fetchHandler } from "@/utils/utils";
import { useState, useEffect } from "react";

const Statistics = () => {
  const [statisticsData, setStatisticsData] = useState([
    {
      title: "Total Credit",
      amount: "$- USD",
      percent: "-",
      icon: <i className="las text-3xl xl:text-5xl la-chart-bar"></i>,
      color: "text-primary",
    },
    {
      title: "Total Debit",
      amount: "$- USD",
      percent: "-",
      icon: <i className="las text-3xl xl:text-5xl la-coins"></i>,
      color: "text-secondary1",
    },
    {
      title: "Spending Goal",
      amount: "$- USD",
      percent: "-",
      icon: <i className="las text-3xl xl:text-5xl la-chart-pie"></i>,
      color: "text-primary",
    },
    {
      title: "Total Pending",
      amount: "$- USD",
      percent: "-",
      icon: <i className="las text-3xl xl:text-5xl la-chart-line"></i>,
      color: "text-secondary3",
    },
  ]);

  useEffect(() => {
    async function func() {
      const data = await fetchHandler(
        `${TRANSACTIONS_POST}received`,
        "GET",
        null
      );

      const repaidD = await fetchHandler(
        `${TRANSACTIONS_POST}sent`,
        "GET",
        null
      );

      const requests = await fetchHandler(REQUESTS_GET_LINK, "GET", null);
      const tdata = data.payload.transactions;
      const rdata = repaidD.payload.transactions;
      const reqdata = requests.payload.loan_requests;
      let tb = 0;
      let tp = 0;
      let rb = reqdata.length;

      tdata.forEach((transac) => {
        tb = tb + transac.amount;
      });

      rdata.forEach((transac) => {
        tp = tp + transac.amount;
      });

      let fin_data = [...statisticsData];

      fin_data[0].amount = "$" + tb;
      fin_data[1].amount = "$" + tp;
      fin_data[2].amount = "$" + rb;
      fin_data[3].amount = `$${tp - tb}`;


      fin_data[0].percent = (tb/tp*100).toFixed(2);
      fin_data[1].percent = ((tp-tb/tp*100)/1000).toFixed(2);
      fin_data[2].percent = 23.3;
      fin_data[3].percent = 12.3;

      setStatisticsData([...fin_data]);
    }

    func();
  }, []);

  return (
    <>
      {statisticsData.map(({ amount, percent, icon, title, color }) => (
        <div
          key={title}
          className="col-span-12 sm:col-span-6 xxxl:col-span-3 box p-4 bg-n0 dark:bg-bg4 4xl:px-8 4xl:py-6"
        >
          <div className="flex justify-between items-center mb-4 lg:mb-6 pb-4 lg:pb-6 bb-dashed">
            <span className="font-medium">{title}</span>
          </div>
          <div className="flex items-center gap-4 xl:gap-6">
            <div className="w-14 xl:w-[72px] h-14 xl:h-[72px] flex items-center justify-center bg-primary/5 text-primary border border-n30 dark:border-n500 rounded-xl">
              {icon}
            </div>
            <div>
              <h4 className="h4 mb-2 xxl:mb-4">{amount}</h4>
              <span
                className={cn(
                  "flex items-center gap-1 whitespace-nowrap",
                  color
                )}
              >
                <i className="las la-arrow-up text-lg"></i> {percent}%
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Statistics;
