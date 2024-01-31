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
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Entre em contato
        </h4>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-gradient-to-r from-violet-900 via-orange-700 to-orange-700 rounded-[32px] gap-[12px]"
        >
          <Image
            src="/bi_headset-vr.png"
            width={24}
            height={24}
            alt="headset"
            className="object-contain"
          />
          <span className="font-normal text-[16px] text-white uppercase">
            Enviar mensagem agora
          </span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className=" flex justify-between flex-wrap gap-8">
         <img src="/logo.png" alt="" />
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
