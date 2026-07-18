import useVoucherStore from "../stores/useVoucherStore";
import VoucherCheckout from "./VoucherCheckout";
import VoucherInfo from "./VoucherInfo";
import VoucherItemList from "./VoucherItemList";
import VoucherSummary from "./VoucherSummary";

const VoucherSection = () => {
  const { items } = useVoucherStore();

  return (
    <section className="flex flex-col bg-white border-t  dark:bg-gray-700 dark:border-gray-600 lg:border-t-0">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200  dark:border-gray-600 sm:px-5">
        <h3 className="text-lg font-bold text-gray-800  dark:text-white sm:text-2xl">
          Voucher Items
        </h3>

        <span className="text-sm text-gray-500  dark:text-gray-300">
          ({items.length})
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 p-3 overflow-hidden  sm:p-5">
        <VoucherInfo />

        <VoucherItemList />

        <VoucherSummary />
      </div>

      {/* Checkout */}
      <VoucherCheckout />
    </section>
  );
};

export default VoucherSection;
