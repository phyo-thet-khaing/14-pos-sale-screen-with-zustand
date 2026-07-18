import { X } from "lucide-react";
import useProductStore from "../stores/useProductStore";
import ProductCreateForm from "./ProductCreateForm";

const ProductCreateDrawer = () => {
  const { isOpen, setIsOpen } = useProductStore();

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={handleClose}
          className="fixed inset-0 z-40  bg-black/30 sm:hidden"
        />
      )}

      {/* Drawer */}
      <div
        className={`
          fixed
          left-0
          top-0
          z-50

          h-screen

          w-full
          sm:w-[400px]

          bg-white
          shadow-2xl

          transition-transform
          duration-300

          dark:bg-gray-800

          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-300  dark:border-gray-600 sm:px-5">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white sm:text-xl">
            Create New Product
          </h3>

          <button
            onClick={handleClose}
            className="p-2 text-gray-700 rounded-lg  hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <div
          className="
            h-[calc(100vh-70px)]
            overflow-y-auto

            p-4

            sm:p-5
          "
        >
          <ProductCreateForm />
        </div>
      </div>
    </>
  );
};

export default ProductCreateDrawer;
