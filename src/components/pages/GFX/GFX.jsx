import React from 'react';
import image1 from '../../../images/Banner1.png';
import image2 from '../../../images/MadCity.png';
//import image3 from "../../../images/portfolio/project-03.jpg";
//import image4 from "../../../images/portfolio/project-04.jpg";
import GFXItem from "./GFXItem";

const gfxdata = [
  {
    id: 1,
    image: image1,
    title: "YouTube Clickbait Banner Template",
    description:
      "A JavaScript code quiz using the default browser's API.",
  },
  {
    id: 2,
    image: image2,
    title: "MadCity Wallpaper",
    description:
      "A Progressive Web App text editor that runs on the browser and works offline.",
  },
 
];

const Gfx = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {gfxdata.map((gfx, id) => (
          <GFXItem gfx={gfx} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Gfx;
