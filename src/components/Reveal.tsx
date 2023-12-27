import React, { useEffect, useRef } from 'react';
import {motion, useInView, useAnimation} from "framer-motion";

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content" }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once:true});

    const mainControls = useAnimation();

    useEffect(() => {
        console.log(isInView);
        if (isInView){
            mainControls.start({ scale: [0, 1.15, 1], opacity: [0, 1] });
        }
    }, [isInView]);

    return (
        <div ref={ref} style={{width}}>
            <motion.div
                initial={{ scale: 0 }}
                animate= {mainControls}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {children}
            </motion.div>
        </div >
    );
};