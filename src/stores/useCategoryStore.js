import { create } from "zustand";

const useCategoryStore = create((set) => {
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
});

export default useCategoryStore;
