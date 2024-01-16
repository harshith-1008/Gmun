import React from "react";
import Data from "./info";
import SinglePerson from "./singlePerson";

export default function Comittee(){
    const students = Data.map(person => {
        return(
            <SinglePerson
                img={person.img}
                name={person.name}
                position={person.position}
            />
        )
    })

    return(
        <div className="flex flex-col bg-[#A8CDE2] pr-20 pl-20 justify-center items-center">
            <h3 className="text-yellow-600 text-4xl font-semibold uppercase mt-5">core comittee</h3>
            <div class="w-[130px] h-1 border-t-4 border-cyan-700 mt-2 mb-10"></div>
            <div className="flex flex-row flex-wrap">
                {students}
            </div>
        </div>
        
    )
}

