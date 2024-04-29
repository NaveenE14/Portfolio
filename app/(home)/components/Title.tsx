import React from "react";

function Title({ text, className }: { text: string; className?: string }) {
  return (
    <div className={className}>
      <h1 className="text-3xl font-bold hover:text-green-400 transition-all ">
        {text}
      </h1>
      <div className="w-full h-2 bg-green-500 rounded-full "></div>
      <div className="w-full h-2 bg-indigo-500 rounded-full translate-x-2"></div>
    </div>
  );
}

export default Title;
