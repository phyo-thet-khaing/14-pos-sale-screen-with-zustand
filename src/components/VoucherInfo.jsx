import useVoucherStore from "./../stores/useVoucherStore";

const VoucherInfo = () => {
  // Generate voucher number: prefix + random

  const { information } = useVoucherStore();

  return (
    <div className="flex flex-col items-end gap-2">
      <input
        type="text"
        value={information.voucherId}
        className="w-48 px-2 py-1 font-mono text-sm border rounded text-end"
        readOnly
      />
      <input
        type="text"
        value={information.date}
        className="w-48 px-2 py-1 font-mono text-sm border rounded text-end"
        readOnly
      />
      <input
        type="text"
        value={information.time}
        className="w-48 px-2 py-1 font-mono text-sm border rounded text-end"
        readOnly
      />
    </div>
  );
};

export default VoucherInfo;
