import { motion } from "framer-motion";
import React from "react";
import { parent, Customchild } from "./EventFolder/Framer";

const Hero = () => {
  return (
    <section className="herocontainer" id="home">
      <video
        src={process.env.PUBLIC_URL + "/images/bgvideo.mp4"}
        muted
        loop
        autoPlay
      ></video>
      {/* <img
        className="heroimage"
        src={process.env.PUBLIC_URL + "/images/DesktopBG.png"}
        alt="BackGround"
      /> */}

      <div className="background-blur">
        <motion.div
          className="herosection"
          variants={parent}
          initial="offscreen"
          animate="onscreen"
        >
          <motion.img
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            variants={Customchild}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              cursor: "pointer",
              transition: {
                duration: 0.5,
                yoyo: Infinity,
              },
            }}
          />
          <motion.h1 variants={Customchild}>
            the world most <span>realist ar</span>
            <br />
            and <br />
            the best <span>tv series</span>
          </motion.h1>
          <motion.p variants={Customchild}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et,
            pharetra, non in porta condimentum. Magna lorem posuere urna
            bibendum leo magna. Amet, tortor placerat suspendisse scelerisque
            proin turpis. Lectus lectus tortor fames bibendum ac dui tempor. Ut
            eleifend purus tristique aenean fringilla risus.
          </motion.p>
          <motion.button className="btn" variants={Customchild}>
            Play
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
