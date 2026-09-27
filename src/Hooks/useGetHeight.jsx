import { useEffect, useState } from "react";

function useGetHeight(ref) {
    const [navHeight, setNavHeight] = useState(0);
    const [width, setWidth] = useState(0)
    useEffect(() => {
        const updateHeight = () => {
            if (!ref?.current) return;
            const rect = ref.current.getBoundingClientRect();
           const windowWidth = window.innerWidth;
           setWidth(windowWidth);
            const totalSpace = rect.top  + rect.height;
            setNavHeight(totalSpace);
        };

        updateHeight();

        window.addEventListener("resize", updateHeight);
        window.addEventListener("zoom", updateHeight);

        return () => {
            window.removeEventListener("resize", updateHeight);
            window.removeEventListener("zoom", updateHeight);
        };
    }, []);

    return {navHeight , width};
}

export default useGetHeight;