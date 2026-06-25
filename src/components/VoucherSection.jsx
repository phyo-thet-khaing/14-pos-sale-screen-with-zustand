import useVoucherStore from "./../stores/useVoucherStore";
import VoucherCheckout from "./VoucherCheckout";
import VoucherInfo from "./VoucherInfo";
import VoucherItemList from "./VoucherItemList";
import VoucherSummary from "./VoucherSummary";

const VoucherSection = () => {
  const { items } = useVoucherStore();

  return (
    <section className="flex flex-col h-full col-span-2 bg-white dark:bg-gray-700 dark:border-gray-600">
      <h3 className="p-5 text-2xl text-gray-800 border-b border-gray-200 font-heading text-end dark:text-white dark:border-gray-600">
        Voucher Items ({items.length})
      </h3>

      <div className="flex-1 overflow-y-auto">
        <VoucherInfo />
        <VoucherItemList />
        <VoucherSummary />
      </div>

      <VoucherCheckout />
    </section>
  );
};

export default VoucherSection;
