import { Plus } from "lucide-react";
import { useState } from "react";
import CategoryCreateDrawer from "./CategoryCreateDrawer";

const CategoryAddBtn = ({}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClick = () => {
    setIsDrawerOpen(true);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="flex items-center justify-start w-full gap-2 px-4 py-2 mt-3 text-sm text-gray-700 duration-200 border border-blue-400 rounded-lg active:scale-90 hover:scale-95 dark:border-blue-300 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        <Plus className="w-4 h-4" />
        Create
      </button>
      <CategoryCreateDrawer
        setIsDrawerOpen={setIsDrawerOpen}
        isDrawerOpen={isDrawerOpen}
      />
    </>
  );
};

export default CategoryAddBtn;
