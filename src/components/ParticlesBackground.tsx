import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      className="absolute inset-0"
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 900
            }
          },
          color: {
            value: ["#ff69b4", "#ff1493", "#ff6b81"] 
          },
          shape: {
            type: ["heart", "circle", "star"],
          },
          opacity: {
            value: 0.7,
            random: true,
            anim: {
              enable: true,
              speed: 1.5,
              opacity_min: 0.2,
              sync: false
            }
          },
          size: {
            value: 12,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 5,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 2, // Velocidade mais fluida
            direction: "top", // Faz as partículas subirem lentamente
            random: true,
            straight: false,
            outModes: {
              default: "out"
            },
            attract: {
              enable: false,
            }
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              // mode: "repulse" // Move suavemente ao passar o mouse
            },
            onClick: {
              enable: true,
              mode: "bubble" // Pequeno efeito de explosão ao clicar
            },
            resize: true
          },
          modes: {
            repulse: {
              distance: 120,
              duration: 0.4
            },
            bubble: {
              distance: 150,
              size: 18,
              duration: 2,
              opacity: 1
            }
          }
        },
        background: {
          color: "#1a1a2e"
        },
        retina_detect: true
      }}
    />
  );
};
