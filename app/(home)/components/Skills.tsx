"use client";
import React from 'react'
import Title from './Title'
import { HoverEffect } from './ui/card-hover-effect'
import { SiNextdotjs, SiReact, SiTailwindcss,SiCplusplus, SiNodedotjs , SiMongodb,SiPython,SiJavascript ,SiSelenium, SiAmazonaws, SiMicrosoftazure } from 'react-icons/si'
import { FaJava } from "react-icons/fa";

function Skills() {
  const skills = [
    {
      text : "C++",
      Icon : SiCplusplus,
    },
    {
      text : "Java",
      Icon :  FaJava ,
    },
    {
      text : "Python",
      Icon : SiPython,
    },
    {
      text : "Javascript",
      Icon : SiJavascript,
    },
    {
      text : "React",
      Icon : SiReact,
    },
    {
      text : "Next Js",
      Icon : SiNextdotjs,
    },
    {
      text : "Tailwind CSS",
      Icon : SiTailwindcss,
    },
    {
      text : "Node.Js",
      Icon : SiNodedotjs,
    },
    {
      text : "Mongo DB",
      Icon : SiMongodb,
    },

    {
      text : "AWS",
      Icon : SiAmazonaws,
    },
    {
      text : "Azure",
      Icon : SiMicrosoftazure,

    },
    {
      text : "Selenium",
      Icon : SiSelenium,
    },

  ];
  return (
    <div className="max-w-5xl mx-auto px-8 ">
        <Title text="Skills🤹"  className="flex flex-col items-center justify-center w-[60%] pl-[45%] -rotate-6"/>
        <HoverEffect items={skills}>
        </HoverEffect >
    </div>
  )
}

export default Skills