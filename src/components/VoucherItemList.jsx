import useVoucherStore from "../stores/useVoucherStore";
import VoucherItem from "./VoucherItem";

const VoucherItemList = () => {
  const { items = [] } = useVoucherStore();

  return (
    <div
      className="
        flex-1
        overflow-y-auto

        max-h-[45vh]

        sm:max-h-[55vh]

        lg:max-h-[60vh]
      "
    >
      {items.length === 0 ? (
        <div className="p-4">
          <div className="flex flex-col items-center justify-center p-5 border border-gray-300 rounded-lg  dark:border-gray-600">
            <img
              src="/Images/Empty-amico.svg"
              alt="Empty"
              className=" h-28 w-28 sm:h-32 sm:w-32"
            />

            <p className="mt-3 text-xs text-center text-gray-500  dark:text-gray-400">
              No voucher items
            </p>
          </div>
        </div>
      ) : (
        items.map((item) => <VoucherItem key={item.id} item={item} />)
      )}
    </div>
  );
};

export default VoucherItemList;
