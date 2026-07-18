import { Plus } from "lucide-react";
import { useState } from "react";
import CategoryCreateDrawer from "./CategoryCreateDrawer";

const CategoryAddBtn = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClick = () => {
    setIsDrawerOpen(true);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="flex items-center justify-center gap-2 px-4 py-2 mt-3 text-sm text-gray-700 transition-all duration-200 border border-blue-400 rounded-lg  active:scale-90 hover:scale-95 hover:bg-gray-200 dark:border-blue-300 dark:text-white dark:hover:bg-gray-600 md:w-full md:justify-start"
      >
        <Plus className="w-4 h-4" />
        <span>Create</span>
      </button>

      <CategoryCreateDrawer
        setIsDrawerOpen={setIsDrawerOpen}
        isDrawerOpen={isDrawerOpen}
      />
    </>
  );
};

export default CategoryAddBtn;