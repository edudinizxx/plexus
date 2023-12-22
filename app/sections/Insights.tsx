"use client";

import { motion } from "framer-motion";
import { InsightCard, TitleText, TypingText } from "../components";
import { staggerContainer } from "../utils/motion";
import Image from "next/image";

const Insights = () => (
  <section className="paddings relative z-10">
    <motion.div
      variants={staggerContainer(0.25, 0.25)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flex flex-col"
    >
      <Image
          src="/4.9.png"
          alt="map"
          className="imgnum"
        />
    <h1 className="txts">
    Média baseada em avaliações dos clientes. <br /> É provável que você também fique <br /> impressionado.
    </h1>
    </motion.div>
  </section>
);

export default Insights;
