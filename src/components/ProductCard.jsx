import { DollarSign } from "lucide-react";
import { toast } from "sonner";
import useVoucherStore from "../stores/useVoucherStore";

const ProductCard = ({ product: { id, title, price, category, image } }) => {
  const { items, addItem, addQuantity } = useVoucherStore();

  const isExistedItem = items.find((el) => el.product.id === id);

  const handleClick = () => {
    if (isExistedItem) {
      addQuantity(isExistedItem.id, 1);
    } else {
      const newItem = {
        id: Date.now(),
        product: {
          id,
          title,
          price,
        },
        quantity: 1,
      };

      addItem(newItem);

      toast.success("Added to Voucher Item", {
        position: "top-center",
      });
    }
  };

  return (
    <div
      onClick={handleClick}
      className="
        relative
        cursor-pointer
        overflow-hidden
        rounded-lg
        border
        border-gray-300
        bg-white
        transition-all
        duration-300

        hover:scale-[1.02]
        active:scale-95

        dark:border-gray-600
        dark:bg-gray-700
      "
    >
      {isExistedItem && (
        <div className="absolute z-10 px-2 py-1 text-xs text-white bg-blue-500 rounded-full  right-1 top-1">
          Added
        </div>
      )}

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-32  sm:h-36 lg:h-40"
        />
      </div>

      {/* Content */}
      <div className="p-3 border-t border-blue-100  bg-blue-50 dark:border-gray-600 dark:bg-gray-800">
        <span
          className="
            inline-block
            rounded
            border
            border-blue-300
            bg-blue-50
            px-2
            py-0.5
            text-xs
            text-blue-500

            dark:border-gray-500
            dark:bg-gray-700
            dark:text-blue-300
          "
        >
          {category}
        </span>

        <h5 className="my-2 text-sm font-semibold text-gray-800  line-clamp-2 dark:text-white">
          {title}
        </h5>

        <p className="flex items-center gap-1 text-sm text-gray-500  dark:text-gray-400">
          <DollarSign size={12} className="text-gray-700 dark:text-gray-300" />

          <span className="font-mono text-gray-800 dark:text-white">
            {price}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
