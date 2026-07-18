import { SearchIcon } from "lucide-react";
import useProductStore from "../stores/useProductStore";

const ProductSearchInput = () => {
  const { setQ } = useProductStore();

  const handleChange = (e) => {
    setQ(e.target.value);
  };

  return (
    <div className="w-full sm:w-64">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon className="size-4 text-gray-500 dark:text-gray-300" />
        </div>

        <input
          type="search"
          onChange={handleChange}
          placeholder="Search products..."
          className="
            block
            w-full
            rounded-lg
            border
            border-gray-300

            bg-white

            px-3
            py-2
            pl-9

            text-sm
            text-gray-800

            placeholder-gray-400

            outline-none

            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-200

            dark:border-gray-600
            dark:bg-gray-700
            dark:text-white
            dark:placeholder-gray-300
            dark:focus:ring-blue-800
          "
        />
      </div>
    </div>
  );
};

export default ProductSearchInput;