import React, { useEffect } from "react";
import { eventData } from "./eventdata";
import { parent, gameChild } from "./eventframer";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function EventGame() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start("animate");
    }
  }, [inView]);

  return (
    <>
      <h3 className="Gameheader">up comming world race</h3>
      <motion.div
        className="gamecontainer"
        variants={parent}
        initial="initial"
        animate={animation}
        ref={ref}
      >
        {box}
      </motion.div>
    </>
  );
}
const box = eventData.map((item) => {
  return (
    <motion.div className="box" key={item.id} variants={gameChild}>
      <div className="image" style={{ background: item.bgcolor }}>
        <img src={process.env.PUBLIC_URL + item.img} alt="logo" />
      </div>
      <div className="content">
        <h3>{item.header}</h3>
        <p>{item.paragraph}</p>
      </div>
    </motion.div>
  );
});
export default EventGame;
