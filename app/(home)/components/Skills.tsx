"use client";
import React from 'react'
import Title from './Title'
import { HoverEffect } from './ui/card-hover-effect'
import { SiNextdotjs, SiReact, SiTailwindcss,SiThealgorithms,SiMysql,SiGooglecloud } from 'react-icons/si'

function Skills() {
  const skills = [
    {
      text : "React",
      Icon : SiReact,
    },
    {
      text : "Next.js",
      Icon : SiNextdotjs,
    },
    {
      text : "Tailwind",
      Icon : SiTailwindcss,
    },
    {
      text : "Data Structures and Algorithms",
      Icon : SiThealgorithms,
    },
    {
      text : "DBMS",
      Icon : SiMysql,
    },
    {
      text : "Cloud",
      Icon : SiGooglecloud,
    },
  ];
  return (
    <div className="max-w-5xl mx-auto p-5 mt-20">
        <Title text="Skills🤹"  className="flex flex-col items-center justify-center w-[60%] pl-[45%]"/>
        <HoverEffect items={skills}>
        </HoverEffect >
    </div>
  )
}

export default Skills