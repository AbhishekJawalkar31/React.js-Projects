import { createContext, useState } from 'react'

export const ThemeContext = createContext()

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light")

    function toggleTheme() {
        setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className="store-app" data-theme={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}

export default ThemeProvider