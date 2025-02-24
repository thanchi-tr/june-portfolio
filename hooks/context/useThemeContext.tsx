"use client";
import { createContext, useContext, ReactNode, useState, useEffect } from "react";

interface ThemeContext {
    isDark: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContext | undefined>(undefined);

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within an ThemeProvider");
    }
    return context;
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDark, setTheme] = useState(false);
    useEffect(() => { document.documentElement.classList.toggle("dark") }, []);
    const toggleTheme = () => {
        setTheme(prev => !prev);
        document.documentElement.classList.toggle("dark");
    }

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}