import useProductStore from "../stores/useProductStore";
import useCategoryStore from "./../stores/useCategoryStore";
import ProductSearchInput from "./ProductSearchInput";

const InventoryHeader = () => {
  const { activeCategory } = useCategoryStore();

  const { filterProducts, q } = useProductStore();

  return (
    <div className="grid flex-1 grid-cols-7 gap-4 px-5">
      <div className="col-span-1"></div>
      <div className="relative col-span-6">
        <div className="flex items-center justify-between py-4">
          <h2 className="text-xl text-gray-800 font-heading dark:text-white">
            Product List{" "}
            <span className="text-sm ">
              ({filterProducts(activeCategory, q).length})
            </span>
          </h2>

          <ProductSearchInput />
        </div>
      </div>
    </div>
  );
};

export default InventoryHeader;
