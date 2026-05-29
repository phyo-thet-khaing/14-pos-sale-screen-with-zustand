const VoucherSummary = () => {
  return (
    <div className="p-5" id="summary">
      <table className="w-full font-mono text-sm text-end">
        <tbody>
          <tr>
            <td className="text-gray-500 dark:text-gray-300">Subtotal:</td>
            <td className="text-gray-800 dark:text-white">10.00</td>
          </tr>

          <tr className="text-xs text-end">
            <td className="text-gray-500 dark:text-gray-300">Tax (5%):</td>
            <td className="text-gray-800 dark:text-white">10.00</td>
          </tr>

          <tr className="text-xs text-end">
            <td className="text-gray-500 dark:text-gray-300">Net Total:</td>
            <td className="text-gray-800 dark:text-white">10.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default VoucherSummary;
