import { DollarSign } from "lucide-react";

const ProductCard = ({ products: { title, price, category, image } }) => {
  return (
    <div className="overflow-hidden bg-white border border-gray-300 rounded-lg cursor-pointer product-card dark:bg-gray-600">
      <div className="overflow-hidden bg-white shadow ">
        <img className="object-cover w-full h-40 product-img" src={image} />
      </div>
      <div className="flex flex-col p-3">
        <div>
          <span className="text-xs text-blue-500 dark:text-blue-300 bg-blue-50 dark:bg-gray-600 border border-blue-300 rounded px-2 py-0.5 product-category-name">
            {category}
          </span>
        </div>
        <h5 className="my-2 text-sm font-semibold line-clamp-2 product-name ">
          {title}
        </h5>
        <p className="flex items-center gap-1 mt-1 text-sm text-gray-500 dark:text-gray-300">
          <DollarSign
            size={12}
            strokeWidth={2}
            className="text-gray-700 dark:text-white"
          />
          <span className="font-mono product-price">{price}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
