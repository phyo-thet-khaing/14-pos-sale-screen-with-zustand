import useProductStore from "../stores/useProductStore";
import useCategoryStore from "./../stores/useCategoryStore";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { activeCategory } = useCategoryStore();
  const { filterProducts, q,  } = useProductStore();

  // const filterProducts = products.filter(
  //   (el) => activeCategory === "All" || el.category === activeCategory,
  // );
  return (
    <div className="grid grid-cols-3 gap-5 ">
      {filterProducts(activeCategory, q).length === 0 ? (
        <div className="col-span-full ">
          <div className="flex flex-col items-center justify-center product-card">
            <img
              src="../../public/Images/Empty-amico.svg"
              alt="Empty-amico"
              className="p-5 h-60 w-60"
            />
            <p className="text-sm text-center text-gray-500">
              There is no products available
            </p>
          </div>
        </div>
      ) : (
        filterProducts(activeCategory, q).map((el) => (
          <ProductCard key={el.id} product={el} />
        ))
      )}
    </div>
  );
};

export default ProductList;
