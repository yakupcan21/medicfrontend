import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
    isOpen: boolean;
}

export const PopUp = ({ children, width = "fit-content", isOpen }: Props) => {
    const ref = useRef(null);

    const mainControls = useAnimation();

    useEffect(() => {

        if (isOpen) {
            mainControls.start("visible")
        } else {
            mainControls.start("hidden");
        }

    }, [isOpen, mainControls]);

    return (
        <div ref={ref} style={{ position: 'absolute', width, zIndex: '20' }}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, scale: 0},
                    visible: {opacity: 1, scale: 1},
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.3 }}
                style={{position: 'absolute', zIndex: '20'}}
            >
                {children}
            </motion.div>

        </div >
    );
};