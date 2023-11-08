"use client";
import React from "react";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { ParticlesConfig } from "./config";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div id="particle-background">
      <Particles
        className="opacity-25"
        id="tsparticles"
        init={particlesInit}
        options={ParticlesConfig}
        height="100vh"
        width="100vw"
      />
    </div>
  );
};

export default ParticleBackground;
