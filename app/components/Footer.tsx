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
    <div className="" />
    <div className="innerWidth mx-auto flex flex-col gap-8">
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className=" flex justify-between items-center flex-wrap gap-8">
         <img src="/logo.svg" alt="" />
         <p className="font-normal text-[14px] text-white opacity-50">
          Politicas de Privacidade
          </p>
          <p className="font-normal text-[14px]  text-white opacity-50">
          CNPJ: 45.246.515/0001-04
          </p>
        </div>
      </div>
    </div>
  </motion.footer>
  </>
);

export default Footer;
