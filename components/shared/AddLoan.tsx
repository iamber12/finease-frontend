import { PROPOSAL_POST_LINK } from "@/utils/constants";
import { useRef, useState } from "react";
const durations = ["6 Months", "1 Year", "1 Year 6 Months", "2 Years"];
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useTheme } from "next-themes";
import { fetchHandler } from "@/utils/utils";
import Modal from "./Modal";
import Dropdown from "./Dropdown";
const AddLoan = ({
  toggleOpen,
  open,
}: {
  toggleOpen: () => void;
  open: boolean;
}) => {
  const [duration, setDuration] = useState(durations[0]);
  const amount = useRef<HTMLInputElement>(null);
  const minInterest = useRef(null);
  const desc = useRef(null);
  const { theme } = useTheme();

  async function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();

    const dur = {
      "6 Months": 15780096,
      "1 Year 6 Months": 47340288,
      "1 Year": 31560192,
      "2 Years": 60403008,
    };

    const js = {
      amount: parseInt(amount.current.value),
      min_interest: parseInt(minInterest.current.value),
      max_interest: parseInt(minInterest.current.value),
      status: "In Process",
      min_return_duration: dur[duration],
      max_return_duration: dur[duration],
      description: desc.current.value,
    };

    fetchHandler(PROPOSAL_POST_LINK, "POST", js)
      .then(() => {
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
      .catch((error) => {
        return toast.error(
          `There was an error adding a request. Error: ${error}`,
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

  return (
    <Modal open={open} toggleOpen={toggleOpen} height="min-h-[1200px]">
      <div className="flex justify-between items-center mb-4 pb-4 bb-dashed lg:mb-6 lg:pb-6">
        <h4 className="h4">Create A New Loan Reqeust</h4>
      </div>
      <form>
        <div className="mt-6 xl:mt-8 grid grid-cols-2 gap-4 xxxl:gap-6">
          <div className="col-span-2">
            <label htmlFor="rate" className="md:text-lg font-medium block mb-4">
              Borrowing Amount
            </label>
            <input
              type="number"
              className="w-full  bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
              placeholder="Amount"
              id="rate"
              ref={amount}
              required
            />
          </div>
          <div className="col-span-2">
            <label htmlFor="rate" className="md:text-lg font-medium block mb-4">
              Interest Rate
            </label>
            <input
              type="number"
              className="w-full  bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
              placeholder="Interest Rate %"
              id="rate"
              required
              ref={minInterest}
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
              placeholder="Enter a desc. for the loan request"
              id="desc"
              minLength={2}
              required
              ref={desc}
            />
          </div>
          <div className="col-span-2 mt-4">
            <button
              onClick={handleSubmit}
              className="btn flex w-full justify-center"
              type="submit"
            >
              Create Request
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default AddLoan;
