import { Minus, Plus } from "lucide-react";
import Swal from "sweetalert2";
import useVoucherStore from "./../stores/useVoucherStore";

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
    <div className="px-5 py-2 border-b border-gray-300 order-card dark:border-gray-600">
      <div className="flex items-start justify-between mb-2 dark:text-white">
        <p className="w-1/2 text-sm">{title}</p>

        <div className="flex items-center gap-2">
          <button
            onClick={handleSub}
            className="p-1 active:scale-90 bg-blue-100 border border-blue-400 rounded-lg dark:bg-blue-500 dark:border-blue-300 hover:bg-blue-200 dark:hover:bg-blue-400"
          >
            <Minus size={12} />
          </button>

          <p className="w-5 font-mono text-sm text-end">{quantity}</p>

          <button
            onClick={handleAdd}
            className="p-1 active:scale-90 bg-blue-100 border border-blue-400 rounded-lg dark:bg-blue-500 dark:border-blue-300 hover:bg-blue-200 dark:hover:bg-blue-400"
          >
            <Plus size={12} />
          </button>
        </div>
      </div>

      <div className="flex justify-between mb-2 text-gray-400">
        <div className="flex items-center gap-2">
          <p className="font-mono text-sm">{quantity}</p>
          <p>x</p>
          <p className="font-mono text-sm">{price}</p>
        </div>

        <p className="font-mono text-sm">{quantity * price}</p>
      </div>
    </div>
  );
};

export default VoucherItem;
