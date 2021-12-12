import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { parent, child } from "./Framer";
import { eventitem } from "./eventData";

export const EventDetail = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start("onscreen");
    }
  }, [inView]);

  const Show = eventitem.map((item) => {
    return (
      <motion.div className="item" variants={child} key={item.id}>
        <img src={item.img} alt={item.name} />
        <div className="background">
          <h4 className="event-title">{item.name}</h4>
        </div>
      </motion.div>
    );
  });

  return (
    <motion.section className="event" id="event">
      <motion.div
        className="event-item"
        ref={ref}
        variants={parent}
        initial="offscreen"
        animate={animation}
      >
        {Show}
      </motion.div>
    </motion.section>
  );
};
