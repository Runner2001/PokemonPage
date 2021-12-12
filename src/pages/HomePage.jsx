import { motion } from "framer-motion";
import React from "react";
import Event from "../components/HomeComponents/Event";
import Hero from "../components/HomeComponents/Hero";
import MobileGame from "../components/HomeComponents/MobileGame";
import NewPost from "../components/HomeComponents/NewPost";
import { PageTransition } from "./PageTransiton";

const HomePage = () => {
  return (
    <motion.div variants={PageTransition} exit="exit">
      <Hero />
      <NewPost />
      <MobileGame />
      <Event />
    </motion.div>
  );
};

export default HomePage;
