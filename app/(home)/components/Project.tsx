import React from 'react'
import {  SiJavascript, SiNodedotjs, SiOpenai, SiPython, SiReact, SiSelenium , SiGooglecloud } from 'react-icons/si'
import Title from './Title'
import { DirectionAwareHover } from './ui/direction-aware-hover';
import { cn } from '@/lib/utils';
import Link from 'next/link';
function Project() {
    const projects = [
        {
            title : "VidDirector" , 
            tech : [ SiPython, SiOpenai ],
            link : "https://viddirector.streamlit.app/",
            cover: "/VidDirector.png",
            background : "bg-green-500",

        },
        {
            title : "Swiggy Clone" , 
            tech : [ SiJavascript, SiNodedotjs ,SiReact  ],
            link : "http://swiggy77.netlify.app/",
            cover: "/SwiggyClone.png",
            background : "bg-violet-500",

        },
        {
            title : "Automated content Generation" , 
            tech : [ SiPython, SiSelenium ,SiOpenai ,SiGooglecloud ],
            link : "https://youtu.be/NcHOu_r4l6c",
            cover: "/PIB.png",
            background : "bg-yellow-500",

        },

    ]
  return (
    <div className="py-10 p-5 sm:p-0">
        <Title
            text="Projects🗂️"
            className="flex flex-col items-center justify-center rotate-6"

        />
        <div className="grid grid-col-1 sm:grid-cols-2 pt-20 gap-5">
            {projects.map((project,index)=>{
                return (
                <Link href={project.link} key={index}>
                    <div className={cn(
                        "p-1 rounded-md border border-gray-300",
                        project.background
                    )}
                    >
                    <DirectionAwareHover
                    imageUrl={project.cover} className="w-full space-y-5 cursor-pointer">
                        <div>
                        <h1>{project.title}</h1>
                        <div className="flex items-center gap-5">
                            {project.tech.map((Icon,index)=>{
                                return <Icon className="w-8 h-8" key={index} />;
                            })}
                        </div>
                        </div>




                    </DirectionAwareHover>
                    </div>
                </Link>
                );
            })}

        </div>
    </div>
  );
}

export default Project