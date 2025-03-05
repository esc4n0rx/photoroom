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
            value: 30,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: ["#ff69b4", "#ff1493", "#ff69b4"]
          },
          shape: {
            type: ["heart", "circle"],
            options: {
              heart: {
                particles: {
                  size: {
                    value: 16
                  }
                }
              },
              circle: {
                particles: {
                  size: {
                    value: 10
                  }
                }
              }
            }
          },
          opacity: {
            value: 0.6,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 8,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 3,
              sync: false
            }
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
              default: "out"
            },
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "bubble"
            },
            resize: true
          },
          modes: {
            bubble: {
              distance: 200,
              size: 12,
              duration: 2,
              opacity: 0.8,
              speed: 3
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