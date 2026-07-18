import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useCategoryStore from "../stores/useCategoryStore";
import useProductStore from "../stores/useProductStore";

const ProductCreateForm = () => {
  const { categories } = useCategoryStore();
  const { products, addProduct, setIsOpen } = useProductStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleClose = () => {
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    const newProductId =
      products.length > 0 ? products[products.length - 1].id + 1 : 1;

    const newProduct = {
      id: newProductId,
      title: data.new_product_name,
      category: data.category,
      price: Number(data.new_product_price),
      image: `/Images/${newProductId}.png`,
    };

    addProduct(newProduct);

    reset();

    toast.success("Product created successfully");

    handleClose();
  };

  return (
    <div className="px-4 sm:px-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Product Name */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">
            New Product Name
          </label>

          <input
            type="text"
            placeholder="Type product name here"
            {...register("new_product_name", {
              required: "Please enter product name",
              minLength: {
                value: 3,
                message: "Product name must be at least 3 characters long",
              },
            })}
            className={`
              w-full rounded-lg border
              bg-gray-50
              p-2.5
              text-sm
              text-gray-900

              dark:bg-gray-700
              dark:text-white

              ${errors.new_product_name ? "border-red-500" : "border-gray-300"}
            `}
          />

          {errors.new_product_name && (
            <p className="mt-1 text-xs text-red-500">
              {errors.new_product_name.message}
            </p>
          )}
        </div>

        {/* Price */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">
            Product Price
          </label>

          <input
            type="number"
            placeholder="Type product price here"
            {...register("new_product_price", {
              required: "Please enter product price",
              min: {
                value: 100,
                message: "Product price must be at least 100",
              },
            })}
            className={`
              w-full rounded-lg border
              bg-gray-50
              p-2.5
              text-sm
              text-gray-900

              dark:bg-gray-700
              dark:text-white

              ${errors.new_product_price ? "border-red-500" : "border-gray-300"}
            `}
          />

          {errors.new_product_price && (
            <p className="mt-1 text-xs text-red-500">
              {errors.new_product_price.message}
            </p>
          )}
        </div>

        {/* Category */}
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-800 dark:text-white">
            Product Category
          </label>

          <select
            {...register("category", {
              required: "Please select product category",
            })}
            className={`
              w-full rounded-lg border
              bg-gray-50
              p-2.5
              text-sm

              dark:bg-gray-700
              dark:text-white

              ${errors.category ? "border-red-500" : "border-gray-300"}
            `}
          >
            <option value="">Select category</option>

            {categories.map((el) => (
              <option key={el.id} value={el.title}>
                {el.title}
              </option>
            ))}
          </select>

          {errors.category && (
            <p className="mt-1 text-xs text-red-500">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* Confirm */}
        <div className="flex items-start gap-2 mb-6">
          <input
            id="remember_product"
            type="checkbox"
            className="w-4 h-4 mt-1"
          />

          <label
            htmlFor="remember_product"
            className="text-sm text-gray-700 dark:text-gray-200"
          >
            I am sure to create this product
          </label>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleClose}
            className="
              w-full
              rounded-lg
              border
              border-gray-300
              px-4
              py-2.5
              text-sm
              text-gray-700

              hover:bg-gray-200

              sm:w-auto

              dark:border-gray-600
              dark:text-white
              dark:hover:bg-gray-700
            "
          >
            Cancel
          </button>

          <button
            type="submit"
            className="
              w-full
              rounded-lg
              bg-blue-600
              px-4
              py-2.5
              text-sm
              text-white

              hover:bg-blue-700

              sm:w-auto
            "
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductCreateForm;
