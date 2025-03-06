import React from 'react';
import Typewriter from 'typewriter-effect';

interface TypingCardProps {
  onFinish?: () => void;
}

const TypingCard: React.FC<TypingCardProps> = ({ onFinish }) => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-xs md:max-w-xl mx-4 border border-pink-500 max-h-[70vh] overflow-y-auto">
      <div className="text-lg md:text-xl lg:text-2xl font-handwriting leading-relaxed text-left whitespace-pre-line">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Meu amor,")
              .pauseFor(500)
              .typeString("\nHoje quero dedicar algumas palavras a você.")
              .pauseFor(500)
              .typeString("\nVocê é a luz que ilumina meus dias,")
              .pauseFor(500)
              .typeString("\nA poesia que embala meus sonhos,")
              .pauseFor(500)
              .typeString("\nE o sorriso que faz tudo valer a pena.")
              .pauseFor(500)
              .typeString("\nCada momento ao seu lado é um presente,")
              .pauseFor(500)
              .typeString("\nUma lembrança que guardo com carinho no coração.")
              .pauseFor(500)
              .typeString("\nHoje e sempre, quero celebrar você...")
              .pauseFor(500)
              .typeString("\nA mulher incrível, forte e maravilhosa que eu tanto amo.")
              .pauseFor(500)
              .typeString("\nFeliz Dia das Mulheres! 💖")
              .pauseFor(500)
              .callFunction(() => {
                if (onFinish) onFinish();
              })
              .start();
          }}
          options={{
            delay: 50,
            cursor: "_",
            wrapperClassName: "text-pink-400 font-handwriting inline-block",
          }}
        />
      </div>
    </div>
  );
};

export default TypingCard;
