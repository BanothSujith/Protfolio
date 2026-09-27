import { useEffect, useState } from "react";

export default function useScrollDirection() {
    const [scrollDir, setScrollDir] = useState({ scrolled: "down", islessScrolled:true });

    useEffect(() => {
        let lastScrollY = window.scrollY;
        let isFirstRun = true;

        const updateScrollDir = () => {
            const currentScrollY = window.scrollY;

            if (isFirstRun) {
                lastScrollY = currentScrollY;
                isFirstRun = false;
                return;
            }

            const islessScrolled = currentScrollY < 400;

            if (Math.abs(currentScrollY - lastScrollY) < 5) return;

            const direction = currentScrollY > lastScrollY ? "down" : "up";

            setScrollDir({
                scrolled: direction,
                islessScrolled,
            });

            lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
        };

        window.addEventListener("scroll", updateScrollDir);
        return () => window.removeEventListener("scroll", updateScrollDir);
    }, []);

    return scrollDir;
}