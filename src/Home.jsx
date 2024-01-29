import React from "react";

export default function home(){
    return(
        <div className="mt-8 ml-8 md:ml-24 text-[#D6BA70] md:mt-36">
            <h1 className="text-3xl md:text-8xl text-[#D6BA70]  font-bold">GMUN</h1>
            <h2 className="text-3xl md:text-8xl  text-[#F0B825] font-bold">Gitam Model United Nation</h2>
            <button className="h-10 w-[15rem] md:h-20 md:w-[25rem] bg-[#b9e8ff] bg-opacity-60 transition-all duration-200 border-2 border-[#F0B825] border-solid rounded-lg md:rounded-2xl mt-4 md:text-2xl text-white hover:border-[#B9E8FF] hover:bg-[#F0B825] hover:text-[#B9E8FF]">Applications open soon</button>
        </div>
    )
}