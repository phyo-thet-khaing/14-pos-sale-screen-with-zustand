import { Plus } from "lucide-react";
import useProductStore from "../stores/useProductStore";
import ProductCreateDrawer from "./ProductCreateDrawer";

const ProductAddBtn = () => {
  const { setIsOpen } = useProductStore();

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="absolute flex items-center justify-center text-white transition-all duration-200 bg-blue-600 rounded-full shadow-lg  bottom-4 right-4 hover:scale-105 hover:bg-blue-700 active:scale-90 size-10 sm:bottom-5 sm:right-6 sm:size-11 lg:right-8 lg:size-12"
        aria-label="Add product"
      >
        <Plus className="w-4 h-4 sm:h-5 sm:w-5" />
      </button>

      <ProductCreateDrawer />
    </>
  );
};

export default ProductAddBtn;
