import useCategoryStore from "../stores/useCategoryStore";
import useProductStore from "../stores/useProductStore";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { activeCategory } = useCategoryStore();
  const { filterProducts, q } = useProductStore();

  const products = filterProducts(activeCategory, q);

  return (
    <div className="grid grid-cols-1 gap-4  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {products.length === 0 ? (
        <div className="col-span-full">
          <div className="flex flex-col items-center justify-center py-10 ">
            <img
              src="/Images/Empty-amico.svg"
              alt="No products"
              className="w-40 h-40  sm:h-60 sm:w-60"
            />

            <p className="mt-4 text-sm text-center text-gray-500  dark:text-gray-400">
              There are no products available
            </p>
          </div>
        </div>
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductList;
