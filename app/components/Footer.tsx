"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { socials } from "../constants";
import { footerVariants } from "../utils/motion";

const Footer = () => (
  <>
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className="paddings py-8 relative"
  >
    <div className="footer-gradient" />
    <div className="innerWidth mx-auto flex flex-col gap-8">
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className=" flex justify-between flex-wrap gap-8">
         <img src="/logo.svg" alt="" />
          <p className="font-normal text-[14px] text-white opacity-50">
          2020 - 2024 Agência Plexus. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </motion.footer>
  </>
);

export default Footer;
