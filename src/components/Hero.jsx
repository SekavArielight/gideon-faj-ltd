import React from "react";

const Hero = () => {
  return (
    <div className="relative w-screen overflow-x-hidden bg-homeBlack max-w-full px-28">
      <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="py-40 mx-auto flex-1">
          <p className="text-brandcolor uppercase font-mono font-bold py-4">
            100+ projects successfully completed
          </p>
          <h1 className="uppercase text-blue-50 text-4xl md:text-7xl xl:text-8xl text-center sm:text-left font-CloverGrotesk font-bold">
            Empower Your <br /> Business To <br /> Grow
          </h1>
          <p className="text-blue-50 py-4 text- font-sans">
            Embark on your journey with us as your trusted guide, <br /> every
            step of the way
          </p>
          <a href="#contact">Hi</a>
        </div>

        <div className=""></div>
      </div>
    </div>
  );
};

export default Hero;
