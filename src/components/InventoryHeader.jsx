import useCategoryStore from "../stores/useCategoryStore";
import useProductStore from "../stores/useProductStore";
import ProductSearchInput from "./ProductSearchInput";

const InventoryHeader = () => {
  const { activeCategory } = useCategoryStore();
  const { filterProducts, q } = useProductStore();

  const productCount = filterProducts(activeCategory, q).length;

  return (
    <div className="px-4 md:px-5">
      <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-7">
        
        {/* Category space */}
        <div className="hidden md:block md:col-span-1" />

        {/* Product Header */}
        <div className="md:col-span-3 lg:col-span-6">
          <div className="
            flex
            flex-col
            gap-3
            py-4

            sm:flex-row
            sm:items-center
            sm:justify-between
          ">
            <h2 className="
              text-lg
              font-heading
              font-semibold
              text-gray-800
              dark:text-white
              sm:text-xl
            ">
              Product List{" "}
              <span className="text-sm text-gray-500 dark:text-gray-400">
                ({productCount})
              </span>
            </h2>

            <div className="w-full sm:w-auto">
              <ProductSearchInput />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InventoryHeader;