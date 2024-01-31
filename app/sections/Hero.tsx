"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const Hero = () => (
  <section className="Paddings">
    <motion.div
      variants={staggerContainer(0.25, 0.25)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flex flex-col"
    >
      <div className="flexCenter flex-col relative z-10 mt-[60px] mb-24">
        <motion.h1 variants={textVariant(1.1)} className="text-7xl text-white font-bold text-center font-fami tracking-tight">
        Desenvolvemos sites e <br /> sistemas sob medida para o <br /> seu sucesso online!
        </motion.h1>
      </div>
      <div
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >
        <div className="fef" />
        <video src={require('../../public/video.mp4')} autoPlay muted loop className="w-ful h-ful" />
      </div>
    </motion.div>
  </section>
);

export default Hero;
