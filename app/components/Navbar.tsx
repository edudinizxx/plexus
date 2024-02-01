"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Navbar = () => (
  <header>
      <FloatingWhatsApp 
        phoneNumber="559884199728"
        accountName="Edu"
        avatar="/logoblack.png"
        statusMessage="Online"
        chatMessage="Olá! Diga como podemos te ajudar? 😊"
        placeholder="Digite aqui..."
        darkMode
        allowEsc
        notification
        notificationSound />
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="xPaddings py-8 relative"
    > <div className="gradient-11"></div>
      <div className="absolute w-[50%] inset-0 gradient-10 hero-gradient z-0 " />
      <div className="innerWidth flex gap-8 justify-center ">
        <Image
          src="/logo.svg"
          width={74}
          height={100}
          alt="search"
          className="object-contain"
        />
      </div>
    </motion.nav>
  </header>
);

export default Navbar;
