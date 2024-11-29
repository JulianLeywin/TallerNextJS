export default function DarkModeToggle({ toggleTheme, theme }) {
    return (
        <button
            onClick={toggleTheme}
            className="py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-800 transition-all"
        >
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    );
}