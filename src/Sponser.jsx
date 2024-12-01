import React from "react";
import sponserimg from "./assets/sponser.jpeg";

export default function Sponser() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-2xl text-yellow-600 md:text-4xl font-semibold uppercase mt-5">
        OUR TITLE SPONSORS
      </h3>
      <div class="w-[8.125rem] h-1 border-t-4 border-cyan-700 mt-2 mb-10"></div>
      <img src={sponserimg} className=" size-96 mt-[-2rem]" />
    </div>
  );
}
