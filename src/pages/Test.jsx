import { useState, useEffect } from 'react';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    // Update dark mode preference in local storage
    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    // Load dark mode preference from local storage
    useEffect(() => {
        const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
        if (savedDarkMode !== null) {
            setDarkMode(savedDarkMode);
        }
    }, []);

    // Update body class based on dark mode state
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <div className={darkMode ? 'dark' : ''}>
            <nav className="bg-gray-200 dark:bg-gray-800 py-4 px-8">
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                        My Portfolio
                    </h1>
                    <div>
                        <label htmlFor="darkModeToggle" className="text-gray-700 dark:text-white mr-2">
                            Dark Mode
                        </label>
                        <input
                            type="checkbox"
                            id="darkModeToggle"
                            checked={darkMode}
                            onChange={toggleDarkMode}
                            className="transform scale-150"
                        />
                    </div>
                </div>
            </nav>
            {/* Rest of your application */}
        </div>
    );
}

export default App;
