import AboutProject from "@/components/AboutProject";
import Challenges from "@/components/Challenges";
import Solution from "@/components/Solution";
import React from "react";
import estate from "@/assets/estate.png";
import Technology from "@/components/Technology";
import html from "@/assets/html5-logo.png";
import css from "@/assets/css-logo.webp";
import js from "@/assets/js-logo.png";
import tailwind from "@/assets/tailwindcss-logo.webp";
import react from "@/assets/react-logo.webp";
import redux from "@/assets/redux-logo.webp";
import github from "@/assets/github-logo.webp";
import MoreApp from "@/components/MoreApp";
import AnimationProject from "@/components/AnimationProject";

export default function Invoices() {
  return (
    <div className=" w-full flex flex-col gap-6">
      <AnimationProject id="about">
        <AboutProject
          title="Estate Landing Page"
          description="The 'Estate' project is a landing page for a company that showcases its services, client testimonials, and real estate projects."
          industry="Estate"
          year={2024}
          service='"Real estate consulting"'
          image={estate}
        />
      </AnimationProject>
      <AnimationProject id="challenge">
        <Challenges
          challenge={[
            {
              desc: "Implementing complex animations while maintaining performance and responsiveness across different devices.",
            },
            {
              desc: "Creating a responsive design that works seamlessly on all screen sizes while managing layout and spacing effectively.",
            },
            {
              desc: "Ensuring code quality and type safety through TypeScript implementation while maintaining a modular structure.",
            },
          ]}
        />
      </AnimationProject>
      <AnimationProject id="solution">
        <Solution
          solution={[
            {
              desc: "Leveraged Framer Motion with useInView for optimized animations that trigger based on user visibility.",
            },
            {
              desc: "Utilized Tailwind CSS combined with Flexbox/Grid for efficient responsive design implementation.",
            },
            {
              desc: "Implemented TypeScript with modular component architecture to ensure code reliability and maintainability.",
            },
          ]}
        />
      </AnimationProject>
      <AnimationProject id="technologies">
        <Technology
          Technologies={[
            { img: html, name: "HTML5" },
            { img: css, name: "CSS3" },
            { img: js, name: "JavaScript" },
            { img: react, name: "React" },
            { img: tailwind, name: "TailwindCSS" },
            { img: github, name: "Github" },
            { img: redux, name: "Redux" },
          ]}
        />
      </AnimationProject>
      <MoreApp
        apps={[
          {
            title: "Invoice App",
            link: "/apps/invoices",
            date: "October 2023",
          },
          { title: "Filter App", link: "/apps/filterapp", date: "August 2023" },
        ]}
      />
    </div>
  );
}
