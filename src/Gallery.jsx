import React from "react";
import photo1 from "./assets/Gallery1.jpeg";
import photo2 from "./assets/Gallery2.jpeg";
import photo3 from "./assets/Gallery3.jpeg";
import photo4 from "./assets/Gallery4.jpeg";
import photo5 from "./assets/Gallery5.jpeg";
import photo6 from "./assets/Gallery6.jpeg";
import photo7 from "./assets/Gallery7.jpeg";
import photo8 from "./assets/Gallery8.jpeg";
import photo9 from "./assets/Gallery9.jpeg";
import photo10 from "./assets/Gallery10.jpeg";
import photo11 from "./assets/Gallery11.jpeg";
import photo12 from "./assets/Gallery12.jpeg";
import photo13 from "./assets/Gallery13.jpeg";

export default function Gallery() {
  const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
    photo13,
  ];

  return (
    <div className="flex flex-col items-center mb-6">
      <h3 className="text-2xl text-yellow-600 md:text-4xl font-semibold uppercase mt-5">
        Gallery
      </h3>
      <div className="w-[8.125rem] h-1 border-t-4 border-cyan-700 mt-2 mb-10"></div>
      <div className="w-full overflow-x-auto pb-4">
        <div className="flex space-x-4 px-4">
          {photos.map((photo, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={photo}
                alt={`Photo ${index + 1}`}
                className="h-72 w-auto object-cover rounded-lg shadow-md"
                style={{ maxWidth: "none" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
