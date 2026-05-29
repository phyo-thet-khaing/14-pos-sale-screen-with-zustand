import { X } from "lucide-react";
import useProductStore from "../stores/useProductStore";
import ProductCreateForm from "./ProductCreateForm";

const ProductCreateDrawer = ({}) => {
  const { isOpen, setIsOpen } = useProductStore();

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div
      className={`fixed top-0 left-0 z-50  h-screen w-[400px] duration-300 bg-gray-300  
          ${isOpen ? " shadow-2xl" : "-translate-x-full"}`}
    >
      <div className="flex items-center justify-between px-5 mb-10">
        <h3 className="text-xl font-bold text-gray-800">Create New Product</h3>
        <X onClick={handleClose} className="w-4 h-4" />
      </div>
      <ProductCreateForm />
    </div>
  );
};

export default ProductCreateDrawer;
