import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
    isMenu: boolean;
    isAvatar: boolean;
    isOpen: boolean;

}

export const SideSlide = ({ children, width = "fit-content", isMenu, isAvatar, isOpen}: Props) => {
    const ref = useRef(null);

    const mainControls = useAnimation();

    useEffect(() => {
        if (isMenu) {
            if(isOpen){
                mainControls.start({ x: [0], opacity: [1] });
            }else {
                mainControls.start({ x: [75], opacity: [0] });
            }
        } else if (isAvatar) {
            if(isOpen){
                mainControls.start({ x: [0], opacity: [1] });
            }else {
                mainControls.start({ x: [75], opacity: [0] });
            }
        }
      }, [isMenu, isAvatar, isOpen, mainControls]);

    return (
        <div ref={ref} style={{position: 'relative', width, overflow: "hidden" }}>
            <motion.div
                initial= {{ opacity: 0, x: 75 }}
                animate={mainControls}
                transition={{ duration: 0.3}}
            >
                {children}
            </motion.div>    

        </div >
    );
};