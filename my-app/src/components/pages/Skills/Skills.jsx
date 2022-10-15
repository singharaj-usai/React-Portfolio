import React from "react";
import { FaCode, FaHtml5, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiAdobephotoshop, SiAdobepremierepro } from "react-icons/si";
import SkillsItem from "./SkillsItem";

const serviceData = [
  {
    id: 1,
    icon: <FaCode />,
    title: "Web Design",
    description:
      "Experienced with creating clean and responsive websites so users can have a good first-hand experience.",
  },
  {
    id: 2,
    icon: <FaHtml5 />,
    title: "Web Development",
    description:
      "Learned Fullstack Web Development using the MERN stack from MSU's Coding Bootcamp.",
  },
  {
    id: 3,
    icon: <SiTailwindcss />,
    title: "Tailwind CSS",
    description:
      "Ability to implement Tailwind CSS to HTML to create a clean mobile-first website.",
  },
  {
    id: 4,
    icon: <FaReact />,
    title: "React",
    description:
      "New to React.JS but quickly learning about how to use it.",
  },
  {
    id: 5,
    icon: <SiAdobephotoshop/>,
    title: "Adobe Photoshop",
    description:
      "7+ Years of Graphic Design creating YouTube thumbnails and game icons for content creators.",
  },
  {
    id: 6,
    icon: <SiAdobepremierepro />,
    title: "Adobe Premiere Pro",
    description:
      "3+ Years of using Adobe Premiere Pro to produce video content for YouTube and Twitter.",
  },
];

const Service = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {serviceData.map((service, id) => (
          <SkillsItem service={service} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Service;
