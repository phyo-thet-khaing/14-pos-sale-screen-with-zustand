import { X } from "lucide-react";
import CategoryCreateForm from "./CategoryCreateForm";

const CategoryCreateDrawer = ({ isDrawerOpen, setIsDrawerOpen }) => {
  const handleClose = () => {
    setIsDrawerOpen(false);
  };
  return (
    <div
      className={`fixed top-0 left-0 z-50  h-screen w-[400px] duration-300 bg-gray-300    ${isDrawerOpen ? " shadow-2xl" : "-translate-x-full"}`}
    >
      <div className="flex items-center justify-between px-5 mb-10">
        <h3 className="text-xl font-bold text-gray-800">Create New Category</h3>
        <X onClick={handleClose} className="w-4 h-4" />
      </div>
      <CategoryCreateForm setIsDrawerOpen={setIsDrawerOpen} />
    </div>
  );
};

export default CategoryCreateDrawer;
