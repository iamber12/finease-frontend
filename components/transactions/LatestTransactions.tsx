"use client";
import Dropdown from "@/components/shared/Dropdown";
import Pagination from "@/components/shared/Pagination";
import SearchBar from "@/components/shared/SearchBar";
import useDropdown from "@/utils/useDropdown";
import usePagination from "@/utils/usePagination";
import { IconSelector } from "@tabler/icons-react";
import Image from "next/image";
import Visa from "@/public/images/visa.png";
import { useState, useEffect } from "react";
import DetailsModal from "./DetailsModal";
import { fetchHandler, getRandomInt } from "@/utils/utils";
import { toast } from "react-toastify";
import { TRANSACTIONS_POST, USER_DATA } from "@/utils/constants";
import { useAuth } from "../auth/UserContext";
enum TransactionStatus {
  Successful = "Successful",
  Pending = "Pending",
  Cancelled = "Cancelled",
}

type Transaction = {
  id: number;
  title: string;
  icon: string;
  time: string;
  type: string;
  invoice: string;
  status: TransactionStatus;
  amount: number;
  isChecked: boolean;
};
type Order = "ASC" | "DSC";

type SortDataFunction = (col: keyof Transaction) => void;

const options = ["time", "title", "amount"];
const LatestTransactions = () => {
  const [tableData, setTableData] = useState<Transaction[]>([]);
  const [order, setOrder] = useState<Order>("ASC");
  const [selected, setSelected] = useState(options[0]);
  const [userData, setUserData] = useState({});
  const { open, toggleOpen } = useDropdown();
  const { currentUser } = useAuth();
  const itemsPerPage = 15;
  const {
    currentPage,
    nextPage,
    prevPage,
    goToPage,
    startIndex,
    endIndex,
    totalPages,
  } = usePagination(tableData.length, itemsPerPage);

  const [forceRefresh, setForceRefresh] = useState(false);

  const toggleRefresh = () => {
    setForceRefresh((prev) => !prev);
  };

  const displayedData = tableData.slice(startIndex, endIndex + 1);

  const getUserData = (user_uuid: string) => {
    fetchHandler(`${USER_DATA}${user_uuid}`, "GET", null)
      .then((res) => {
        setUserData((prevData) => {
          let val = { ...prevData, [user_uuid]: res.payload.user };
          return val;
        });
      })
      .catch((err) => {});
  };

  useEffect(() => {
    fetchHandler(TRANSACTIONS_POST, "GET", null)
      .then((res) => {
        setTableData(res.payload.transactions);
        res.payload.transactions.forEach((tran) => {
          getUserData(tran.borrower_uuid);
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
            theme: "dark",
          }
        );
      });
  }, [open, forceRefresh]);

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
  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = e.target;

    if (name === "allSelect") {
      let tempData = tableData.map((item) => {
        return { ...item, isChecked: checked };
      });
      setTableData(tempData);
    } else {
      let tempData = tableData.map((item) =>
        item.title === name ? { ...item, isChecked: checked } : item
      );
      setTableData(tempData);
    }
  };
  const onDelete = (title: string) => {
    const remained = tableData.filter((item) => item.title !== title);
    setTableData(remained);
  };

  return (
    <div className="box col-span-12 lg:col-span-6">
      <div className="flex flex-wrap gap-4  justify-between items-center bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">
        <h4 className="h4">Latest Transaction</h4>
        <div className="flex items-center gap-4 flex-wrap grow sm:justify-end">
          <div className="flex items-center gap-3 whitespace-nowrap">
            <span>Sort By : </span>
            <Dropdown
              sortFn={sortData}
              setSelected={setSelected}
              selected={selected}
              items={options}
              btnClass="rounded-[32px] lg:py-2.5"
              contentClass="w-full"
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto mb-4 lg:mb-6">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="bg-secondary1/5 dark:bg-bg3">
              <th className="text-start px-6 w-14">
                <input
                  name="allSelect"
                  type="checkbox"
                  onChange={handleSelect}
                  checked={
                    tableData.length > 0 &&
                    tableData.every((item) => item.isChecked == true)
                  }
                  className="scale-125 accent-secondary1"
                />
              </th>
              <th
                onClick={() => sortData("title")}
                className="text-start py-5 px-6 min-w-[50px] cursor-pointer"
              >
                <div className="flex items-center gap-1">
                  Borrower <IconSelector size={18} />
                </div>
              </th>
              <th className="text-start py-5 min-w-[100px]">Proposal</th>
              <th className="text-start py-5 min-w-[100px]">Request</th>
              <th className="text-start py-5 min-w-[100px]">Invoice</th>
              <th
                onClick={() => sortData("type")}
                className="text-start py-5 min-w-[100px] cursor-pointer"
              >
                <div className="flex items-center gap-1">
                  Type <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("amount")}
                className="text-start py-5 min-w-[130px] cursor-pointer"
              >
                <div className="flex items-center gap-1">
                  Transaction <IconSelector size={18} />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map(
              (
                {
                  uuid,
                  borrower_uuid,
                  title,
                  amount,
                  payer_type,
                  date_offered,
                  isChecked,
                },
                index
              ) => (
                <tr
                  key={uuid}
                  className="even:bg-secondary1/5 dark:even:bg-bg3"
                >
                  <td className="text-start px-6">
                    <input
                      type="checkbox"
                      className="scale-125 accent-secondary1"
                      checked={isChecked}
                      onChange={handleSelect}
                      name={title}
                    />
                  </td>
                  <td className="py-2 px-6">
                    <div className="flex items-center gap-3">
                      <Image
                        src={Visa}
                        width={32}
                        height={32}
                        className="rounded-full"
                        alt="payment type icon"
                      />
                      <div className="flex flex-col">
                        <p className="font-type mb-1">
                          {userData?.[borrower_uuid]?.name}
                        </p>
                        <span className="text-xs">{date_offered}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-2">
                    <button className="btn btn-secondary text-xs px-4 py-2">
                      Proposal
                    </button>
                  </td>
                  <td className="py-2">
                    <button className="btn btn-secondary text-xs px-4 py-2">
                      Request
                    </button>
                  </td>
                  <td className="py-2">#{getRandomInt(1000000, 9999999)}</td>
                  <td className="py-2">
                    {currentUser.primary_role.toLowerCase() === payer_type
                      ? "Debit"
                      : "Credit"}
                  </td>
                  <td className="py-2">${amount.toLocaleString()}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
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
      {tableData.length > 0 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          nextPage={nextPage}
          startIndex={startIndex}
          endIndex={endIndex}
          prevPage={prevPage}
          total={tableData.length}
          goToPage={(page: number) => goToPage(page)}
        />
      )}
      <DetailsModal open={open} toggleOpen={toggleOpen} />
    </div>
  );
};

export default LatestTransactions;
