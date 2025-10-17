import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleProjectScroll, handleExperienceScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contactDropdownOpen && !event.target.closest('.contact-dropdown')) {
        setContactDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [contactDropdownOpen]);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <img
                      className="h-6"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                    ></img>
                  </Button>
                )}

                <Popover.Button>
                  <img
                    className="h-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                  ></img>
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${
                theme === "dark" ? "bg-slate-800" : "bg-white"
              } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleExperienceScroll}>Experience</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  <Button onClick={handleProjectScroll}>Project</Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() =>
                        window.location.href = "mailto:tejkolpek@gmail.com"
                      }
                    >
                      Resume
                    </Button>
                  )}

                  <div className="relative contact-dropdown">
                    <Button onClick={() => setContactDropdownOpen(!contactDropdownOpen)}>
                      Contact
                    </Button>
                    {contactDropdownOpen && (
                      <div className={`absolute right-0 top-full mt-2 w-48 p-2 rounded-lg shadow-lg z-50 ${
                        theme === "dark" ? "bg-slate-800 border border-slate-700" : "bg-white border border-gray-200"
                      }`}>
                        <div className="space-y-1">
                          <button
                            onClick={() => {
                              window.location.href = "mailto:tejkolpek@gmail.com";
                              setContactDropdownOpen(false);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                              theme === "dark" 
                                ? "hover:bg-slate-700 text-white" 
                                : "hover:bg-gray-100 text-gray-800"
                            }`}
                          >
                            📧 Email Me
                          </button>
                          <button
                            onClick={() => {
                              window.open("https://calendly.com/tej-kolpek", "_blank");
                              setContactDropdownOpen(false);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                              theme === "dark" 
                                ? "hover:bg-slate-700 text-white" 
                                : "hover:bg-gray-100 text-gray-800"
                            }`}
                          >
                            📅 Schedule a Call
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")}>
                    Home
                  </Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                    >
                      Resume
                    </Button>
                  )}

                  <div className="relative contact-dropdown">
                    <Button onClick={() => setContactDropdownOpen(!contactDropdownOpen)}>
                      Contact
                    </Button>
                    {contactDropdownOpen && (
                      <div className={`absolute right-0 top-full mt-2 w-48 p-2 rounded-lg shadow-lg z-50 ${
                        theme === "dark" ? "bg-slate-800 border border-slate-700" : "bg-white border border-gray-200"
                      }`}>
                        <div className="space-y-1">
                          <button
                            onClick={() => {
                              window.location.href = "mailto:tejkolpek@gmail.com";
                              setContactDropdownOpen(false);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                              theme === "dark" 
                                ? "hover:bg-slate-700 text-white" 
                                : "hover:bg-gray-100 text-gray-800"
                            }`}
                          >
                            📧 Email Me
                          </button>
                          <button
                            onClick={() => {
                              window.open("https://calendly.com/tej-kolpek", "_blank");
                              setContactDropdownOpen(false);
                            }}
                            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                              theme === "dark" 
                                ? "hover:bg-slate-700 text-white" 
                                : "hover:bg-gray-100 text-gray-800"
                            }`}
                          >
                            📅 Schedule a Call
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${
          theme === "light" && "bg-white"
        } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}.
        </h1>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleExperienceScroll}>Experience</Button>
            <Button onClick={handleAboutScroll}>About</Button>
            <Button onClick={handleProjectScroll}>Project</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
              >
                Resume
              </Button>
            )}

            <div className="relative contact-dropdown">
              <Button onClick={() => setContactDropdownOpen(!contactDropdownOpen)}>
                Contact
              </Button>
              {contactDropdownOpen && (
                <div className={`absolute right-0 top-full mt-2 w-48 p-2 rounded-lg shadow-lg z-50 ${
                  theme === "dark" ? "bg-slate-800 border border-slate-700" : "bg-white border border-gray-200"
                }`}>
                  <div className="space-y-1">
                    <button
                      onClick={() => {
                        window.location.href = "mailto:tejkolpek@gmail.com";
                        setContactDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        theme === "dark" 
                          ? "hover:bg-slate-700 text-white" 
                          : "hover:bg-gray-100 text-gray-800"
                      }`}
                    >
                      📧 Email Me
                    </button>
                    <button
                      onClick={() => {
                        window.open("https://calendly.com/tejkolpek/30min", "_blank");
                        setContactDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        theme === "dark" 
                          ? "hover:bg-slate-700 text-white" 
                          : "hover:bg-gray-100 text-gray-800"
                      }`}
                    >
                      📅 Schedule a Call
                    </button>
                  </div>
                </div>
              )}
            </div>
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
              >
                Resume
              </Button>
            )}

            <Button onClick={() => window.location.href = "mailto:tejkolpek@gmail.com"}>
              Contact
            </Button>

            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <img
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                ></img>
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
