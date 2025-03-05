import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/effect-fade';

import photo1 from '../assets/photo1.png';
import photo2 from '../assets/photo2.png';
import photo3 from '../assets/photo3.png';
import photo4 from '../assets/photo4.png';
import photo5 from '../assets/photo5.jpg';
import photo6 from '../assets/photo6.jpg';
import photo7 from '../assets/photo7.jpg';
import photo8 from '../assets/photo8.jpg';
import photo9 from '../assets/photo9.jpg';
import photo10 from '../assets/photo10.jpg';
import photo11 from '../assets/photo11.jpg';
import photo12 from '../assets/photo12.jpg';
import photo13 from '../assets/photo13.jpg';
import photo14 from '../assets/photo14.jpg';
import photo15 from '../assets/photo15.jpg';

const photos = [
  { url: photo1, text: "Cada olhar seu ilumina minha alma." },
  { url: photo2, text: "Seu sorriso é a poesia que encanta meus dias." },
  { url: photo3, text: "No seu abraço encontro a paz que procuro." },
  { url: photo4, text: "Te amar é descobrir a beleza em cada detalhe." },
  { url: photo5, text: "A paixão que nos une transcende o tempo." },
  { url: photo6, text: "Seu amor é o sol que aquece meu coração." },
  { url: photo7, text: "Entre sorrisos e suspiros, construímos nossa história." },
  { url: photo8, text: "Em cada batida do coração, há um verso de amor." },
  { url: photo9, text: "O encanto do seu olhar me faz flutuar nas estrelas." },
  { url: photo10, text: "Cada momento ao seu lado é um sonho realizado." },
  { url: photo11, text: "Seu amor é a melodia que embala minha vida." },
  { url: photo12, text: "Entre as cores do destino, encontrei você." },
  { url: photo13, text: "Sua presença transforma a rotina em poesia." },
  { url: photo14, text: "Nosso amor é a chama que nunca se apaga." },
  { url: photo15, text: "Contigo, cada segundo é uma eterna primavera." }
];

export const PhotoSlideshow = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-3xl mx-auto p-4"
    >
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        loop={true}
        className="shadow-2xl"
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <>
                <div className="relative aspect-[3/4]">
                  <motion.img
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={isActive ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={photo.url}
                    alt={`Momento ${index + 1}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={isActive ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mt-4 text-center"
                >
                  <p className="text-white-600 text-3xl font-semibold">
                    {photo.text}
                  </p>
                </motion.div>
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};
