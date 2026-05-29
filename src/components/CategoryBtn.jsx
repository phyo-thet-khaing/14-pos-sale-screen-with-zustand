import useCategoryStore from "./../stores/useCategoryStore";

const CategoryBtn = ({ category: { id, title } }) => {
  const { activeCategory, selectCategory } = useCategoryStore();

  const isActive = title === activeCategory;

  const baseClasses =
    "flex items-center justify-start w-full gap-2 px-4 py-2 text-sm duration-200 border rounded-lg cursor-pointer active:scale-90 hover:scale-95";

  const activeClasses = "bg-blue-500 text-white border-blue-500";

  const inactiveClasses =
    "text-gray-700 border-blue-400 hover:bg-gray-200 dark:border-blue-300 dark:text-white dark:hover:bg-gray-600";

  return (
    <div
      onClick={() => selectCategory(title)}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
    >
      {title}
    </div>
  );
};

export default CategoryBtn;
