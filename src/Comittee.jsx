import React from "react";
import Data from "./info";
import SinglePerson from "./singlePerson";

export default function Comittee(){
    const students = Data.map(person => {
        return(
            <SinglePerson
                id={person.id}
                img={person.img}
                name={person.name}
                position={person.position}
            />
        )
    })

    return(
        <div className="flex flex-col bg-sky-100 pr-20 pl-20 justify-center items-center pb-10">
            <h3 className="text-2xl text-yellow-600 md:text-4xl font-semibold uppercase mt-5">core comittee</h3>
            <div class="w-[8.125rem] h-1 border-t-4 border-cyan-700 mt-2 mb-10"></div>
            <div className="flex flex-col md:flex-row flex-wrap">
                {students}
            </div>
        </div>
        
    )
}

