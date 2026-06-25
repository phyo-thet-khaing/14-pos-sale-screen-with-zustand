import { create } from "zustand";
import { generateVoucherNumber } from "../utils/voucher";
import dayjs from "./../../node_modules/dayjs/esm/index";

const useVoucherStore = create((set, get) => ({
  items: [],
  addItem: (newItem) =>
    set({
      items: [...get().items, newItem],
    }),
  addQuantity: (id, amount) =>
    set((state) => ({
      items: state.items.map((el) =>
        el.id === id ? { ...el, quantity: el.quantity + amount } : el,
      ),
    })),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((el) => el.id != id),
    })),
  information: {
    voucherId: generateVoucherNumber(),
    date: dayjs().format("DD/MM/YYYY"),
    time: dayjs().format("hh:mm:ss A"),
  },
  getTotal: () => {
    const { items } = get();
    return items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );
  },

  getTax: () => {
    const total = get().getTotal();
    return total * 0.05;
  },

  getNetTotal: () => {
    const total = get().getTotal();
    const tax = get().getTax();
    return total + tax;
  },
  reset: () =>
    set({
      items: [],
      information: {
        voucherId: generateVoucherNumber(),
        date: dayjs().format("DD/MM/YYYY"),
        time: dayjs().format("hh:mm:ss A"),
      },
    }),
}));

export default useVoucherStore;
