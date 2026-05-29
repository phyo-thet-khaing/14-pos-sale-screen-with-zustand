import VoucherItemList from "./VoucherItemList";
import VoucherSummary from "./VoucherSummary";

const VoucherSection = () => {
  return (
    <section className="flex flex-col h-full col-span-2 bg-white border-l border-gray-300 dark:bg-gray-700 dark:border-gray-600">
      <h3 className="p-5 text-xl text-gray-800 font-heading text-end dark:text-white">
        Order Items
      </h3>

      <VoucherItemList />
      <VoucherSummary />
    </section>
  );
};

export default VoucherSection;
