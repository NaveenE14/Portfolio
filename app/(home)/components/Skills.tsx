"use client";
import React from 'react'
import Title from './Title'
import { HoverEffect } from './ui/card-hover-effect'
import { SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si'

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
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
        <Title text="Skills🤹"  className="flex flex-col items-center justify-center w-[60%] pl-[45%]"/>
        <HoverEffect items={skills}>

        </HoverEffect >
    </div>
  )
}

export default Skills