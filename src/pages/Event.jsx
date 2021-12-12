import { motion } from "framer-motion";
import React from "react";
import EventGame from "../components/EventComponents/EventGame";
import EventHeader from "../components/EventComponents/EventHeader";
import GamePlay from "../components/EventComponents/GamePlay";
import { PageTransition } from "./PageTransiton";

function Event() {
  return (
    <motion.div variants={PageTransition} exit="exit">
      <EventHeader />
      <GamePlay />
      <EventGame />
    </motion.div>
  );
}

export default Event;
