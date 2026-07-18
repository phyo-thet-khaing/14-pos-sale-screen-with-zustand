import useVoucherStore from "../stores/useVoucherStore";

const VoucherInfo = () => {
  const { information } = useVoucherStore();

  const inputClass = `
    w-full
    sm:w-48

    rounded-lg
    border
    border-gray-300

    bg-white

    px-2
    py-1.5

    text-right
    font-mono
    text-sm
    text-gray-800

    outline-none

    dark:border-gray-600
    dark:bg-gray-700
    dark:text-white
  `;

  return (
    <div className="flex flex-col items-end w-full gap-2 ">
      <input
        type="text"
        value={information.voucherId}
        readOnly
        className={inputClass}
      />

      <input
        type="text"
        value={information.date}
        readOnly
        className={inputClass}
      />

      <input
        type="text"
        value={information.time}
        readOnly
        className={inputClass}
      />
    </div>
  );
};

export default VoucherInfo;
