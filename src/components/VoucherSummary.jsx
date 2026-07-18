import useVoucherStore from "../stores/useVoucherStore";

const VoucherSummary = () => {
  const { getTotal, getTax, getNetTotal } = useVoucherStore();

  return (
    <div
      id="summary"
      className="p-4 border-t border-gray-200  dark:border-gray-600 sm:p-5"
    >
      <table className="w-full font-mono text-sm ">
        <tbody>
          {/* Subtotal */}
          <tr>
            <td className="py-1 text-gray-500  dark:text-gray-300">
              Subtotal:
            </td>

            <td className="py-1 text-right text-gray-800  dark:text-white">
              {getTotal().toFixed(2)}
            </td>
          </tr>

          {/* Tax */}
          <tr>
            <td className="py-1 text-gray-500  dark:text-gray-300">
              Tax (5%):
            </td>

            <td className="py-1 text-right text-gray-800  dark:text-white">
              {getTax().toFixed(2)}
            </td>
          </tr>

          {/* Net Total */}
          <tr>
            <td className="pt-3 font-bold text-gray-800  dark:text-white">
              Net Total:
            </td>

            <td className="pt-3 text-lg font-bold text-right text-blue-600  dark:text-blue-400">
              {getNetTotal().toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VoucherSummary;
