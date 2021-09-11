import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

const ScrollToTop = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (pageYOffset > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    if (!visible) {
        return false;
    }

    return (
        <div
            className="scroll-to-top cursor-pointer text-center"
            onClick={scrollToTop}
        >
            <i className="icon fas fa-chevron-up"></i>
        </div>
    );
};

export default ScrollToTop;