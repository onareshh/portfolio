import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "BackEnd Developer",
          "MERN Stack Developer",
          "FrontEnd Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 17,
      }}
    />
  );
}

export default Type;
