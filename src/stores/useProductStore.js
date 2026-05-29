import { create } from "zustand";

const useProductStore = create((set, get) => {
  return {
    products: [
      {
        id: 1,
        title: "Sourdough Bread",
        price: 5000,
        category: "Bread",
        image: "/Images/1.png",
      },
      {
        id: 2,
        title: "Baguette",
        price: 4000,
        category: "Bread",
        image: "/Images/2.png",
      },
      {
        id: 3,
        title: "Croissant",
        price: 4500,
        category: "Bread",
        image: "/Images/3.png",
      },
      {
        id: 4,
        title: "Whole Wheat Bread",
        price: 4800,
        category: "Bread",
        image: "/Images/4.png",
      },

      {
        id: 5,
        title: "Espresso",
        price: 3000,
        category: "Coffee",
        image: "/Images/11.png",
      },
      {
        id: 6,
        title: "Cappuccino",
        price: 5500,
        category: "Coffee",
        image: "/Images/10.png",
      },
      {
        id: 7,
        title: "Latte",
        price: 6000,
        category: "Coffee",
        image: "/Images/9.png",
      },
      {
        id: 8,
        title: "Mocha",
        price: 6500,
        category: "Coffee",
        image: "/Images/10.png",
      },

      {
        id: 9,
        title: "Strawberry Smoothie",
        price: 7000,
        category: "Smoothies",
        image: "/Images/13.png",
      },
      {
        id: 10,
        title: "Mango Smoothie",
        price: 7200,
        category: "Smoothies",
        image: "/Images/14.png",
      },
      {
        id: 11,
        title: "Banana Smoothie",
        price: 6800,
        category: "Smoothies",
        image: "/Images/15.png",
      },
      {
        id: 12,
        title: "Blueberry Smoothie",
        price: 7500,
        category: "Smoothies",
        image: "/Images/16.png",
      },

      {
        id: 13,
        title: "Chocolate Cake",
        price: 9000,
        category: "Cake",
        image: "/Images/5.png",
      },
      {
        id: 14,
        title: "Vanilla Cake",
        price: 8500,
        category: "Cake",
        image: "/Images/6.png",
      },
      {
        id: 15,
        title: "Red Velvet Cake",
        price: 9500,
        category: "Cake",
        image: "/Images/7.png",
      },
      {
        id: 16,
        title: "Cheesecake",
        price: 10000,
        category: "Cake",
        image: "/Images/8.png",
      },
    ],

    addProduct: (newProduct) =>
      set((state) => ({
        products: [...state.products, newProduct],
      })),
    isOpen: false,
    setIsOpen: (newStatus) => set({ isOpen: newStatus }),
    filterProducts: (category, keyword) => {
      const { products } = get();

      return products
        .filter((el) => category === "All" || el.category === category)
        .filter(
          (el) => el.title.toLowerCase().search(keyword.toLowerCase()) !== -1,
        );
    },
    q: "",
    setQ: (keyword) => set({ q: keyword }),
  };
});

export default useProductStore;
