import { useState } from "react";

function useThemeAnimation() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [origin, setOrigin] = useState({ x: 0, y: 0 });

    // ✅ opposite color
    const getOppositeColor = () => (isDarkMode ? "#ffffff" : "#000000");

    const toggleTheme = (e) => {
        if (!e?.currentTarget) return;

        const rect = e.currentTarget.getBoundingClientRect();

        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        setOrigin({ x, y });
        setIsAnimating(true);

        // switch theme mid animation
        setTimeout(() => {
            setIsDarkMode((prev) => {
                const newMode = !prev;
                document.documentElement.classList.toggle("dark", newMode);
                return newMode;
            });
        }, 200);

        setTimeout(() => {
            setIsAnimating(false);
        }, 700);
    };

    return {
        toggleTheme,
        isAnimating,
        isDarkMode,
        origin,
        overlayColor: getOppositeColor()
    };
}

export default useThemeAnimation;