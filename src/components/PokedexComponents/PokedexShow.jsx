import React, { useState } from "react";
import { motion } from "framer-motion";
import { Pokemon } from "../../Pokedex.js";
import PokedexItem from "./PokedexItem.jsx";
import { parent } from "./Framer";

function PokedexShow() {
  const [show, setShow] = useState(10);
  return (
    <section className="productcontainer">
      <div className="title">
        <h3>
          pokemon <span>{Pokemon.length}</span>
        </h3>
      </div>
      <motion.div
        className="box-container"
        variants={parent}
        initial="initial"
        animate="animate"
      >
        <PokedexItem Pokemon={Pokemon} show={show} />
      </motion.div>
      <div className="seemore">
        <button onClick={() => setShow(show + 10)} className="Seemore-btn">
          See More
        </button>
      </div>
    </section>
  );
}

export default PokedexShow;
