import React from "react";

const WorkCard = ({ img, name, description, onClick, githubUrl }) => {
  return (
    <div className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link">
      <div className="flex gap-4 items-start">
        {/* Image - smaller with fixed width and GitHub link */}
        <div className="flex-shrink-0">
          <div className="w-32 h-20 laptop:w-40 laptop:h-24 rounded-lg overflow-hidden">
            {githubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  alt={name}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                  src={img}
                />
              </a>
            ) : (
              <img
                alt={name}
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                src={img}
              />
            )}
          </div>
        </div>
        
        {/* Text content - takes remaining space and clickable */}
        <div 
          className="flex-1 min-w-0 cursor-pointer"
          onClick={onClick}
        >
          <h1 className="text-xl laptop:text-2xl font-medium mb-2">
            {name ? name : "Project Name"}
          </h1>
          <h2 className="text-base laptop:text-lg opacity-60 leading-relaxed">
            {description ? description : "Description"}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
