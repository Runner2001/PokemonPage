import { motion } from "framer-motion";
import React from "react";
import PokedexShow from "../components/PokedexComponents/PokedexShow";
import { PageTransition } from "./PageTransiton";

function Pokedex() {
  return (
    <motion.div variants={PageTransition} exit="exit">
      <PokedexShow />
    </motion.div>
  );
}

export default Pokedex;
