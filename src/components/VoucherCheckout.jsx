import useVoucherStore from "../stores/useVoucherStore";

const VoucherCheckout = () => {
  const { information, items, reset } = useVoucherStore();

  const handleClick = () => {
    console.log({ items, information });
    reset();
  };

  return (
    <div className="mt-auto px-4 sm:px-5">
      <div
        className="
          flex
          flex-col
          gap-2
          mb-4

          sm:flex-row
          sm:justify-end
          sm:gap-4
        "
      >
        {/* Dine In */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="order-type"
            value="dine-in"
            className="
              h-4
              w-4
              accent-blue-600
            "
          />

          <span className="text-sm text-gray-700 dark:text-gray-200">
            Dine In
          </span>
        </label>


        {/* Take Away */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="order-type"
            value="take-away"
            defaultChecked
            className="
              h-4
              w-4
              accent-blue-600
            "
          />

          <span className="text-sm text-gray-700 dark:text-gray-200">
            Take Away
          </span>
        </label>
      </div>


      <button
        onClick={handleClick}
        type="button"
        className="
          mb-5
          w-full

          rounded-lg
          bg-blue-600

          px-4
          py-3

          text-sm
          font-medium
          text-white

          transition

          hover:bg-blue-700
          active:scale-[0.98]

          focus:outline-none
          focus:ring-4
          focus:ring-blue-300

          dark:focus:ring-blue-800
        "
      >
        Check Out
      </button>
    </div>
  );
};

export default VoucherCheckout;