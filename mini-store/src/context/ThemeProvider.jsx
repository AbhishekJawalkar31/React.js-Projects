import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme")

        return savedTheme ? JSON.parse(savedTheme) : "light"
    })

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme))
    }, [theme])

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