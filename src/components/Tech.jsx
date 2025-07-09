import React from "react";
import { technologies } from "./technologies";
import LogoAsteroidsScene from "../components/LogoAsteroidsScene";
import SectionWrapper from "./SectionWrapper";

const Tech = () => {
  return (
    <div id="skills" className="flex flex-wrap justify-center gap-10">
      <LogoAsteroidsScene icons={technologies.map((tech) => tech.icon)} />
    </div>
  );
};

export default SectionWrapper(Tech, "technologies");
