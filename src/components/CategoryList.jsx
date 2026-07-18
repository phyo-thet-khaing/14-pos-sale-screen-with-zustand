import useCategoryStore from "../stores/useCategoryStore";
import CategoryAddBtn from "./CategoryAddBtn";
import CategoryBtn from "./CategoryBtn";

const CategoryList = () => {
  const { categories } = useCategoryStore();

  return (
    <div className="w-full">
      <div className="flex gap-2 pb-2 overflow-x-auto  scrollbar-hide md:flex-col md:overflow-visible">
        {categories.map((el) => (
          <CategoryBtn key={el.id} category={el} />
        ))}
      </div>

      <div className="mt-3">
        <CategoryAddBtn />
      </div>
    </div>
  );
};

export default CategoryList;
