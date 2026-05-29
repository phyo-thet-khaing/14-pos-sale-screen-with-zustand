import { BellDot, Moon, RefreshCcw, Sun, UserCog } from "lucide-react";

export default function Header({ theme, toggleTheme }) {
  return (
    <header className="flex justify-between border-b border-gray-300 dark:border-gray-700 px-5 py-2 bg-white dark:bg-gray-900">
      <h1 className="font-heading font-bold text-xl text-gray-800 dark:text-white">
        Coo' Bakery
      </h1>

      <div className="flex gap-5">
        {/* Theme Toggle */}
        <button
          className="text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-1"
          onClick={toggleTheme}
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        {/* Refresh */}
        <button className="text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-1">
          <RefreshCcw size={18} />
        </button>

        {/* Notification */}
        <button className="text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-1">
          <BellDot size={18} />
        </button>

        {/* Settings */}
        <button className="text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg p-1">
          <UserCog size={18} />
        </button>
      </div>
    </header>
  );
}
