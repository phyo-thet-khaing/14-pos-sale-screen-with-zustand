import useVoucherStore from "./../stores/useVoucherStore";

const VoucherCheckout = () => {
  const { information, items, reset } = useVoucherStore();

  const handleClick = () => {
    console.log({ items, information });
    reset();
  };
  return (
    <div className="px-5 mt-auto">
      <div className="flex justify-end gap-4 px-5 mb-1">
        <div className="flex items-center mb-4">
          <input
            id="default-radio-1"
            type="radio"
            defaultValue
            name="default-radio"
            className="w-4 h-4 border rounded-full appearance-none text-neutral-primary border-default-medium bg-neutral-secondary-medium checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border-default"
          />
          <label
            htmlFor="default-radio-1"
            className="text-sm font-medium select-none ms-2 text-heading"
          >
            Dine In
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            defaultChecked
            id="default-radio-2"
            type="radio"
            defaultValue
            name="default-radio"
            className="w-4 h-4 border rounded-full appearance-none text-neutral-primary border-default-medium bg-neutral-secondary-medium checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border-default"
          />
          <label
            htmlFor="default-radio-2"
            className="text-sm font-medium select-none ms-2 text-heading"
          >
            Take Away
          </label>
        </div>
      </div>
      <button
        onClick={handleClick}
        type="button"
        className="w-full mb-5 text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
      >
        Check Out
      </button>
    </div>
  );
};

export default VoucherCheckout;
