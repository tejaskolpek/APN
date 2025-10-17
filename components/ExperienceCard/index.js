import React from "react";

const ExperienceCard = ({ company, position, dates, description, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link cursor-pointer"
      onClick={onClick}
    >
      <div className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 hover:shadow-lg">
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
              {company ? company : "Company Name"}
            </h1>
            <h2 className="text-xl font-semibold text-slate-600 dark:text-slate-300 mb-2">
              {position ? position : "Position"}
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              {dates ? dates : "Duration"}
            </p>
            <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {description ? description : "Job description and key responsibilities"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
