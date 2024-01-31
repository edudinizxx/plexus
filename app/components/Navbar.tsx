"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <header>
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="xPaddings py-8 relative"
    >
      <div className="absolute w-[50%] inset-0 gradient-01 " />
      <div className="innerWidth mx-auto flex gap-8 justify-center">
        <Image
          src="/logo.png"
          width={136}
          height={100}
          alt="search"
          className="object-contain "
        />
      </div>
    </motion.nav>
  </header>
);

export default Navbar;
