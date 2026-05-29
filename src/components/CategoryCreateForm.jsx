import { useForm } from "react-hook-form";
import { toast } from "sonner";
import useCategoryStore from "./../stores/useCategoryStore";

const CategoryCreateForm = ({ setIsDrawerOpen }) => {
  const { addCategory } = useCategoryStore();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
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
    <div>
      <div className="px-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label
              htmlFor="new_category_name"
              className="block mb-2 text-sm font-medium text-body"
            >
              New Category Name
            </label>

            <input
              type="text"
              id="new_category_name"
              {...register("new_category_name", {
                required: {
                  value: true,
                  message: "Please enter category name",
                },
                minLength: {
                  value: 3,
                  message: "Category name must be at least 3 characters long",
                },
              })}
              className={`block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white ${
                errors.new_category_name
                  ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300  focus:border-blue-500 focus:ring-blue-500"
              }`}
              placeholder="Type category name here"
            />
            {errors.new_category_name && (
              <p className="mb-2 text-xs text-red-500">
                {errors.new_category_name.message}
              </p>
            )}
          </div>

          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember-category"
                type="checkbox"
                className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
              />
            </div>

            <label
              htmlFor="remember-category"
              className="text-sm font-medium ms-2 text-heading"
            >
              I am sure to create this category
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

export default CategoryCreateForm;
