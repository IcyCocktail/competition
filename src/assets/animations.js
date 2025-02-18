import { color, easeOut } from "framer-motion";

export const containerVariants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.5, // Stagger by 0.3 seconds
        }
    }
};

export const slideRight = {
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
export const slideLeft = {
    initial: {
        opacity: 0,
        x: -100
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            ease: easeOut
        }
    },
};

export const slideUp = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: easeOut
        }
    },
};

export const textReveal = {
    hidden: { opacity: 0, y: 20 }, // Start with opacity 0 and positioned slightly lower
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.05, duration: 0.5 }, // Delay each letter slightly
    }),
};

export const backClr = {
    hidden: {
        backgroundColor: "transparent",
        color: "var(--forest)"
    },
    animate: {
        backgroundColor: "var(--forest)",
        color: "white",
        transition: {
            duration: 0.4,
            ease: easeOut
        }
    }
}

export const lineVariants = {
    hidden: { width: "0%" }, // Start with zero width
    visible: (i) => ({
        width: "100%", // Expand to full width
        transition: {
            duration: 1.2,
            ease: "easeOut",
            delay: i * 0.5, // Stagger effect for each line
        },
    }),
};