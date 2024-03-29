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
      <Swiper   breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 80 },
        480: { slidesPerView: 1, spaceBetween: 150 },
        768: { slidesPerView: 3, spaceBetween: 50 },
        1024: { slidesPerView: 3, spaceBetween: 150 },
      }}
        slidesPerView={3}
        spaceBetween={30}
       
      >
        <SwiperSlide><h2 className='text-left text-white font-thin mt-14 mb-9'>
        Edu, já faz uns 1,5 anos que estamos trabalhando juntos, e sempre deu certo. Suas artes são demais, e as páginas que você faz são incríveis. Parabéns pelo trabalho sensacional! Vamos continuar assim por muito tempo. Sempre que preciso de algo, você manda super bem. E o legal é que o que você faz não é só bonito, mas também ajuda a vender. Isso é top! Valeu mesmo!
        </h2>
          <div className='flex'>
          <img className='max-w-14 mr-5' src="/rerisson.png" alt="" />
          <div>
            <h1 className='text-white text-left '>Rerisson Gomes<p className='text-transp-white text-sm'>CEO M8 Marketing </p> <p className='text-transp-white text-xs'> @M8ADS </p></h1>
          </div>
          </div>
          </SwiperSlide>
        <SwiperSlide><h2 className='text-left text-white font-thin mt-14 mb-9'>
        Fala Edu, estamos trabalhando juntos já a mais de 2 anos e gostaria de agradecer por tantos trabalhos entregues com maestria, já trabalhei com outros profissionais mas nenhum deles chegou perto do que você consegue desenvolver, você e seu time tem uma capacidade única de absorver a ideia e melhorar ela como ninguém consegue! 
Obrigado por tudo 🙏🏼
        </h2>
          <div className='flex'>
          <img className='max-w-14 mr-5' src="/moroni.png" alt="" />
          <div>
            <h1 className='text-white text-left '>Morôni Duarte <p className='text-transp-white text-sm'>CEO Pixel Digital </p> <p className='text-transp-white text-xs'> @moroniduarte1 </p></h1>
          </div>
          </div></SwiperSlide>
        <SwiperSlide><h2 className='text-left text-white font-thin mt-14 mb-9'>
        Quero agradecer ao time do Edu por todo empenho, atenção e carinho com os quais você faz o seu trabalho. Pra mim fica bem nítido que além de oferecer um serviço de altíssima qualidade, você põe o seu coração no seu trabalho. Muita gratidão a vocês 🙏🏻🙏🏻🙏🏻
        </h2>
          <div className='flex'>
          <img className='max-w-14 mr-5' src="/amanda.png" alt="" />
          <div>
            <h1 className='text-white text-left '>Amanda Soares<p className='text-transp-white text-sm'>Pediatra</p> <p className='text-transp-white text-xs'>@amanda.soaresbr</p></h1>
          </div>
          </div></SwiperSlide>
          <SwiperSlide><h2 className='text-left text-white font-thin mt-14 mb-9'>
        Edu, já faz uns 1,5 anos que estamos trabalhando juntos, e sempre deu certo. Suas artes são demais, e as páginas que você faz são incríveis. Parabéns pelo trabalho sensacional! Vamos continuar assim por muito tempo. Sempre que preciso de algo, você manda super bem. E o legal é que o que você faz não é só bonito, mas também ajuda a vender. Isso é top! Valeu mesmo!
        </h2>
          <div className='flex'>
          <img className='max-w-14 mr-5' src="/rerisson.png" alt="" />
          <div>
            <h1 className='text-white text-left '>Rerisson Gomes<p className='text-transp-white text-sm'>CEO M8 Marketing </p> <p className='text-transp-white text-xs'> @M8ADS </p></h1>
          </div>
          </div>
          </SwiperSlide>
        <SwiperSlide><h2 className='text-left text-white font-thin mt-14 mb-9'>
        Fala Edu, estamos trabalhando juntos já a mais de 2 anos e gostaria de agradecer por tantos trabalhos entregues com maestria, já trabalhei com outros profissionais mas nenhum deles chegou perto do que você consegue desenvolver, você e seu time tem uma capacidade única de absorver a ideia e melhorar ela como ninguém consegue! 
Obrigado por tudo 🙏🏼
        </h2>
          <div className='flex'>
          <img className='max-w-14 mr-5' src="/moroni.png" alt="" />
          <div>
            <h1 className='text-white text-left '>Morôni Duarte <p className='text-transp-white text-sm'>CEO Pixel Digital </p> <p className='text-transp-white text-xs'> @moroniduarte1 </p></h1>
          </div>
          </div></SwiperSlide>
        <SwiperSlide><h2 className='text-left text-white font-thin mt-14 mb-9'>
        Quero agradecer ao time do Edu por todo empenho, atenção e carinho com os quais você faz o seu trabalho. Pra mim fica bem nítido que além de oferecer um serviço de altíssima qualidade, você põe o seu coração no seu trabalho. Muita gratidão a vocês 🙏🏻🙏🏻🙏🏻
        </h2>
          <div className='flex'>
          <img className='max-w-14 mr-5' src="/amanda.png" alt="" />
          <div>
            <h1 className='text-white text-left '>Amanda Soares<p className='text-transp-white text-sm'>Pediatra</p> <p className='text-transp-white text-xs'>@amanda.soaresbr</p></h1>
          </div>
          </div></SwiperSlide>
        
      </Swiper>
      </motion.div>
  </section>
);

export default Insights;
