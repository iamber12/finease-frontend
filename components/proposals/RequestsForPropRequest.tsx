"use client";
import Dropdown from "@/components/shared/Dropdown";
import Pagination from "@/components/shared/Pagination";
import { USER_DATA, REQUESTS_CONTROL } from "@/utils/constants";
import usePagination from "@/utils/usePagination";
import { fetchHandler } from "@/utils/utils";
import { IconSelector } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import Loading from "@/app/loading";
import { useAuth } from "../auth/UserContext";
enum TransactionStatus {
  Accepted = "accepted",
  Rejected = "rejected",
}

type Deposit = {
  id: number;
  title: string;
  invoice: string;
  medium: string;
  date: string;
  time: string;
  money: number;
  status: TransactionStatus;
};
type Order = "ASC" | "DSC";

type SortDataFunction = (col: keyof Deposit) => void;

const RecentPayments = ({ propData, toggleOpen }) => {
  const [tableData, setTableData] = useState([]);
  const [userData, setUserData] = useState({});
  const [order, setOrder] = useState<Order>("ASC");
  const [loading, setLoading] = useState(false);
  const { getUser } = useAuth();

  const itemsPerPage = 8;
  const {
    currentPage,
    nextPage,
    prevPage,
    goToPage,
    startIndex,
    endIndex,
    totalPages,
  } = usePagination(tableData.length, itemsPerPage);

  const displayedData = tableData.slice(startIndex, endIndex + 1);

  const AcceptHandler = async (
    name: string,
    amount: string,
    description: string,
    req_uuid: string,
    loan_prop_uuid: string,
    borrower_uuid: string
  ) => {
    setLoading(true);
    const publishableKey =
      "pk_test_51P1GVmRu5bi6eCdLTKJqtLUT8kl23lKNtXgRPZWMArIttwBQiedFpUDchJqsDdCcXf61SAYCLfwxPSzUoJ5XqZWx00TIPZtS0E";
    const stripePromise = loadStripe(publishableKey);
    const stripe = await stripePromise;
    const getCurrUser = await getUser();
    console.log(getCurrUser);
    const checkoutSession = await axios.post("/api", {
      item: {
        name: "Paying to : " + name,
        description: "Loan Description : " + description,
        image: "",
        quantity: 1,
        price: amount,
      },
      req_uuid: req_uuid,
      loan_prop_uuid: loan_prop_uuid,
      borrower_uuid: borrower_uuid,
      lender_uuid: getCurrUser.uuid,
      payer_type: getCurrUser.primary_role.toLowerCase(),
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    setLoading(true);
    if (result.error) {
      alert(result.error.message);
    }
  };

  const RejectHandler = async (req_uuid: string) => {
    try {
      const res = await fetchHandler(
        `${REQUESTS_CONTROL}${req_uuid}/reject`,
        "PUT",
        null
      );
      toggleOpen();
    } catch (error) {}
  };

  const sortData: SortDataFunction = (col) => {
    const [parentCol, childCol] = col.split(".");

    if (order === "ASC") {
      const sorted = [...tableData].sort((a: any, b: any) => {
        const aValue = childCol ? a[parentCol][childCol] : a[col];
        const bValue = childCol ? b[parentCol][childCol] : b[col];

        if (typeof aValue === "string" && typeof bValue === "string") {
          return aValue.toLowerCase() > bValue.toLowerCase() ? 1 : -1;
        } else {
          return aValue > bValue ? 1 : -1;
        }
      });

      setTableData(sorted);
      setOrder("DSC");
    } else {
      const sorted = [...tableData].sort((a: any, b: any) => {
        const aValue = childCol ? a[parentCol][childCol] : a[col];
        const bValue = childCol ? b[parentCol][childCol] : b[col];

        if (typeof aValue === "string" && typeof bValue === "string") {
          return aValue.toLowerCase() < bValue.toLowerCase() ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      });

      setTableData(sorted);
      setOrder("ASC");
    }
  };

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
    if (propData.length) {
      setTableData(propData);
      propData.forEach((user) => {
        if (Object.hasOwn(user, "user_uuid")) {
          getUserData(user.user_uuid);
        }
      });
    }
  }, [propData]);

  return (
    <div className="box col-span-12 lg:col-span-6">
      <div className="flex flex-wrap gap-4  justify-between items-center bb-dashed mb-4 pb-4 lg:mb-6 lg:pb-6">
        <h4 className="h4">Requests</h4>
      </div>
      <div className="overflow-x-auto mb-4 lg:mb-6">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="bg-secondary1/5 dark:bg-bg3">
              <th
                onClick={() => sortData("title")}
                className="text-start py-5 px-6 cursor-pointer min-w-[250px]"
              >
                <div className="flex items-center gap-1">
                  User <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("title")}
                className="text-start py-5 px-6 cursor-pointer"
              >
                <div className="flex items-center gap-1">
                  Description <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("medium")}
                className="text-start py-5 min-w-[120px] cursor-pointer"
              >
                <div className="flex items-center gap-1">
                  Amount <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("money")}
                className="text-start py-5 min-w-[130px] cursor-pointer"
              >
                <div className="flex items-center gap-1">
                  Max Interest <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("status")}
                className="text-start py-5 cursor-pointer"
              >
                <div className="flex items-center gap-1">
                  Min Interest <IconSelector size={18} />
                </div>
              </th>
              <th
                onClick={() => sortData("status")}
                className="text-start py-5 cursor-pointer"
              >
                <div className="flex items-center gap-1"></div>
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((ele) => (
              <tr
                key={ele.uuid}
                className="hover:bg-primary/5 dark:hover:bg-bg3 duration-500 border-b border-n30 dark:border-n500 first:border-t"
              >
                <td className="py-5 px-6">
                  <div className="flex items-center gap-3">
                    <i className="las la-user text-primary"></i>
                    <div className="flex flex-col items-start">
                      <span className="font-medium">
                        {userData?.[ele.user_uuid]?.name}
                      </span>
                      <span className="text-sm">
                        {userData?.[ele.user_uuid]?.email}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="py-5">
                  <p className="text-medium">{ele.description}</p>
                </td>
                <td className="py-5">
                  <p className="font-medium">{ele.amount}</p>
                </td>
                <td className="py-5">
                  <span>{ele.max_interest}</span>
                </td>
                <td className="py-5">{ele.min_interest}</td>
                {ele.status.length ? (
                  <td className="py-5 flex gap-2">
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
                ) : loading ? (
                  <td className="py-5 flex items-center justify-center">
                    <div className="flex gap-2 items-center ">
                      <div className="text-sm">Redirecting...</div>
                      <div className="loader">
                        <svg viewBox="25 25 50 50">
                          <circle r="20" cy="50" cx="50"></circle>
                        </svg>
                      </div>
                    </div>
                  </td>
                ) : (
                  <td className="py-5 flex gap-2">
                    <button
                      onClick={async () => {
                        await AcceptHandler(
                          userData?.[ele.user_uuid]?.name,
                          ele.amount,
                          ele.description,
                          ele.uuid,
                          ele.proposal_uuid,
                          ele.user_uuid
                        );
                      }}
                      className="btn bg-primary px-4 py-2"
                    >
                      Accept
                    </button>
                    <button
                      onClick={async () => {
                        await RejectHandler(ele.uuid);
                      }}
                      className="btn bg-transparent px-4 py-2"
                    >
                      Reject
                    </button>
                  </td>
                )}
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
    </div>
  );
};

export default RecentPayments;
