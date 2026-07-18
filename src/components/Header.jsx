import { BellDot, Moon, RefreshCcw, Sun, UserCog } from "lucide-react";

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 sm:px-6">
      <h1 className="text-lg font-bold text-gray-800 truncate dark:text-white sm:text-xl">
        Coo' Bakery
      </h1>

      <div className="flex items-center gap-1 sm:gap-2">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 text-gray-500 transition-colors rounded-lg hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          aria-label="Toggle theme"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        {/* Refresh */}
        <button
          className="p-2 text-gray-500 transition-colors rounded-lg hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          aria-label="Refresh"
        >
          <RefreshCcw size={18} />
        </button>

        {/* Notification */}
        <button
          className="p-2 text-gray-500 transition-colors rounded-lg hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          aria-label="Notifications"
        >
          <BellDot size={18} />
        </button>

        {/* Settings */}
        <button
          className="p-2 text-gray-500 transition-colors rounded-lg hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          aria-label="Settings"
        >
          <UserCog size={18} />
        </button>
      </div>
    </header>
  );
};

export default Header;
