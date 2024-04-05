import Modal from "@/components/shared/Modal";
import Image from "next/image";
type DetailsType = {
  open: boolean;
  toggleOpen: () => void;
};
const TransactionDetails = {
  Transfer: "#556443223",
  "Send To": "Felecia Brown",
  "Bank Account": "Wadk6265dlkd565",
  Date: "11 Aug, 2024",
  Time: "10:36 AM",
  "Card Number": "325 *** *** ***",
  Amount: "25,211.00 USD",
  Fee: "98 USD",
};
const DetailsModal = ({ open, toggleOpen }: DetailsType) => {
  return (
    <Modal
      open={open}
      toggleOpen={toggleOpen}
      width="max-w-[496px]"
      height="min-h-[980px]"
    >
      <div className="bb-dashed border-secondary1/20 pb-4 mb-4 lg:mb-6 lg:pb-6">
        <h4 className="h4">Transaction Details</h4>
      </div>
      <div className="py-3 px-6 bg-secondary1/5 flex items-center gap-4 mb-6 lg:mb-8">
        <Image
          src="/images/paypal-big.png"
          width={56}
          height={56}
          alt="paypal icon"
        />
        <div>
          <p className="xm:text-xl font-medium mb-2">Deposit Cash</p>
          <span className="text-sm">Payment Successful</span>
        </div>
      </div>
      <ul className="flex flex-col gap-4 bb-dashed border-secondary1/20 pb-4 mb-4 lg:mb-6 lg:pb-6">
        {Object.entries(TransactionDetails).map(([key, value]) => (
          <li key={key} className="flex justify-between">
            <span>{key}:</span> <span className="font-medium">{value}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-center gap-4 flex-wrap lg:gap-6">
        <button className="flex items-center gap-2">
          <i className="las la-download border border-n30 dark:border-n500 rounded-full bg-primary/5 p-2"></i>
          <span>Download PDF </span>
        </button>
        <button className="flex items-center gap-2">
          <i className="las la-print border border-n30 dark:border-n500 rounded-full bg-primary/5 p-2"></i>
          <span>Print PDF </span>
        </button>
      </div>
    </Modal>
  );
};

export default DetailsModal;
