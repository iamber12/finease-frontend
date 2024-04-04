"use client";
import Dropdown from "@/components/shared/Dropdown";
import { IconSelector } from "@tabler/icons-react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  PROPOSALWITHREQUEST,
  REQUESTS_UNDER_PROPOSAL,
  REQUESTS_CONTROL,
} from "@/utils/constants";
import { fetchHandler } from "@/utils/utils";
import Action from "@/components/dashboardLender/Action";
import RequestsForPropModal from "./RequestsForPropModal";
import useDropdown from "@/utils/useDropdown";
import { useSearchParams } from "next/navigation";
import Swal from "sweetalert2";
enum TransactionStatus {
  Available = "Available",
  Unavailable = "Unavailable",
}

type ProposalWRequest = {
  uuid: string;
  amount: number;
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
const LatestTransactions = () => {
  const searchParams = useSearchParams();
  const success_stripe = searchParams.get("success");
  const cancel_stripe = searchParams.get("canceled");
  const req_uuid = searchParams.get("req_uuid");

  const [forceRefresh, setForceRefresh] = useState(false);
  const [requestsForProp, setRequestsForProp] = useState(null);
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

  const getRequests = (prop_id: string) => {
    fetchHandler(
      `${REQUESTS_UNDER_PROPOSAL}?loan_proposal_uuid=${prop_id}`,
      "GET",
      null
    )
      .then((res) =>
        setRequestsForProp({ [prop_id]: [...res.payload.loan_requests] })
      )
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
  };

  const { theme } = useTheme();
  const { open, toggleOpen } = useDropdown();

  const [tableData, setTableData] = useState<ProposalWRequest[]>([]);

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
    fetchHandler(PROPOSALWITHREQUEST, "GET", null)
      .then((res) => {
        setTableData(res.payload.loan_proposals);
        res.payload.loan_proposals.forEach((ele) => {
          getRequests(ele.uuid);
        });
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
  }, []);

  useEffect(() => {
    if (success_stripe && success_stripe == "true") {
      if (req_uuid) {
        fetchHandler(`${REQUESTS_CONTROL}${req_uuid}/accept`, "PUT", null)
          .then((res) => {
            Swal.fire({
              title: "Payment Successful",
              text: "Congratulations ! Your payment was successful.",
              icon: "success",
            });
          })
          .catch((err) => {});
      }
    }

    if (cancel_stripe && cancel_stripe == "true") {
      Swal.fire({
        title: "Payment Failed",
        text: "There was an error processing the payment. Please try again !!",
        icon: "error",
      });
    }
  }, []);

  return (
    <div className="box col-span-12 lg:col-span-6">
      <div className="flex flex-wrap gap-4  justify-between items-center bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">
        <h4 className="h4">Proposal Dashboard</h4>
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
              <th
                onClick={() => sortData("status")}
                className="text-start py-5 cursor-pointer"
              >
                <div className="flex items-center gap-1">
                  Requests <IconSelector size={18} />
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
                <td onClick={toggleOpen} className="py-2 px-6">
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
                <td
                  onClick={toggleOpen}
                  className="py-2 text-center cursor-pointer"
                >
                  {requestsForProp?.[ele.uuid]?.length}
                  <>
                    <RequestsForPropModal
                      open={open}
                      toggleOpen={toggleOpen}
                      propData={
                        requestsForProp?.[ele.uuid]
                          ? requestsForProp?.[ele.uuid]
                          : []
                      }
                    />
                  </>
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
    </div>
  );
};

export default LatestTransactions;
