import React from "react";

export default function SinglePerson(props) {
    const specialId = props.id === 1 || props.id === 3;

    let className = "flex flex-col basis-1/3 justify-center items-center mb-5";

    if (specialId) {
        className += " mt-10 ml-10 mr-10";
    }

    return (
        <div className={className}>
            <img className="size-60 rounded-[125px] object-cover" src={props.img} alt={props.name} />
            <p className="text-[#1D70A6] font-bold">{props.name}</p>
            <p className="font-extralight">{props.position}</p>
        </div>
    );
}
