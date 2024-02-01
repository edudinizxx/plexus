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
        className="flex-[0.5] lg:max-w-[370px] flex justify-center flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[37px] text-[37px]  text-white groupc">
          Você está 
pronto para a transformação?
          </h4>
         
        </div>
        <p className="mt-[16px] font-normal sm:text-[16px] text-[18px] text-white my-5 leading-7">
        Você está pronto para uma jornada incrível rumo ao seu potencial máximo? Chegou o momento de decolarmos juntos em direção ao sucesso que você merece!
        </p>

        <button className="bg-gradient-to-r from-amber-700 via-orange-700 to-fuchsia-600 text-sm text-white w-60 h-12 rounded-3xl">
          Entrar em contato
        </button>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="relative flex-1 flexCenter"
      >
        <Image
          src="/cta.jpg"
          width={1000}
          height={1000}
          priority={true}
          alt="mask"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]"
        />
        <motion.div
          variants={zoomIn(0.4, 1)}
          className="lg:block hidden absolute -left-[10%] top-[3%]"
        >
          <Image
            src="/redo.svg"
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
