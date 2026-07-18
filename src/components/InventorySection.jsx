import CategoryList from "./CategoryList";
import InventoryHeader from "./InventoryHeader";
import ProductAddBtn from "./ProductAddBtn";
import ProductList from "./ProductList";

const InventorySection = () => {
  return (
    <section className="flex flex-col bg-gray-100 border-b border-gray-300  dark:border-gray-600 dark:bg-gray-700">
      <InventoryHeader />

      <div className="grid flex-1 grid-cols-1 gap-4 p-4  md:grid-cols-4 lg:grid-cols-7">
        {/* Categories */}
        <div className=" md:col-span-1 lg:col-span-1">
          <CategoryList />
        </div>

        {/* Products */}
        <div className="relative  md:col-span-3 lg:col-span-6">
          <div
            className="
              overflow-y-auto
              text-gray-800
              dark:text-white

              max-h-[55vh]

              sm:max-h-[60vh]

              md:max-h-[65vh]

              lg:max-h-[70vh]
            "
          >
            <ProductList />
          </div>

          <ProductAddBtn />
        </div>
      </div>
    </section>
  );
};

export default InventorySection;
