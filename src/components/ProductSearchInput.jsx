import { SearchIcon } from "lucide-react";
import { useRef } from "react";
import useProductStore from "../stores/useProductStore";

const ProductSearchInput = () => {
  // const [keyword, setKeyword] = useState("");

  const { setQ } = useProductStore();

  const inputRef = useRef();

  const handleChange = () => {
    // setKeyword(e.target.value);

    // console.log(inputRef.current.value);
    setQ(inputRef.current.value);
  };

  return (
    <div id="search-form">
      <div className="relative">
        <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
          <SearchIcon className="text-gray-500 size-4 dark:text-gray-300" />
        </div>

        <input
          type="search"
          ref={inputRef}
          onChange={handleChange}
          className="block w-full px-3 py-1 text-gray-800 placeholder-gray-400 bg-white border border-gray-300 rounded-lg ps-9 dark:bg-gray-600 dark:border-gray-500 dark:text-white dark:placeholder-gray-300"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default ProductSearchInput;
