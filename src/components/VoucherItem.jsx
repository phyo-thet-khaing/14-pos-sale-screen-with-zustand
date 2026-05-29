import { Minus, Plus } from "lucide-react";

const VoucherItem = () => {
  return (
    <div className="px-5 py-2 border-b border-gray-300 order-card dark:border-gray-600">
      <div className="flex items-start justify-between mb-2 dark:text-white">
        <p className="w-1/2 text-sm">Angel Food Cake && Chiffon Cake</p>

        <div className="flex items-center gap-2">
          <button className="p-1 bg-blue-100 border border-blue-400 rounded-lg dark:bg-blue-500 dark:border-blue-300 hover:bg-blue-200 dark:hover:bg-blue-400">
            <Minus size={12} />
          </button>

          <p className="w-5 font-mono text-sm text-end">1</p>

          <button className="p-1 bg-blue-100 border border-blue-400 rounded-lg dark:bg-blue-500 dark:border-blue-300 hover:bg-blue-200 dark:hover:bg-blue-400">
            <Plus size={12} />
          </button>
        </div>
      </div>

      <div className="flex justify-between mb-2 text-gray-400">
        <div className="flex items-center gap-2">
          <p className="font-mono text-sm">1</p>
          <p>x</p>
          <p className="font-mono text-sm">10.00</p>
        </div>

        <p className="font-mono text-sm">1050</p>
      </div>
    </div>
  );
};

export default VoucherItem;
