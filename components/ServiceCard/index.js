import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ServiceCard = ({ name, description, icon, techStack = [] }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 ${
        mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:scale-105 link`}
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-slate-700 rounded-full text-white">
          {icon ? (
            <img src={icon} alt="icon" className="w-6 h-6" />
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L15 8H9L12 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 22L9 16H15L12 22Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
        <div>
          <h1 className="text-2xl font-bold">{name ? name : "Heading"}</h1>
          <p className="mt-4 text-base opacity-75 leading-relaxed">
            {description
              ? description
              : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "}
          </p>
        </div>
      </div>

      {techStack && techStack.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {techStack.map((tech, idx) => (
            <span key={idx} className="px-3 py-1 rounded-full bg-white text-black text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
