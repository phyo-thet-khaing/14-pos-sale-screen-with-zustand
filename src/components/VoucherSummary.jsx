import useVoucherStore from "./../stores/useVoucherStore";
const VoucherSummary = () => {
  const { items, getTotal, getTax, getNetTotal } = useVoucherStore();

  return (
    <div className="p-5" id="summary">
      <table className="w-full font-mono text-sm text-end">
        <tbody>
          <tr>
            <td className="text-gray-500 dark:text-gray-300">Subtotal:</td>
            <td className="text-gray-800 dark:text-white">
              {getTotal().toFixed(2)}
            </td>
          </tr>

          <tr className="text-xs text-end">
            <td className="text-gray-500 dark:text-gray-300">Tax (5%):</td>
            <td className="text-gray-800 dark:text-white">
              {getTax().toFixed(2)}
            </td>
          </tr>

          <tr className="text-xs text-end">
            <td className="text-gray-500 dark:text-gray-300">Net Total:</td>
            <td className="text-gray-800 dark:text-white">
              {getNetTotal().toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VoucherSummary;
