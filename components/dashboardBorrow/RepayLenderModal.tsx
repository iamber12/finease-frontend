import { PROPOSAL_POST_LINK,USER_DATA } from "@/utils/constants";
import { useRef, useState } from "react";
import { fetchHandler } from "@/utils/utils";
import Modal from "@/components/shared/Modal";
import Dropdown from "@/components/shared/Dropdown";
import { useAuth } from "../auth/UserContext";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
const RepayLenderModal = ({
  toggleOpen,
  open,
  modalData,
}: {
  toggleOpen: () => void;
  open: boolean;
}) => {
  const [loading, setLoading] = useState(false);
  const amount = useRef<HTMLInputElement>(null);
  const minInterest = useRef(null);
  const desc = useRef(null);
  const { getUser } = useAuth();

  async function handleSubmit(e: React.MouseEvent) {
    e.preventDefault();
    setLoading(true);
    const publishableKey =
      "pk_test_51P1GVmRu5bi6eCdLTKJqtLUT8kl23lKNtXgRPZWMArIttwBQiedFpUDchJqsDdCcXf61SAYCLfwxPSzUoJ5XqZWx00TIPZtS0E";
    const stripePromise = loadStripe(publishableKey);
    const stripe = await stripePromise;
    const getCurrUser = await getUser();
    const propData = await fetchHandler(`${PROPOSAL_POST_LINK}${modalData.proposal_uuid}`,"GET",null)
    const lenderUserData = await fetchHandler(`${USER_DATA}${propData.payload.loan_proposal.user_uuid}`,"GET",null)
    const checkoutSession = await axios.post("/api", {
      item: {
        name: "Paying to : " + lenderUserData.payload.user.name,
        description: "Loan Description : " + desc.current.value,
        image: "",
        quantity: 1,
        price: amount.current.value,
      },
      req_uuid: modalData.uuid,
      loan_prop_uuid: modalData.proposal_uuid,
      borrower_uuid: getCurrUser.uuid,
      lender_uuid: propData.payload.loan_proposal.user_uuid,
      payer_type: getCurrUser.primary_role.toLowerCase(),
      from:"requests"
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    setLoading(true);
    if (result.error) {
      alert(result.error.message);
    }
  }

  return (
    <Modal open={open} toggleOpen={toggleOpen} height="min-h-[1200px]">
      <div className="flex justify-between items-center mb-4 pb-4 bb-dashed lg:mb-6 lg:pb-6">
        <h4 className="h4">Repay Loan</h4>
      </div>
      <form>
        <div className="mt-6 xl:mt-8 grid grid-cols-2 gap-4 xxxl:gap-6">
          <div className="col-span-2">
            <label htmlFor="rate" className="md:text-lg font-medium block mb-4">
              Amount
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
            <label htmlFor="desc" className="md:text-lg font-medium block mb-4">
              Enter a description
            </label>
            <textarea
              className="w-full  bg-secondary1/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-6 py-2.5 md:py-3"
              placeholder="Enter a desc. for the payment"
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
              Repay
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default RepayLenderModal;
