import { DollarSign } from "lucide-react";
import { toast } from "sonner";
import useVoucherStore from "./../stores/useVoucherStore";

const ProductCard = ({ product: { id, title, price, category, image } }) => {
  const { items, addItem, addQuantity } = useVoucherStore();
  const isExistedItem = items.find((el) => el.product.id == id);

  const handleClick = () => {
    if (isExistedItem) {
      addQuantity(isExistedItem.id, 1);
    } else {
      const newItem = {
        id: Date.now(),
        product: { id, title, price },
        quantity: 1,
      };
      addItem(newItem);
      toast.success("Add to Voucher Item", {
        position: "top-center",
      });
    }
  };

  return (
    <div
      onClick={handleClick}
      className="relative overflow-hidden duration-300 bg-white border border-gray-300 rounded-lg cursor-pointer product-card dark:bg-gray-700 dark:border-gray-600 active:scale-95"
    >
      {isExistedItem && (
        <div className="absolute top-0 right-0 px-2 py-1 text-xs text-white bg-blue-500 rounded-full dark:bg-blue-600">
          Added
        </div>
      )}
      <div className="overflow-hidden bg-white dark:bg-gray-700">
        <img
          className="object-cover w-full h-40 product-img"
          src={image}
          alt={title}
        />
      </div>
      <div className="flex flex-col p-3 border-t border-blue-100 bg-blue-50 dark:bg-gray-800 dark:border-gray-600">
        <div>
          <span className="text-xs text-blue-500 dark:text-blue-300 bg-blue-50 dark:bg-gray-700 border border-blue-300 dark:border-gray-500 rounded px-2 py-0.5 product-category-name">
            {category}
          </span>
        </div>
        <h5 className="my-2 text-sm font-semibold line-clamp-2 product-name dark:text-white">
          {title}
        </h5>
        <p className="flex items-center gap-1 mt-1 text-sm text-gray-500 dark:text-gray-400">
          <DollarSign
            size={12}
            strokeWidth={2}
            className="text-gray-700 dark:text-gray-300"
          />
          <span className="font-mono product-price dark:text-white">
            {price}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
