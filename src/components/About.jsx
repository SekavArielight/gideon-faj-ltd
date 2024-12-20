import React from "react";

const About = () => {
  return (
    <div className="h-dvh bg-aboutBlack relative">
      <div className="absolute inset-x-0 -translate-y-1/2 bg-cardBlack rounded-lg mx-auto p-11 max-w-6xl z-50 flex flex-col justify-between sm:flex-row">
        <div className="flex items-center justify-center flex-col gap-3">
          <p className="text-6xl text-blue-50 font-CloverGrotesk font-bold">50<span className="text-brandcolor">+</span></p>
          <p className="text-blue-50 font-CloverGrotesk">Satisfied Clients Served</p>
        </div>
        <div className="flex items-center justify-center flex-col gap-3">
          <p className="text-6xl text-blue-50 font-CloverGrotesk font-bold">100<span className="text-brandcolor">+</span></p>
          <p className="text-blue-50 font-CloverGrotesk">Projects Successfully Completed</p>
        </div>
        <div className="flex items-center justify-center flex-col gap-3">
          <p className="text-6xl text-blue-50 font-CloverGrotesk font-bold">15<span className="text-brandcolor">+</span></p>
          <p className="text-blue-50 font-CloverGrotesk">Years of Industry Experience</p>
        </div>
        <div className="flex items-center justify-center flex-col gap-3">
          <p className="text-6xl text-blue-50 font-CloverGrotesk font-bold">96<span className="text-brandcolor">%</span></p>
          <p className="text-blue-50 font-CloverGrotesk">Client Retention Rate</p>
        </div>
        <div className="flex items-center justify-center flex-col gap-3">
          <p className="text-6xl text-blue-50 font-CloverGrotesk font-bold">50<span className="text-brandcolor">+</span></p>
          <p className="text-blue-50 font-CloverGrotesk">Satisfied Clients Served</p>
        </div>
      </div>
    </div>
  );
};

export default About;
