import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import ExperienceCard from "../components/ExperienceCard";
import ExperienceTimeline from "../components/ExperienceTimeline";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import ContentSection from "../components/ContentSection";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const projectRef = useRef();
  const experienceRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleProjectScroll = () => {
    window.scrollTo({
      top: projectRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleExperienceScroll = () => {
    window.scrollTo({
      top: experienceRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleProjectScroll={handleProjectScroll}
          handleExperienceScroll={handleExperienceScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="laptop:mt-20 mt-10">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-2xl tablet:text-5xl laptop:text-5xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h1
              ref={textTwo}
              className="text-2xl tablet:text-5xl laptop:text-5xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h1>
            <h1
              ref={textThree}
              className="text-2xl tablet:text-5xl laptop:text-5xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineThree}
            </h1>
            <h1
              ref={textFour}
              className="text-2xl tablet:text-5xl laptop:text-5xl laptopl:text-7xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineFour}
            </h1>
          </div>

          <Socials className="mt-2 laptop:mt-5" />
        </div>
        <div className="mt-16 laptop:mt-40 p-2 laptop:p-0" ref={experienceRef}>
          <h1 className="text-2xl text-bold mb-2 group cursor-pointer">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent hover:from-blue-500 hover:via-purple-500 hover:to-indigo-500 transition-all duration-500">
              Experience.
            </span>
            <div className="w-0 group-hover:w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 mt-2"></div>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-lg">
            My professional journey through data science, engineering, and AI
          </p>

          <div className="mt-5 laptop:mt-10">
            {data.experience && <ExperienceTimeline experiences={data.experience} />}
          </div>
        </div>

        <div className="mt-16 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold group cursor-pointer">
            <span>
              About.
            </span>
            <div className="w-0 group-hover:w-16 h-0.5 bg-white dark:bg-white transition-all duration-500 mt-2"></div>
          </h1>
          <div className="tablet:m-10 mt-6 w-full laptop:w-3/4">
            <div className="w-full p-6 rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-gray-200 dark:border-slate-700 transition-all ease-out duration-300 hover:scale-105">
              <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                <ContentSection content={data.aboutpara} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 laptop:mt-40 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold group cursor-pointer">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent hover:from-blue-500 hover:via-purple-500 hover:to-indigo-500 transition-all duration-500">
              Expertise
            </span>
            <div className="w-0 group-hover:w-20 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 mt-2"></div>
          </h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-8">
            {data.expertise && data.expertise.map((item, index) => (
              <ServiceCard
                key={index}
                name={item.title}
                description={item.description}
                techStack={item.techStack}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 laptop:mt-40 p-2 laptop:p-0" ref={projectRef}>
          <h1 className="text-2xl text-bold group cursor-pointer">
            <span>
              Project.
            </span>
            <div className="w-0 group-hover:w-16 h-0.5 bg-white dark:bg-white transition-all duration-500 mt-2"></div>
          </h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-3 laptop:gap-4">
             {data.projects.map((project) => (
               <WorkCard
                 key={project.id}
                 img={project.imageSrc}
                 name={project.title}
                 description={project.description}
                 onClick={() => window.open(project.url)}
                 githubUrl={project.githubUrl}
               />
             ))}
          </div>
        </div>
        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}
