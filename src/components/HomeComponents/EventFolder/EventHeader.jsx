import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { initial } from "./Framer";

export const Header = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start("animate");
    }
  }, [inView]);
  return (
    <motion.div
      ref={ref}
      className="heading"
      variants={initial}
      initial="initial"
      animate={animation}
    >
      <h3>today hot news and event</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deserunt
        illum, ipsam quisquam at fuga anrelative
      </p>
    </motion.div>
  );
};
