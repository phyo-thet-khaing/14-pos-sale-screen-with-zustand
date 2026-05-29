import CategoryList from "./CategoryList";
import InventoryHeader from "./InventoryHeader";
import ProductAddBtn from "./ProductAddBtn";
import ProductList from "./ProductList";

const InventorySection = () => {
  return (
    <section className="relative flex flex-col h-full col-span-5 bg-gray-100 border-b border-gray-300 dark:border-gray-600 dark:bg-gray-700">
      <InventoryHeader />

      <div className="grid flex-1 grid-cols-7 gap-4 px-5">
        <div className="col-span-1">
          <CategoryList />
        </div>
        <div className="relative col-span-6">
          <div className="  text-gray-800 dark:text-white h-[680px] overflow-y-auto">
            <ProductList />
          </div>
          <ProductAddBtn />
        </div>
      </div>
    </section>
  );
};

export default InventorySection;
