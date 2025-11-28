import { useEffect } from "react";

function IspageInView( ispageVisible = false ) {

    useEffect(() => {
        if (ispageVisible) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }

    }, [ispageVisible]);
}

export default IspageInView