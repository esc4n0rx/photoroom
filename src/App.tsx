import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { ParticlesBackground } from './components/ParticlesBackground';
import { MusicPlayer } from './components/MusicPlayer';
import { PhotoSlideshow } from './components/PhotoSlideshow';
import TypingCard from './components/TypingCard';

function App() {
  const [step, setStep] = useState(0);
  const [textFinished, setTextFinished] = useState(false);

  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white relative overflow-hidden">
      <ParticlesBackground />

      <AnimatePresence>
        {step === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 0 0px rgba(255, 105, 180, 0.3)",
                  "0 0 0 20px rgba(255, 105, 180, 0)"
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              onClick={() => setStep(1)}
              className="bg-pink-500 text-white px-8 py-4 rounded-full text-xl font-bold flex items-center gap-2 hover:bg-pink-600 transition-colors"
            >
              <Heart className="animate-pulse" />
              Começar
            </motion.button>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-center justify-center bg-black/70 p-8"
          >
            <div className="bg-white text-black rounded-lg p-6 max-w-sm text-center">
              <p className="mb-4 text-lg font-bold">Atenção!</p>
              <p className="mb-6">
                Para uma melhor experiência, aumente o volume do seu dispositivo.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStep(2)}
                className="bg-pink-500 text-white px-4 py-2 rounded-full"
              >
                Continuar
              </motion.button>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 text-center relative z-10"
          >
            <div className="w-full flex flex-col items-center">
            <TypingCard onFinish={() => setTextFinished(true)} />

            {textFinished && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setStep(3)}
                className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-bold mt-6"
              >
                Seguir 💖
              </motion.button>
            )}
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="min-h-screen flex flex-col items-center justify-center p-4"
          >
            <MusicPlayer />
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
            >
              Feliz Dia das Mulheres!
            </motion.h1>
            <PhotoSlideshow />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
