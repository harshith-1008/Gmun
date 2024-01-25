import React from "react";

export default function SinglePerson(props) {
    const specialId = props.id === 1 || props.id === 3;
    let className = "flex flex-col basis-1/3 items-center mb-10";
    if(specialId) {
        className += " md:mt-28";
    }
    if(props.id === 1){
        className += " md:pl-40"
    }
    if(props.id === 3){
        className += " md:pr-40"
    }

    return (
        <div className={className}>
            <img className=" size-56 rounded-[125px] object-cover" src={props.img} alt={props.name} />
            <p className="text-[#1D70A6] font-bold">{props.name}</p>
            <p className="font-extralight">{props.position}</p>
        </div>
    );
}
