import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import Header from "./components/Header";
import InventorySection from "./components/InventorySection";
import VoucherSection from "./components/VoucherSection";

const App = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("color-theme");

    const isDark =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList.toggle("dark", isDark);

    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";

    document.documentElement.classList.toggle("dark", nextTheme === "dark");

    localStorage.setItem("color-theme", nextTheme);

    setTheme(nextTheme);
  };

  return (
    <main className="flex flex-col min-h-screen  bg-gray-50 dark:bg-gray-900">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <div className="grid flex-1 grid-cols-1 gap-4 p-3  sm:p-4 lg:grid-cols-7">
        {/* Inventory */}
        <div className=" lg:col-span-5">
          <InventorySection />
        </div>

        {/* Voucher */}
        <div className=" lg:col-span-2">
          <VoucherSection />
        </div>
      </div>

      <Toaster position="bottom-right" richColors />
    </main>
  );
};

export default App;
