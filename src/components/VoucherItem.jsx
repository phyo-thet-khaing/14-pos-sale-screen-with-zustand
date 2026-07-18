import { Minus, Plus } from "lucide-react";
import Swal from "sweetalert2";
import useVoucherStore from "../stores/useVoucherStore";

const VoucherItem = ({
  item: {
    id,
    product: { title, price },
    quantity,
  },
}) => {
  const { addQuantity, removeItem } = useVoucherStore();

  const handleAdd = () => {
    addQuantity(id, 1);
  };

  const handleSub = () => {
    if (quantity > 1) {
      addQuantity(id, -1);
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          removeItem(id);

          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
            icon: "success",
          });
        }
      });
    }
  };

  return (
    <div className="px-4 py-3 border-b border-gray-300  dark:border-gray-600">
      {/* Product row */}
      <div className="flex items-center justify-between gap-3 mb-3  dark:text-white">
        <p className="w-1/2 text-sm font-medium truncate ">{title}</p>

        <div className="flex items-center gap-2">
          <button
            onClick={handleSub}
            className="flex items-center justify-center transition bg-blue-100 border border-blue-400 rounded-lg  h-7 w-7 active:scale-90 hover:bg-blue-200 dark:border-blue-300 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            <Minus size={14} />
          </button>

          <span className="w-6 font-mono text-sm text-center">{quantity}</span>

          <button
            onClick={handleAdd}
            className="flex items-center justify-center transition bg-blue-100 border border-blue-400 rounded-lg  h-7 w-7 active:scale-90 hover:bg-blue-200 dark:border-blue-300 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>

      {/* Price row */}
      <div className="flex justify-between text-sm text-gray-500  dark:text-gray-400">
        <div className="flex items-center gap-2 font-mono">
          <span>{quantity}</span>
          <span>x</span>
          <span>{price}</span>
        </div>

        <span className="font-mono text-gray-800 dark:text-white">
          {quantity * price}
        </span>
      </div>
    </div>
  );
};

export default VoucherItem;
