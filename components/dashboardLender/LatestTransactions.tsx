"use client";
import Dropdown from "@/components/shared/Dropdown";
import { IconSelector } from "@tabler/icons-react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { PROPOSAL_GET_LINK } from "@/utils/constants";
import { fetchHandler } from "@/utils/utils";
import Action from "./Action";
enum TransactionStatus {
  Available = "Available",
  Unavailable = "Unavailable",
}

type Proposal = {
  uuid: string;
  amount_start: number;
  amount_end: number;
  min_interest: number;
  max_interest: number;
  min_return_duration: number;
  max_return_duration: number;
  description: string;
  status: TransactionStatus;
};

type Order = "ASC" | "DSC";

type SortDataFunction = (col: keyof Transaction) => void;

const options = ["Recent", "Name", "Amount"];
const LatestTransactions = ({ open }: { open: boolean }) => {
  const [forceRefresh, setForceRefresh] = useState(false);

  const toggleRefresh = () => {
    setForceRefresh((prev) => !prev);
  };
  const dur = {
    15780096: "6 Months",
    47340288: "1 Year 6 Months",
    31560192: "1 Year",
    60403008: "2 Years",
  };

  const onDelete = (id: string) => {
    fetchHandler(`${PROPOSAL_GET_LINK}${id}`, "DELETE", null)
      .then((res) => {
        toggleRefresh();
      })
      .catch((err) => {
        return toast.error(
          `There was an error deleting proposal. Error: ${err}`,
          {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: theme,
          }
        );
      });
  };

  const { theme } = useTheme();

  const [tableData, setTableData] = useState<Proposal[]>([]);

  const [order, setOrder] = useState<Order>("ASC");
  const [selected, setSelected] = useState(options[0]);
  const sortData: SortDataFunction = (col) => {
    if (order == "ASC") {
      const sorted = [...tableData].sort((a, b) => {
        if (typeof a[col] === "string" && typeof b[col] === "string") {
          return (a[col] as string).toLowerCase() >
            (b[col] as string).toLowerCase()
            ? 1
            : -1;
        } else {
          return a[col] > b[col] ? 1 : -1;
        }
      });
      setTableData(sorted);
      setOrder("DSC");
    } else {
      const sorted = [...tableData].sort((a, b) => {
        if (typeof a[col] === "string" && typeof b[col] === "string") {
          return (a[col] as string).toLowerCase() <
            (b[col] as string).toLowerCase()
            ? 1
            : -1;
        } else {
          return a[col] < b[col] ? 1 : -1;
        }
      });
      setTableData(sorted);
      setOrder("ASC");
    }
  };

  useEffect(() => {
    fetchHandler(PROPOSAL_GET_LINK, "GET", null)
      .then((res) => {
        setTableData(res.payload.loan_proposals);
      })
      .catch(function (error) {
        return toast.error(
          `There was an error fetching proposals. Error: ${error}`,
          {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: theme,
          }
        );
      });
  }, [open, forceRefresh]);

  return (
    <div className="box col-span-12 lg:col-span-6">
      <div className="flex flex-wrap gap-4  justify-between items-center bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">
        <h4 className="h4">Recent Proposals</h4>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 whitespace-nowrap">
            <span>Sort By : </span>
            <Dropdown
              setSelected={setSelected}
              selected={selected}
              items={options}
              btnClass="rounded-[32px] bg-secondary1/5 md:py-2.5"
              contentClass="w-full"
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="bg-secondary1/5 dark:bg-bg3">
              <th
                onClick={() => sortData("description")}
                className="text-start py-5 px-6 cursor-pointer min-w-[330px]"
              >
                <div className="flex items-center gap-1 text-center ">
                  Description <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("amount_start")}
                className="text-start py-5 min-w-[120px] cursor-pointer"
              >
                <div className="flex items-center gap-1">
                  Min Amt. <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("amount_end")}
                className="text-start py-5 min-w-[120px] cursor-pointer"
              >
                <div className="flex items-center gap-1">
                  Max Amt. <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("min_interest")}
                className="text-start py-5 min-w-[120px] cursor-pointer"
              >
                <div className="flex items-center gap-1">
                  Min Interest. <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("max_interest")}
                className="text-start py-5 min-w-[120px] cursor-pointer"
              >
                <div className="flex items-center gap-1">
                  Max Interest. <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("min_return_duration")}
                className="text-start py-5 min-w-[120px] cursor-pointer"
              >
                <div className="flex items-center gap-1">
                  Min Duration. <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("max_return_duration")}
                className="text-start py-5 min-w-[120px] cursor-pointer"
              >
                <div className="flex items-center gap-1">
                  Max Duration. <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("status")}
                className="text-start py-5 cursor-pointer"
              >
                <div className="flex items-center gap-1">
                  Status <IconSelector size={18} />
                </div>
              </th>
              <th className="text-start py-5 min-w-[120px] cursor-pointer">
                <div className="flex items-center gap-1">Action</div>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.slice(0, 10).map((ele, index) => (
              <tr
                key={ele.description}
                className="even:bg-secondary1/5 dark:even:bg-bg3"
              >
                <td className="py-2 px-6">
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-medium mb-1">{ele.description}</p>
                      {/* <span className="text-xs">{time}</span> */}
                    </div>
                  </div>
                </td>
                <td className="py-2">${ele.amount_start}</td>
                <td className="py-2">${ele.amount_end}</td>
                <td className="py-2">{ele.min_interest}%</td>
                <td className="py-2">{ele.max_interest}%</td>
                <td className="py-2">{dur[ele.min_return_duration]}</td>
                <td className="py-2">{dur[ele.max_return_duration]}</td>
                <td className="py-2">
                  <span
                    className={`block text-xs w-28 xxl:w-36 text-center rounded-[30px] dark:border-n500 border border-n30 py-2 ${
                      ele.status === TransactionStatus.Available &&
                      "bg-primary/10 dark:bg-bg3 text-primary"
                    } ${
                      ele.status === TransactionStatus.Unavailable &&
                      "bg-secondary2/10 dark:bg-bg3 text-secondary2"
                    }`}
                  >
                    {ele.status}
                  </span>
                </td>
                <td className="py-2">
                  <div className="flex justify-center">
                    <Action
                      onDelete={() => {
                        onDelete(ele.uuid);
                      }}
                      onEdit={() => {}}
                      fromBottom={
                        index == tableData.length - 1 ||
                        index == tableData.length - 2
                      }
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {tableData.length < 1 && (
          <div className="text-center py-10">
            <div className="text-center mx-auto max-w-[500px] max-md:flex flex-col items-center">
              <div className="px-5 lg:px-14 xl:px-24 mb-5">
                <i className="las text-primary la-search text-7xl"></i>
              </div>
              <h3 className="h3 mb-3 lg:mb-6">No matching results</h3>
              <p>
                Looks like we couldn&nbsp;t find any matching results for your
                search terms. Try other search terms.
              </p>
            </div>
          </div>
        )}
      </div>
      {tableData.length > 0 && (
        <div className="flex items-center gap-1">
          <div className="mt-6">Showing top 10 entries. Click to</div>
          <Link
            className="text-primary font-semibold inline-flex gap-1 items-center mt-6 group"
            href="#"
          >
            See More{" "}
            <i className="las la-arrow-right group-hover:pl-2 duration-300"></i>
          </Link>
        </div>
      )}
    </div>
  );
};

export default LatestTransactions;
