import { PROPOSAL_POST_LINK, REQUESTS_POST_LINK } from "@/utils/constants";
import { useRef, useState } from "react";
const durations = ["6 Months", "1 Year", "1 Year 6 Months", "2 Years"];
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useTheme } from "next-themes";
import { fetchHandler } from "@/utils/utils";
import Modal from "@/components/shared/Modal";
import Dropdown from "@/components/shared/Dropdown";
import RequestsForPropRequest from "./RequestsForPropRequest";
const AddLoan = ({
  toggleOpen,
  open,
  propData,
}: {
  toggleOpen: () => void;
  open: boolean;
  propData:{}
}) => {
  const [duration, setDuration] = useState(durations[0]);
  const amount = useRef<HTMLInputElement>(null);
  const minInterest = useRef(null);
  const maxInterest = useRef(null);
  const desc = useRef(null);
  const { theme } = useTheme();
console.log(propData);
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
      max_interest: parseInt(maxInterest.current.value),
      min_return_duration: dur[duration],
      max_return_duration: dur[duration],
      description: desc.current.value,
      proposal_uuid: proposalID,
    };

    fetchHandler(REQUESTS_POST_LINK, "POST", js)
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
    <Modal open={open} toggleOpen={toggleOpen} height="min-h-[1200px]" width="min-w-[1200px]">
      <RequestsForPropRequest propData={propData}/>
    </Modal>
  );
};

export default AddLoan;
