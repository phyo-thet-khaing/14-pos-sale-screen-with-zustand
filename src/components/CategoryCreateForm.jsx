import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useCategoryStore from "../stores/useCategoryStore";

const CategoryCreateForm = ({ setIsDrawerOpen }) => {
  const { addCategory } = useCategoryStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newCategory = {
      id: Date.now(),
      title: data.new_category_name,
    };

    addCategory(newCategory);

    reset();
    toast.success("Category created successfully");
    setIsDrawerOpen(false);
  };

  const handleClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div className="px-4 sm:px-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Category Name */}
        <div className="mb-6">
          <label
            htmlFor="new_category_name"
            className="block mb-2 text-sm font-medium text-gray-800 dark:text-white"
          >
            New Category Name
          </label>

          <input
            id="new_category_name"
            type="text"
            placeholder="Type category name here"
            {...register("new_category_name", {
              required: "Please enter category name",
              minLength: {
                value: 3,
                message: "Category name must be at least 3 characters long",
              },
            })}
            className={`
              block w-full rounded-lg border
              bg-gray-50
              p-2.5
              text-sm
              text-gray-900
              outline-none
              transition

              dark:bg-gray-700
              dark:text-white

              ${
                errors.new_category_name
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              }
            `}
          />

          {errors.new_category_name && (
            <p className="mt-1 text-xs text-red-500">
              {errors.new_category_name.message}
            </p>
          )}
        </div>

        {/* Confirm */}
        <div className="flex items-start gap-2 mb-6">
          <input
            id="remember-category"
            type="checkbox"
            className="w-4 h-4 mt-1 border-gray-300 rounded"
          />

          <label
            htmlFor="remember-category"
            className="text-sm text-gray-700 dark:text-gray-200"
          >
            I am sure to create this category
          </label>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleClose}
            className="
              w-full rounded-lg
              border border-gray-300
              px-4 py-2.5
              text-sm
              text-gray-700
              transition
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
              w-full rounded-lg
              bg-blue-600
              px-4 py-2.5
              text-sm
              font-medium
              text-white
              transition
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

export default CategoryCreateForm;
