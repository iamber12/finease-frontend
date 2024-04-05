"use client";
import { TRANSACTIONS_POST, REQUESTS_GET_LINK } from "@/utils/constants";
import { fetchHandler } from "@/utils/utils";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const Statistics = () => {
  const [statisticsData, setStatisticsData] = useState([
    {
      title: "Total Amount Borrowed",
      amount: "-",
      growth: "+23%",
    },
    {
      title: "Total Amount Returned",
      amount: "-",
      growth: "+12%",
    },
    {
      title: "Number of Requests",
      amount: "-",
      growth: "+12%",
    },
    {
      title: "Amount Pending",
      amount: "-",
      growth: "+100%",
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

      fin_data[0].amount = tb;
      fin_data[1].amount = tp;
      fin_data[2].amount = rb;
      fin_data[3].amount = tb - tp;

      
      fin_data[0].percent = (tb/tp*100).toFixed(2);
      fin_data[1].percent = ((tb-tp/tp*100)/1000).toFixed(2);
      fin_data[2].percent = 23.3;
      fin_data[3].percent = 12.3;


      setStatisticsData([...fin_data]);
    }

    func();
  }, []);

  const chartData: ApexOptions = {
    chart: {
      height: "100%",
      type: "area",
      sparkline: {
        enabled: true,
      },
      toolbar: {
        show: false,
      },
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 2,
      curve: "smooth",
    },
    series: [
      {
        name: "Series 1",
        data: [
          24, 26, 32, 36, 37, 44, 50, 49, 44, 40, 32, 28, 32, 34, 28, 23, 22,
          28, 34, 35,
        ],
      },
    ],
    tooltip: {
      enabled: false,
    },
    colors: ["#20B757"],
    fill: {
      colors: ["#20B757"],
      opacity: 1,
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0.3,
        gradientToColors: undefined,
        inverseColors: false,
        opacityFrom: 0.4,
        opacityTo: 0,
        stops: [0, 100],
        colorStops: [],
      },
    },
    xaxis: {
      tooltip: {
        enabled: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: 50,
      tooltip: {
        enabled: false,
        // followCursor: true
      },
      labels: {
        show: false,
      },
    },
  };

  return (
    <div className="xxl:box 4xl:p-8 p-0 xxl:p-4 grid grid-cols-8 xxl:divide-x-2 xxl:rtl:divide-x-reverse xxl:ltr:divide-n30 xxl:dark:divide-n500 xxl:divide-dashed max-xxl:gap-4">
      {statisticsData.map(({ title, amount, growth }) => (
        <div
          key={title}
          className="col-span-6 sm:col-span-3 md:col-span-6 lg:col-span-3 xxl:col-span-2 max-xxl:box flex justify-between items-center overflow-x-hidden xxl:px-4 xxl:ltr:first:pl-0 xxl:last:ltr:pr-0 gap-3"
        >
          <div>
            <p className="font-medium mb-4">{title}</p>
            <div className="flex gap-2 items-center">
              <h4 className="h4">{amount}</h4>
              <span className="text-primary text-sm flex items-center gap-1">
                <i className="las la-arrow-up text-base"></i> {growth}
              </span>
            </div>
          </div>
          <div className="max-w-[200px]">
            <ReactApexChart
              options={chartData}
              series={chartData.series}
              type="area"
              height={60}
              width={"100%"}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
