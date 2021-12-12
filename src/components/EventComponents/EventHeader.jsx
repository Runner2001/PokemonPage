import { animate, motion } from "framer-motion";
import React from "react";
import { parent, child } from "./eventframer";

function EventHeader() {
  return (
    <div className="event-container">
      <h3 className="header">play the world champion game</h3>
      <motion.div
        className="event-box-container"
        variants={parent}
        initial="initial"
        animate="animate"
      >
        <motion.div className="item1" variants={child} custom={"left"}>
          <div className="goPage">
            <i className="fab fa-youtube"></i>
          </div>
          <div className="card">
            <div className="image">
              <img src="/images/Background/Pokemon Legends Arceus and Pokemon Diamond & Pearl Remakes Get Release Dates - IGN.jpeg" />
            </div>
            <div className="content">
              <h3>Hello Champion</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti ipsum vero deleniti repellendus distinctio, provident
                totam quisquam asperiores earum! Dolore.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div className="item2" variants={child}>
          <div className="goPage">
            <i className="fab fa-youtube"></i>
          </div>
          <div className="card">
            <div className="image">
              <img src="/images/Background/lucario.png" />
            </div>
            <div className="content">
              <h3>Lucario arrive</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </motion.div>
        <motion.div className="item4" variants={child}>
          <div className="goPage">
            <i className="fab fa-youtube"></i>
          </div>
          <div className="card">
            <div className="image">
              <img src="/images/Background/pokemon-unite-169.jpg" />
            </div>
            <div className="content">
              <h3>Hello Champion</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Corrupti ipsum vero deleniti repellendus distinctio, provident
                totam quisquam asperiores earum! Dolore.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div className="item3" variants={child} custom={"left"}>
          <div className="goPage">
            <i className="fab fa-youtube"></i>
          </div>
          <div className="card">
            <div className="image">
              <img src="/images/Background/card.jpg" />
            </div>
            <div className="content">
              <h3>Play TCN</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default EventHeader;
