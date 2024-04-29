import React from "react";
import Link from "next/link";
import { SiGithub, SiLinkedin } from "react-icons/si";
function Navbar() {
  const socials = [
    {
      link: "https://www.linkedin.com/in/naveen-e/",
      label: "LinkedIn",
      Icon: SiLinkedin,
    },
    {
      link: "https://github.com/NaveenE14",
      label: "GitHub",
      Icon: SiGithub,
    },
  ];
  return (
    <nav className="py-10 flex justify-between items-center">
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2"> Naveen E </h1>
      <div className="flex items-center gap-5 pr-5">
        {socials.map((social, index) => {
          const Icon = social.Icon;
          return (
            <Link href={social.link} key={index} aria-label={social.label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all"/>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
