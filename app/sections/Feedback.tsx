"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../utils/motion";

const Feedback = () => (
  <section className="paddings relative z-10">
    <motion.div
      variants={staggerContainer(0.25, 0.25)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flex lg:flex-row flex-col gap-6"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white">
          Você está 
pronto para a transformação?
          </h4>
        </div>
        <p className="mt-[16px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
        Você está pronto para uma jornada incrível rumo ao seu potencial máximo? Chegou o momento de decolarmos juntos em direção ao sucesso que você merece!
        </p>
        <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#ffffff29] rounded-[32px] gap-[12px] buttoncontato"
        >
          <span className="font-normal text-[16px] text-white uppercase">
            Entrar em contato
          </span>
        </button>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-1 flexCenter"
      >
        <Image
          src="/planet-09.png"
          width={1000}
          height={1000}
          priority={true}
          alt="planet-09"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
            src="/stamp.png"
            width={155}
            height={155}
            priority={true}
            alt="stamp"
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
