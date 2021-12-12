export const initial = {
    initial: {
        scale: 0,
    },

    animate: {
        scale: 1,
        transition: {
            duration: 0.5,
        },
    },
};

export const parent = {
    offscreen: {
        opacity: 0,
    },
    onscreen: {
        opacity: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.3,
        },
    },
};

export const child = {
    offscreen: {
        scale: 0.5,
        opacity: 0,
        transition: {
            duration: 1,
        },
    },
    onscreen: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 1,
        },
    },
};

export const Customchild = {
    offscreen: {
        x: '-60vw',
        opacity: 0,
    },
    onscreen: {
        opacity: 1,
        x: 0
    },
}
