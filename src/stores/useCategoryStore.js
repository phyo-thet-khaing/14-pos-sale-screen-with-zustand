import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCategoryStore = create(
  persist(
    (set) => {
      return {
        categories: [
          { id: 0, title: "All" },
          { id: 1, title: "Bread" },
          { id: 2, title: "Coffee" },
          { id: 3, title: "Smoothies" },
          { id: 4, title: "Cake" },
        ],

        addCategory: (newCategory) =>
          set((state) => ({
            categories: [...state.categories, newCategory],
          })),
        activeCategory: "All",
        selectCategory: (newCategory) => {
          set({ activeCategory: newCategory });
        },
      };
    },
    {
      name: "category-storage", // Unique name for the localStorage key
    },
  ),
);

export default useCategoryStore;
