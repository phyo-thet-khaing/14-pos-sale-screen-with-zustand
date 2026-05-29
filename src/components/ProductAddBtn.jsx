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
        className="absolute flex items-center justify-center text-white duration-200 bg-blue-600 rounded-full shadow-lg right-10 size-10 active:scale-90 hover:scale-95 bottom-5 hover:bg-blue-700"
      >
        <Plus className="w-4 h-4" />
      </button>
      <ProductCreateDrawer />
    </>
  );
};

export default ProductAddBtn;
