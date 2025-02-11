"use client";
import Dropdown from "@/components/shared/Dropdown";
import { IconSelector } from "@tabler/icons-react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  REQUESTS_DELETE_LINK,
  REQUESTS_GET_LINK,
  TRANSACTIONS_POST,
} from "@/utils/constants";
import Action from "./Action";
import { fetchHandler } from "@/utils/utils";
import RepayLenderModal from "./RepayLenderModal";
import useDropdown from "@/utils/useDropdown";
import { useSearchParams } from "next/navigation";
import Swal from "sweetalert2";
import { useAuth } from "../auth/UserContext";

enum TransactionStatus {
  Accepted = "accepted",
  Rejected = "rejected",
}

type LoanRequests = {
  uuid: string;
  amount: number;
  min_interest: number;
  max_interest: number;
  description: string;
  status: TransactionStatus;
};

type Order = "ASC" | "DSC";

type SortDataFunction = (col: keyof Transaction) => void;

const options = ["Recent", "Name", "Amount"];
const LatestTransactions = ({ limitRows }: { limitRows: boolean }) => {
  const { open, toggleOpen } = useDropdown();
  const [forceRefresh, setForceRefresh] = useState(false);
  const [modalData, setModalData] = useState({});

  const searchParams = useSearchParams();
  const success_stripe = searchParams.get("success");
  const cancel_stripe = searchParams.get("canceled");
  const req_uuid = searchParams.get("req_uuid");
  const loan_prop_uuid = searchParams.get("loan_prop_uuid");
  const borrower_uuid = searchParams.get("borrower_uuid");
  const lender_uuid = searchParams.get("lender_uuid");
  const amount = searchParams.get("amount");
  const payer_type = searchParams.get("payer_type");

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
    fetchHandler(`${REQUESTS_DELETE_LINK}${id}`, "DELETE", null)
      .then((res) => {
        toggleRefresh();
      })
      .catch((err) => {
        return toast.error(`There was an error deleting loan. Error: ${err}`, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: theme,
        });
      });
  };

  const { theme } = useTheme();
  const { currentUser } = useAuth();

  const [tableData, setTableData] = useState<LoanRequests[]>([]);

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
    fetchHandler(REQUESTS_GET_LINK, "GET", null)
      .then(async (res) => {
        const txData = await fetchHandler(TRANSACTIONS_POST, "GET", null);
        const data = txData.payload.transactions;

        const finalRequestData = res.payload.loan_requests.map((req) => {
          let temp = { ...req };
          const d = data.filter((ele) => ele.loan_request_uuid == req.uuid);
          if (d.length) {
            let val = 0;
            d.forEach((transac) => {
              if (
                transac.borrower_uuid === currentUser.uuid &&
                transac.payer_type === currentUser.primary_role.toLowerCase()
              ) {
                val = val + transac.amount;
              }
            });
            temp["amt_paid"] = val;
            temp["amt_pending"] = req.amount - val;
          }
          return temp;
        });

        setTableData(finalRequestData);
      })
      .catch(function (error) {
        return toast.error(
          `There was an error fetching requests. Error: ${error}`,
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
    function throttle(func, limit) {
      let inThrottle;
      return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    }

    if (success_stripe && success_stripe == "true") {
      if (req_uuid && loan_prop_uuid && borrower_uuid && lender_uuid) {
        const date = new Date().toJSON();
        const func = () => {
          fetchHandler(TRANSACTIONS_POST, "POST", {
            loan_proposal_uuid: loan_prop_uuid,
            loan_request_uuid: req_uuid,
            borrower_uuid: borrower_uuid,
            lender_uuid: lender_uuid,
            payer_type: payer_type,
            amount: parseFloat(amount),
            date_offered: date,
          })
            .then((res) => {
              Swal.fire({
                title: "Payment Successful",
                text: "Congratulations ! Your payment was successful.",
                icon: "success",
              });
            })
            .catch((err) => {
              console.error(err);
            });
        };

        const throttledFunc= throttle(func,1000);
        throttledFunc()
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
        <h4 className="h4">Your Recent Requests</h4>
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
                onClick={() => sortData("description")}
                className="text-start py-5 px-6 cursor-pointer"
              >
                <div className="flex items-center gap-1 text-center ">
                  Proposal <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("amount")}
                className="text-start py-5 px-6 cursor-pointer"
              >
                <div className="flex items-center gap-1 text-center ">
                  Amount <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("amount")}
                className="text-start py-5 px-6 cursor-pointer"
              >
                <div className="flex items-center gap-1 text-center ">
                  Amount Repaid <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("amount")}
                className="text-start py-5 px-6 cursor-pointer"
              >
                <div className="flex items-center gap-1 text-center ">
                  Amount Pending <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("min_interest")}
                className="text-start py-5  cursor-pointer"
              >
                <div className="flex items-center gap-1">
                  Interest Rate <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("max_interest")}
                className="text-start py-5  cursor-pointer"
              >
                <div className="flex items-center gap-1">
                  Status <IconSelector size={18} />
                </div>
              </th>
              <th className="text-start py-5 cursor-pointer">
                <div className="flex items-center gap-1"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.slice(0, 5).map((ele, index) => (
              <tr
                key={ele.description}
                className="even:bg-secondary1/5 dark:even:bg-bg3"
              >
                <td className="py-2 px-6">
                  <p className="font-medium mb-1">
                    {ele.description ? ele.description : "-"}
                  </p>
                </td>
                <td className="py-2 px-2">
                  {Object.hasOwn(ele, "proposal_uuid") ? (
                    <button className="btn btn-secondary text-xs px-4 py-2">
                      Proposal
                    </button>
                  ) : (
                    "-"
                  )}
                </td>
                <td className="py-2 px-2">${ele.amount}</td>
                <td className="py-2 px-2">${ele.amt_paid}</td>
                <td className="py-2 px-2">${ele.amt_pending}</td>
                <td className="py-2">{ele.min_interest}</td>
                {!ele.status ? (
                  <td className="py-2">-</td>
                ) : (
                  <td className="py-2 flex gap-2">
                    <span
                      className={`block text-xs w-28 xxl:w-36 text-center rounded-[30px] dark:border-n500 border border-n30 py-2 ${
                        ele.status === TransactionStatus.Accepted &&
                        "bg-primary/10 dark:bg-bg3 text-primary"
                      } ${
                        ele.status === TransactionStatus.Rejected &&
                        "bg-secondary2/10 dark:bg-bg3 text-secondary2"
                      }`}
                    >
                      {ele.status}
                    </span>
                  </td>
                )}
                <td className="py-2">
                  <div className="flex justify-center">
                    {ele.status === TransactionStatus.Accepted ? (
                      <button
                        onClick={(e) => {
                          setModalData({ ...ele });
                          toggleOpen(e);
                        }}
                        className="btn btn-secondary text-xs px-4 py-2"
                      >
                        Repay Lender
                      </button>
                    ) : (
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
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <RepayLenderModal
          open={open}
          toggleOpen={toggleOpen}
          modalData={modalData}
        />

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
      {limitRows && tableData.length > 0 && (
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
