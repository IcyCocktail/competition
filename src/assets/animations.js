import { easeOut } from "framer-motion";

export const containerVariants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.5, // Stagger by 0.3 seconds
        }
    }
};

export const fadeIn = {
    initial: {
        opacity: 0,
        x: 100
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            ease: easeOut
        }
    },
};