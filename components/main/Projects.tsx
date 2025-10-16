import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      
        <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-10">
        <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="A personal portfolio website developed using Next.js 14 and the App Router, leveraging React Server Components for optimal performance and SEO. The site is styled with Tailwind CSS for a utility-first and maintainable design system, with animations powered by Framer Motion."
        />
      <ProjectCard
          src="/image.png"
          title="MIIT Learning Management System with Django"
          description="A comprehensive Django Learning Management System (LMS) designed to facilitate online education and training. The platform offers a range of features including course management, user enrollment, progress tracking, and interactive learning tools."
        />

        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="This project features a collection of dynamic and interactive UI cards that bring content to life."
        />

        <ProjectCard
          src="/egrocerhome.png"
          title="Egrocer - Grocery Andriod App with Firebase"
          description="A mobile application for Android that makes grocery shopping simple and convenient. Browse thousands of products from fresh produce to pantry staples and deliver right to your doorstep."
        />


        <ProjectCard
          src="/music genre classification.png"
          title="Music Genre Classification with Machine Learning"
          description="A machine learning project that classifies music tracks into different genres based on their audio features. The model is trained on a diverse dataset of music samples and utilizes various algorithms to achieve accurate genre predictions."
        />

        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="A visually rich, space-themed informational website built to demonstrate modern front-end animation and interaction techniques. The project utilizes React and Three.js."
        />







      </div>
      
    </div>
  );
};

export default Projects;
