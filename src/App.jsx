import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import Header from "./components/Header";
import InventorySection from "./components/InventorySection";
import VoucherSection from "./components/VoucherSection";

const App = () => {
  const [theme, setTheme] = useState("light");

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("color-theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  // Toggle function (we pass this to Header)
  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      setTheme("light");
    }
  };

  return (
    <main className="flex flex-col h-screen bg-white dark:bg-gray-900">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div className="grid flex-1 grid-cols-7">
        <InventorySection />
        <VoucherSection />
      </div>
      <Toaster position="bottom-right" richColors={true} />
    </main>
  );
};

export default App;
