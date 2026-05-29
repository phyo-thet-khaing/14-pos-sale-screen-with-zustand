import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useProductStore from "../stores/useProductStore";
import useCategoryStore from "./../stores/useCategoryStore";

const ProductCreateForm = ({}) => {
  const { categories } = useCategoryStore();
  const { products, addProduct, isOpen, setIsOpen } = useProductStore();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const newProductId = products[products.length - 1].id + 1;
    const newProduct = {
      id: newProductId,
      title: data.new_product_name,
      category: data.category,
      price: data.new_product_price,
      image: `/public/Images/${newProductId}.png`,
    };
    addProduct(newProduct);
    reset();
    toast.success("Product created successfully");
    handleClose();
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div className="px-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label
              htmlFor="new_product_name"
              className="block mb-2 text-sm font-medium text-body"
            >
              New product Name
            </label>

            <input
              type="text"
              id="new_product_name"
              {...register("new_product_name", {
                required: {
                  value: true,
                  message: "Please enter product name",
                },
                minLength: {
                  value: 3,
                  message: "product name must be at least 3 characters long",
                },
              })}
              className={`block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white ${
                errors.new_product_name
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300  focus:border-blue-500 focus:ring-blue-500"
              }`}
              placeholder="Type product name here"
            />
            {errors.new_product_name && (
              <p className="mb-2 text-xs text-red-500">
                {errors.new_product_name.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="new_product_name"
              className="block mb-2 text-sm font-medium text-body"
            >
              New product Price
            </label>

            <input
              type="number"
              id="new_product_price"
              {...register("new_product_price", {
                required: {
                  value: true,
                  message: "Please enter product price",
                },
                min: {
                  value: 100,
                  message: "Product price must be at least 100",
                },
              })}
              className={`block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white ${
                errors.new_product_price
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              }`}
              placeholder="Type product price here"
            />

            {errors.new_product_price && (
              <p className="mb-2 text-xs text-red-500">
                {errors.new_product_price.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-body"
            >
              Product Category
            </label>

            <select
              id="category"
              {...register("category", {
                required: {
                  value: true,
                  message: "Please select product category",
                },
              })}
              className={`block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white ${
                errors.category
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              }`}
            >
              <option value="">Select category</option>

              {categories.map((el) => (
                <option key={el.id} value={el.title}>
                  {el.title}
                </option>
              ))}
            </select>

            {errors.category && (
              <p className="mb-2 text-xs text-red-500">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* <div className="mb-6">
            <label
              htmlFor="new_product_image"
              className="block mb-2 text-sm font-medium text-body"
            >
              Product Image
            </label>

            <input
              type="file"
              id="new_product_image"
              accept="image/*"
              {...register("new_product_image", {
                required: {
                  value: true,
                  message: "Please upload product image",
                },
              })}
              className={`block w-full text-sm text-gray-900 bg-gray-50 border rounded-lg cursor-pointer focus:outline-none dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white ${
                errors.new_product_image
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              }`}
            />

            {errors.new_product_image && (
              <p className="mb-2 text-xs text-red-500">
                {errors.new_product_image.message}
              </p>
            )}
          </div> */}

          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember_product"
                type="checkbox"
                className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
              />
            </div>

            <label
              htmlFor="remember_product"
              className="text-sm font-medium ms-2 text-heading"
            >
              I am sure to create this product
            </label>
          </div>
          <div className="flex items-start gap-3 mb-4">
            <button
              type="button"
              onClick={handleClose}
              className="px-4 py-2.5 text-sm font-medium border rounded-base text-body bg-neutral-secondary-medium border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary focus:outline-none"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2.5 text-sm font-medium text-white border border-transparent shadow-xs rounded-base bg-brand hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium focus:outline-none"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductCreateForm;
