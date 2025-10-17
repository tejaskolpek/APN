import React, { useEffect, useRef, useState } from "react";

const ExperienceTimeline = ({ experiences }) => {
  // Fixed blue→purple palette only
  const getTimelineColor = () => "from-blue-500 via-indigo-500 to-purple-600";

  // Plain date text (no colored pill)
  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main timeline line */}
      <div className={`absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b ${getTimelineColor()} rounded-full shadow-lg`}></div>

      <div className="space-y-16">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative">
            {/* Removed colored dots for cleaner look */}

            {/* Branch connector */}
            <div className="absolute left-11 top-3 w-10 h-0.5 bg-gradient-to-r from-slate-300 to-transparent"></div>

            {/* Content card */}
            <div className="ml-20">
              <div
                ref={(el) => {
                  if (!el) return;
                  if (!el.dataset.observed) {
                    el.dataset.observed = "true";
                    // lazy create observer per element
                    const observer = new IntersectionObserver(
                      (entries, obs) => {
                        entries.forEach((entry) => {
                          if (entry.isIntersecting) {
                            // Add staggered delay based on index
                            const delay = index * 200; // 200ms delay between each card
                            setTimeout(() => {
                              entry.target.classList.add("opacity-100", "translate-x-0", "scale-100");
                              entry.target.classList.remove("opacity-0", "-translate-x-8", "scale-95");
                            }, delay);
                            obs.unobserve(entry.target);
                          }
                        });
                      },
                      { threshold: 0.1 }
                    );
                    observer.observe(el);
                  }
                }}
                className={`group bg-gradient-to-r from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-lg p-7 laptop:p-8 border-l-4 border-indigo-500/80 hover:border-purple-500/90 transition-all duration-1000 ease-out relative overflow-hidden hover:shadow-2xl transform opacity-0 -translate-x-8 scale-95 hover:scale-[1.01]`}
              >
                {/* Background pattern */}
                <div className="pointer-events-none absolute -top-6 -right-10 w-40 h-40 opacity-10 blur-0">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-full"></div>
                </div>
                <div className="pointer-events-none absolute bottom-0 left-1/3 -translate-x-1/3 w-24 h-24 opacity-5">
                  <div className="w-full h-full bg-gradient-to-tr from-purple-600 to-transparent rounded-full"></div>
                </div>

                {/* Company and Position */}
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl laptop:text-3xl font-bold text-slate-900 dark:text-white mb-1 tracking-tight">{exp.company}</h3>
                      <h4 className="text-lg laptop:text-xl font-semibold text-slate-600 dark:text-slate-300">{exp.position}</h4>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <span className={`inline-block text-slate-700 dark:text-slate-200 text-sm font-semibold`}
                        title={exp.dates}>
                        {exp.dates}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base laptop:text-lg">{exp.description}</p>

                  {/* Interactive underline on hover */}
                  <div className="mt-5 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative floating elements */}
      <div className="absolute -left-4 top-0 w-6 h-6 bg-blue-500 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute -left-3 top-1/3 w-4 h-4 bg-purple-500 rounded-full animate-bounce opacity-60" style={{ animationDelay: "0.5s" }}></div>
      <div className="absolute -left-4 top-2/3 w-5 h-5 bg-green-500 rounded-full animate-bounce opacity-60" style={{ animationDelay: "1s" }}></div>

      {/* Timeline start and end markers */}
      <div className="absolute -left-2 -top-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
        <div className="w-3 h-3 bg-white rounded-full"></div>
      </div>
      <div className="absolute -left-2 -bottom-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-green-500 rounded-full flex items-center justify-center">
        <div className="w-3 h-3 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
