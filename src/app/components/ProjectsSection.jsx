"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectsData = [

  {
    id: 1,
    title: "News-Wizard",
    description: "Real time news app developed using ReactJS and News API",
    image: "/images/projects/2.png",
    gitUrl: "https://github.com/tushar12357/News-Wizard",
  },
   {
    id: 2,
    title: "Connectify",
    description: "Social Media app developed using MERN Stack",
    image: "/images/projects/social.png",
    gitUrl: "https://github.com/tushar12357/Connectify",
  },
  {
    id: 3,
    title: "Socialize",
    description: "React Native Mobile Chat application developed using MERN Stack",
    image: "/images/projects/socialize.jpeg",
    gitUrl: "https://github.com/tushar12357/socialize",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
