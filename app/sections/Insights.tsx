"use client";
import React, { useRef, useState } from 'react';
import { motion } from "framer-motion";
import { InsightCard, TitleText, TypingText } from "../components";
import { staggerContainer, fadeIn } from "../utils/motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';

const variacoesAnimadas= {
  inicio: {
    opacity: 1,
    x: 1000,
  },
  animacao: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1
    },
  },
  fim: {
    opacity: 0,
    x: 1000,
    transition: {
      duration: 1
    },
  }
}

const Insights = () => (
  <section className="paddings relative z-10">
    <motion.div
   initial={"inicio"}
   animate={"animacao"}
   exit={"fim"}
   variants={variacoesAnimadas}
      className="innerWidth mx-auto flex flex-col"
    >
      <Image
          src="/4.9.png"
          width={136}
          height={100}
          alt="map"
          className="imgnum"
        />
    <motion.h1  initial={"inicio"}
   animate={"animacao"}
   exit={"fim"}
   variants={variacoesAnimadas}  className="txts">
    Média baseada em avaliações dos clientes. <br /> É provável que você também fique <br /> impressionado.
    </motion.h1>
    </motion.div>
    <motion.div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
       
      >
        <SwiperSlide><h2 className='text-left text-white font-thin mt-14 mb-9'>
        A Plexus foi essencial para a comunicação visual do estúdio, conseguiram representar graficamente o que estava na nossa mente de forma muito clara e profissional, o resultado foi além do que esperavamos. O atendimento também foi um diferencial, sempre dispostos a ajudar e propor novas ideias. Com certeza estará com a gente nos próximos projetos.
        </h2>
          <div className='flex'>
          <img className='max-w-14 mr-5' src="/lety.png" alt="" />
          <div>
            <h1 className='text-white text-left '>Letícia Binote <p className='text-transp-white text-sm'> CEO DA LETHY ARQUITETURA </p> <p className='text-transp-white text-xs'> @Lettyarquitetura </p></h1>
          </div>
          </div>
          </SwiperSlide>
        <SwiperSlide><h2 className='text-left text-white font-thin mt-14 mb-9'>
        Um ponto importante é que a Plexus também fornece uma estrutura de pensamento estratégico para o meu negócio, e não só operacional. O Felipe entende bem de funis de venda, design, anúncios que convertem e estratégias para escalar vendas. Tenho certeza que a Plexus foi parte crucial no bom resultado que eu tive. Indico para qualquer um.
        </h2>
          <div className='flex'>
          <img className='max-w-14 mr-5' src="/igor.png" alt="" />
          <div>
            <h1 className='text-white text-left '>Igor Pellacani <p className='text-transp-white text-sm'> CEO DA PELLACANI CAPITAL </p> <p className='text-transp-white text-xs'> @igorpellacani </p></h1>
          </div>
          </div></SwiperSlide>
        <SwiperSlide><h2 className='text-left text-white font-thin mt-14 mb-9'>
        Quero agradecer ao time da Plexus por todo empenho, atenção e carinho com os quais você faz o seu trabalho. Pra mim fica bem nítido que além de oferecer um serviço de altíssima qualidade, você põe o seu coração no seu trabalho. Muita gratidão a vocês 🙏🏻🙏🏻🙏🏻
        </h2>
          <div className='flex'>
          <img className='max-w-14 mr-5' src="/amanda.png" alt="" />
          <div>
            <h1 className='text-white text-left '>Amanda Soares<p className='text-transp-white text-sm'>CEO DO LABORATÓRIO A.S</p> <p className='text-transp-white text-xs'>@amanda.soaresbr</p></h1>
          </div>
          </div></SwiperSlide>
          <SwiperSlide><h2 className='text-left text-white font-thin mt-14 mb-9'>
        A Plexus foi essencial para a comunicação visual do estúdio, conseguiram representar graficamente o que estava na nossa mente de forma muito clara e profissional, o resultado foi além do que esperavamos. O atendimento também foi um diferencial, sempre dispostos a ajudar e propor novas ideias. Com certeza estará com a gente nos próximos projetos.
        </h2>
          <div className='flex'>
          <img className='max-w-14 mr-5' src="/lety.png" alt="" />
          <div>
            <h1 className='text-white text-left '>Letícia Binote <p className='text-transp-white text-sm'> CEO DA LETHY ARQUITETURA </p> <p className='text-transp-white text-xs'> @Lettyarquitetura </p></h1>
          </div>
          </div>
          </SwiperSlide>
        <SwiperSlide><h2 className='text-left text-white font-thin mt-14 mb-9'>
        Um ponto importante é que a Plexus também fornece uma estrutura de pensamento estratégico para o meu negócio, e não só operacional. O Felipe entende bem de funis de venda, design, anúncios que convertem e estratégias para escalar vendas. Tenho certeza que a Plexus foi parte crucial no bom resultado que eu tive. Indico para qualquer um.
        </h2>
          <div className='flex'>
          <img className='max-w-14 mr-5' src="/igor.png" alt="" />
          <div>
            <h1 className='text-white text-left '>Igor Pellacani <p className='text-transp-white text-sm'> CEO DA PELLACANI CAPITAL </p> <p className='text-transp-white text-xs'> @igorpellacani </p></h1>
          </div>
          </div></SwiperSlide>
        <SwiperSlide><h2 className='text-left text-white font-thin mt-14 mb-9'>
        Quero agradecer ao time da Plexus por todo empenho, atenção e carinho com os quais você faz o seu trabalho. Pra mim fica bem nítido que além de oferecer um serviço de altíssima qualidade, você põe o seu coração no seu trabalho. Muita gratidão a vocês 🙏🏻🙏🏻🙏🏻
        </h2>
          <div className='flex'>
          <img className='max-w-14 mr-5' src="/amanda.png" alt="" />
          <div>
            <h1 className='text-white text-left '>Amanda Soares<p className='text-transp-white text-sm'>CEO DO LABORATÓRIO A.S</p> <p className='text-transp-white text-xs'>@amanda.soaresbr</p></h1>
          </div>
          </div></SwiperSlide>
        
      </Swiper>
      </motion.div>
  </section>
);

export default Insights;
