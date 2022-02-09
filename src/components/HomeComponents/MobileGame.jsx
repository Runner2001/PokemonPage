import React from "react";
import { motion } from "framer-motion";

function MobileGame() {
  return (
    <motion.div className="herosection3" id="product">
      <h3 className="midtext">are you mobile gamer ?</h3>
      <div className="left">
        <h2 className="title">
          Pokemon G <img src={process.env.PUBLIC_URL + "/images/logo.png"} />
        </h2>
        <h4 className="subtitle">live action ar game</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
          volutpat donec enim, sit tincidunt nunc, quis parturient suspendisse.
          Ut aliquam libero euismod mollis eu commodo eu. Vulputate ornare a,
          sed gravida tortor, fermentum.
        </p>
        <button className="btn">Play</button>
      </div>
      <div className="right">
        <h2 className="title">Pokemon unite</h2>
        <h4 className="subtitle">Streagy game play</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
          volutpat donec enim, sit tincidunt nunc, quis parturient suspendisse.
          Ut aliquam libero euismod mollis eu commodo eu. Vulputate ornare a,
          sed gravida tortor, fermentum.
        </p>
        <button className="btn">Play</button>
      </div>
    </motion.div>
  );
}

export default MobileGame;
