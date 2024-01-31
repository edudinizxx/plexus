"use client";

import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { TitleText, TypingText } from "../components";

const AccorDeon = () => {
  const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

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
      <AccordionItem key="1" aria-label="Accordion 1" title="Quanto tempo leva para desenvolver um website?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Quais são os custos envolvidos no desenvolvimento de um website?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Vocês ofoerem serviços de otimização para mecanismos de busca?">
        {defaultContent}
      </AccordionItem>
    </Accordion>
    </div>
    <div className="text-white font-light">
    <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="Como funciona o processo de design e desenvolvimento do website?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Meu website será responsivo em dispositivos móveis?">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Como posso realizar atualizações no meu website após o lançamento?">
        {defaultContent}
      </AccordionItem>
    </Accordion>
    </div>
    </div>
   
    </div>
</div>
);
}

export default AccorDeon