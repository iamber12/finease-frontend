import Dropdown from "@/components/shared/Dropdown";
import Modal from "@/components/shared/Modal";
import placeholder from "@/public/images/placeholder.png";
import { PROPOSAL_POST_LINK } from "@/utils/constants";
import Image from "next/image";
import { FocusEvent, useRef, useState } from "react";
const durations = ["6 Months", "1 Year", "1 Year 6 Months", "2 Years"];
const statuses = ["Available", "Unavailable"];
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useTheme } from "next-themes";
import { useAuth } from "../auth/UserContext";

const OpenAccountForm = ({
  toggleOpen,
  open,
}: {
  toggleOpen: () => void;
  open: boolean;
}) => {
  const [duration, setDuration] = useState(durations[0]);
  const [status, setStatus] = useState(statuses[0]);
  const minAmount = useRef<HTMLInputElement>(null);
  const maxAmount = useRef(null);
  const minInterest = useRef(null);
  const maxInterest = useRef(null);
  const desc = useRef(null);
  const { theme } = useTheme();
  const { getToken } = useAuth();



  async function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();

    const dur = {
      "6 Months": 15780096,
      "1 Year 6 Months": 47340288,
      "1 Year": 31560192,
      "2 Years": 60403008,
    };

    const js = {
      amount_start: parseInt(minAmount.current.value),
      amount_end: parseInt(maxAmount.current.value),
      min_interest: parseInt(minInterest.current.value),
      max_interest: parseInt(maxInterest.current.value),
      status: status,
      min_return_duration: dur[duration],
      max_return_duration: dur[duration],
      description: desc.current.value,
    };

    const token = await getToken();
    if (token) {
      fetch(PROPOSAL_POST_LINK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Access-Token": token,
        },
        body: JSON.stringify(js),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error("Something went wrong");
        })
        .then((res) => {
          Swal.fire({
            title: "Successfully Submitted",
            text: "",
            icon: "success",
            showCancelButton: false,
            showConfirmButton: false,
            confirmButtonColor: "#20B757",
            cancelButtonColor: "#FF6161",
            confirmButtonText: "Ok",
            timer: 5000,
            timerProgressBar: true,
            willClose: toggleOpen,
          }).then((result) => {
            if (result.isConfirmed) {
              toggleOpen();
            }
          });
        })
        .catch(function (error) {
          return toast.error(
            `There was an error registering. Error: ${error}`,
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
    }
  };

  return (
    <Modal open={open} toggleOpen={toggleOpen} height="min-h-[1200px]">
      <div className="flex justify-between items-center mb-4 pb-4 bb-dashed lg:mb-6 lg:pb-6">
        <h4 className="h4">Create A Loan Proposal</h4>
      </div>
      <form>
        <div className="mt-6 xl:mt-8 grid grid-cols-2 gap-4 xxxl:gap-6">
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="rate" className="md:text-lg font-medium block mb-4">
              Min. Lending Amount
            </label>
            <input
              type="number"
              className="w-full  bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
              placeholder="Min Amount"
              id="rate"
              ref={minAmount}
              required
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="rate" className="md:text-lg font-medium block mb-4">
              Max. Lending Amount
            </label>
            <input
              type="number"
              className="w-full  bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
              placeholder="Max Amount"
              id="rate"
              ref={maxAmount}
              required
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="rate" className="md:text-lg font-medium block mb-4">
              Min. Interest Rate
            </label>
            <input
              type="number"
              className="w-full  bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
              placeholder="Min Interest Rate %"
              id="rate"
              required
              ref={minInterest}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="rate" className="md:text-lg font-medium block mb-4">
              Max. Interest Rate
            </label>
            <input
              type="number"
              className="w-full  bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
              placeholder="Max Interest Rate %"
              id="rate"
              required
              ref={maxInterest}
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="currency"
              className="md:text-lg font-medium block mb-4"
            >
              Select Loan Duration
            </label>
            <Dropdown
              items={durations}
              setSelected={setDuration}
              selected={duration}
              btnClass="rounded-[32px] bg-secondary1/5 dark:bg-bg3 py-2.5 md:py-3 md:px-5"
              contentClass="w-full"
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="desc" className="md:text-lg font-medium block mb-4">
              Enter a description
            </label>
            <textarea
              className="w-full  bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
              placeholder="Enter a desc. for the proposal"
              id="desc"
              minLength={2}
              required
              ref={desc}
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="status"
              className="md:text-lg font-medium block mb-4"
            >
              Select Status
            </label>
            <Dropdown
              items={statuses}
              setSelected={setStatus}
              selected={status}
              btnClass="rounded-[32px] bg-primary/5 dark:bg-bg3 md:py-3 md:px-5 text-primary"
              contentClass="w-full"
            />
          </div>
          <div className="col-span-2 mt-4">
            <button
              onClick={handleSubmit}
              className="btn flex w-full justify-center"
              type="submit"
            >
              Create Proposal
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default OpenAccountForm;
