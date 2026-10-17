import { createContext} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const ThemeContext = createContext()

function ThemeProvider({ children }) {
    // consuming custom hook useLocalStorage()
    const { value: theme, setValue: setTheme } = useLocalStorage("theme", "light")

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