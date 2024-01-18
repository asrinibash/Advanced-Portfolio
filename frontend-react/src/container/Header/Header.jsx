import React from "react";
import { motion } from "framer-motion";

import { AppWrap,MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <h2 className="h2-hello">Hello I'm, A Srinibash Achary</h2>
      <h1>Full Stack Developer</h1>
    </motion.div>
  </div>
);

export default AppWrap(Header, "home");
