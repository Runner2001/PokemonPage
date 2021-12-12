import React from "react";
import { motion } from "framer-motion";
import { child } from "./Framer";
import { Link } from "react-router-dom";

function PokedexItem({ Pokemon, show }) {
  const items = Pokemon.slice(0, show).map((each) => {
    return (
      <Link to={`/each/${each.id}`}>
        <motion.div
          className="box"
          key={each.id}
          variants={child}
          style={{ background: each.bgcolor }}
        >
          <div className="image">
            <img src={each.image} />
          </div>
          <div className="content">
            <h3>{each.name}</h3>
            <div className="nature">
              <h3>{each.hp}</h3>
              {each.ability.map((icons, i) => {
                return <img key={i} className="symbol" src={icons} />;
              })}
            </div>
          </div>
        </motion.div>
      </Link>
    );
  });
  return <>{items}</>;
}

export default PokedexItem;
