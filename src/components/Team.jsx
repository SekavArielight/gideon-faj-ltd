import React from "react";

const Team = () => {
  return (
    <div className="bg-aboutBlack pb-28">
      <div className="mx-auto max-w-screen-2xl px-28 flex justify-between gap-5">
        <div>
          <p className="text-[#8e8c8c] font-bold">Our Team</p>
          <h1 className="text-[#fefefe] font-bold text-[28px] inline">
            Our Dedicated Team <br /> Members
          </h1>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black/50 opacity-50"></div>
          <img src="/public/images/team-1.webp" alt="Gideon-Faj" className="w-64 rounded-lg transition-transform duration-300 hover:scale-110"/>
          <div className="w-full text-center absolute bottom-5 z-30 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="text-[#fefefe] text-xl font-bold">Gideon-Faj Owoeye</p>
            <p className="text-[#222121] text-lg font-black">Head Innovator</p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black/50 opacity-50"></div>
          <img src="/public/images/team-2.webp" alt="Adebare Amos" className="w-64 rounded-lg"/> 
        </div>
        <div>
          <img src="/public/images/team-1.webp" alt="Gideon-Faj" className="w-64 rounded-lg"/>
        </div>
      </div>
    </div>
  );
};

export default Team;
