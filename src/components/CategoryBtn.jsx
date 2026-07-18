import useCategoryStore from "../stores/useCategoryStore";

const CategoryBtn = ({ category: { title } }) => {
  const { activeCategory, selectCategory } = useCategoryStore();

  const isActive = title === activeCategory;

  return (
    <button
      onClick={() => selectCategory(title)}
      className={`
        flex items-center
        whitespace-nowrap
        rounded-lg
        border
        px-4 py-2
        text-sm
        transition-all
        duration-200
        active:scale-90
        hover:scale-95

        justify-center
        w-auto

        md:w-full
        md:justify-start

        ${
          isActive
            ? "border-blue-500 bg-blue-500 text-white"
            : "border-blue-400 text-gray-700 hover:bg-gray-200 dark:border-blue-300 dark:text-white dark:hover:bg-gray-600"
        }
      `}
    >
      {title}
    </button>
  );
};

export default CategoryBtn;
