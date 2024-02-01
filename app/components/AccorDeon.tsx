"use client";

import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { TitleText, TypingText } from "../components";

const AccorDeon = () => {
  const um =
  "Você pode ver nosso portfólio de design através do link";
  const dois =
  "O tempo necessário para desenvolver o projeto pode variar significativamente com base em diversos fatores, como o tipo de projeto que você precisa, complexidade, funcionalidades desejadas dentre outros fatores.";
  const tres =
  "Mantemos todos os nossos processos claros e transparentes para cada membro da equipe e para o cliente. Você obtém acesso ao controle de tempo, onde pode ver os marcos, sprints semanais e o prazo. Se desejar, criamos um grupo no WhatsApp.";
  const quatro =
  "Nosso processo de design anda de mãos dadas com o desenvolvimento para evitar qualidade indesejável após o lançamento do projeto. Construímos relacionamentos de longo prazo com nossos clientes e oferecemos suporte após o lançamento do projeto.";
  const cinco =
  "Iniciar um projeto conosco é simples! Entre em contato através do WhatsApp. ";
  const seis =
  "Utilizamos uma abordagem personalizada, analisando a identidade única de sua marca para criar designs exclusivos e impactantes.";

return (
 <div className="container mx-auto mt-14 mt-36">
   <TypingText title="| FAQ" textStyles="text-center" />
   <TitleText
        title={
          <>
          Perguntas Frequentes
          </>
        }
        textStyles="text-center mb-10 mt-8"
      />
   <div >
    <div className="flex justify-center  mb-20">  
    <div className="text-white font-light">
    <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="Onde posso ver seu portfólio de design?">
        {um}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Com que rapidez você pode começar a trabalhar no meu projeto?">
        {dois}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Como você mantém a comunicação durante o projeto?">
        {tres}
      </AccordionItem>
    </Accordion>
    </div>
    <div className="text-white font-light">
    <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="Você fornece serviços pós-lançamento?">
        {quatro}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Como posso iniciar um projeto com vocês e qual é o processo envolvido?">
        {cinco}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Como podemos garantir que o design criado para minha marca seja exclusivo e impactante?
">
        {seis}
      </AccordionItem>
    </Accordion>
    </div>
    </div>
   
    </div>
</div>
);
}

export default AccorDeon