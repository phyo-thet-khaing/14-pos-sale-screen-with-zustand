import { X } from "lucide-react";
import CategoryCreateForm from "./CategoryCreateForm";

const CategoryCreateDrawer = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const handleClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div
      className={`
        fixed top-0 left-0 z-50
        h-screen
        w-full
        bg-gray-300
        shadow-2xl
        transition-transform
        duration-300

        sm:w-[400px]

        ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <div className="flex items-center justify-between px-4 py-4 border-b border-gray-400 sm:px-5">
        <h3 className="text-lg font-bold text-gray-800 sm:text-xl">
          Create New Category
        </h3>

        <button
          onClick={handleClose}
          className="p-2 rounded-lg hover:bg-gray-200"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      <div className="h-[calc(100vh-70px)] overflow-y-auto p-4 sm:p-5">
        <CategoryCreateForm setIsDrawerOpen={setIsDrawerOpen} />
      </div>
    </div>
  );
};

export default CategoryCreateDrawer;
