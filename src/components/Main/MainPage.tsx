import ModeToggle from "../toggler/ModeToggle";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import Project from "../Project";

export default function MainPage() {
  return (
    <body>
      <div className="h-screen bg-white dark:bg-black">
        <ModeToggle />
        <div className="mx-auto px-6 py-12 font-sans selection:bg-emerald-500">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-control lg:justify-between lg:py-24">
              <div className="lg:pl-60">
                <h1 className="text-5xl font-bold text-emerald-600">
                  Elijah Chia
                </h1>
                <h2 className="text-2xl font-light text-black dark:text-white my-4">
                  Computer Science Undergraduate
                </h2>
                <p className="text-lg font-normal text-gray-600 dark:text-gray-300 ">
                  I enjoy learning new technologies and creating software with a
                  lasting impact.
                </p>
                <div id="links" className="h-40"></div>
                <div id="icons" className="flex flex-row">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/elijah-chia/"
                    className="pr-2"
                  >
                    <BsLinkedin
                      size={40}
                      className="hover:text-emerald-400 dark:text-white text-black dark:hover:text-emerald-400"
                      title="LinkedIn"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/Elijah5399"
                    className="px-2"
                  >
                    <BsGithub
                      size={40}
                      className="hover:text-emerald-400 dark:text-white text-black dark:hover:text-emerald-400"
                      title="GitHub"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://leetcode.com/ElijahChia/"
                    className="px-2"
                  >
                    <SiLeetcode
                      size={40}
                      className="hover:text-emerald-400 dark:text-white text-black dark:hover:text-emerald-400"
                      title="LeetCode"
                    />
                  </a>
                </div>
              </div>
            </header>
            <main className="scroll-smooth lg:w-1/2 text-gray-600 dark:text-gray-300 overflow-scroll">
              <div className="lg:py-24 lg:pr-60">
                <section id="about">
                  <h1 className="text-3xl font-bold text-emerald-600">
                    About Me
                  </h1>
                  <hr className="border-emerald-600" />
                  <p className="text-lg mt-4">
                    I'm currently a Year 2 student studying Computer Science at
                    the National University of Singapore. I've spent the past
                    few years learning front-end and back-end web development,
                    and found an interest in creating{" "}
                    <span className="text-black font-semibold dark:text-white">
                      robust
                    </span>
                    ,{" "}
                    <span className="text-black font-semibold dark:text-white">
                      beautiful
                    </span>{" "}
                    web pages using different technologies.
                  </p>
                  <p className="text-lg mt-4">
                    Having participated in multiple hackathons, I've also
                    developed non-web applications and software, such as
                    telegram bots and executable Java applications. In the
                    process, I've learnt the importance of developing
                    understandable, reusable code with good documentation, and
                    I've developed a passion for making software which can{" "}
                    <span className="text-black font-semibold dark:text-white">
                      impact lives
                    </span>
                    .
                  </p>
                  <p className="text-lg my-4">
                    In my free time, I learn to use new technologies, watch
                    anime, and play sports.
                  </p>
                </section>
                <section id="projects">
                  <h1 className="text-3xl font-bold text-emerald-600">
                    My Recent Projects
                  </h1>
                  <hr className="border-emerald-600" />
                  <Project
                    title="title1"
                    imageLink="blabla"
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, molestias, quae illum ipsam vel architecto ut, error esse beatae quibusdam illo! Rerum ipsum ipsam dolores nemo quam eum esse doloremque."
                    projectLink="blabla"
                    skills={["React", "TypeScript"]}
                  />
                </section>
              </div>
            </main>
          </div>
        </div>
      </div>
    </body>
  );
}
