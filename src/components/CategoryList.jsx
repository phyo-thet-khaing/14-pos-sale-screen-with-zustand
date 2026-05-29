import useCategoryStore from "./../stores/useCategoryStore";
import CategoryAddBtn from "./CategoryAddBtn";
import CategoryBtn from "./CategoryBtn";

const CategoryList = () => {
  const { categories } = useCategoryStore();
  // const [categories, setCategories] = useState([
  //   { id: 0, title: "All" },
  //   { id: 1, title: "Bread" },
  //   { id: 2, title: "Coffee" },
  //   { id: 3, title: "Smoothies" },
  //   { id: 4, title: "Cake" },
  // ]);

  // const [activeCategoryId, setActiveCategoryId] = useState(0);

  // const storeCategory = (newCategoryTitle) => {
  //   const newCategory = {
  //     id: categories.length,
  //     title: newCategoryTitle,
  //   };
  //   // setCategories([...categories, newCategory]);
  // };

  return (
    <>
      <div className="flex flex-col gap-2">
        {categories.map((el) => (
          <CategoryBtn
            key={el.id}
            category={el}
            // activeCategoryId={activeCategoryId}
            // setActiveCategoryId={setActiveCategoryId}
          />
        ))}
      </div>
      <CategoryAddBtn />
    </>
  );
};

export default CategoryList;
