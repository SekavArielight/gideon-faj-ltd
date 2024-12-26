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
        <div className="relative">
          <img src="/public/images/team-1.webp" alt="Gideon-Faj" className="w-64 rounded-lg"/>
          <div className="absolute bottom-0">
            <p className="text-[#fefefe]">Gideon-Faj Owoeye</p>
            <p className="text-[#6d6d6d]">Head Innovator</p>
          </div>
        </div>
        <div>
          <img src="/public/images/team-2.webp" alt="Adebare Amos" className="w-64 rounded-lg"/> 
          <div className="absolute bottom-0">
            <p className="text-[#fefefe]">Gideon-Faj Owoeye</p>
            <p className="text-[#6d6d6d]">Head Innovator</p>
          </div>
        </div>
        <div>
          <img src="/public/images/team-1.webp" alt="Gideon-Faj" className="w-64 rounded-lg"/>
        </div>
      </div>
    </div>
  );
};

export default Team;
