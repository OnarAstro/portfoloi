import { useState } from "react";
import "./Main.css";
import { myProjects } from "./data";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);
    const newArr = myProjects.filter(
      (project) => project.category === buttonCategory
    );
    setArr(newArr);
  };

  return (
    <main className="flex">
      <section className="left-section flex">
        <button
          className={currentActive === "all" ? "active" : ""}
          onClick={() => {
            setArr(myProjects);
            setCurrentActive("all");
          }}
        >
          all projects
        </button>
        <button
          className={currentActive === "css" ? "active" : ""}
          onClick={() => {
            handleClick("css");
          }}
        >
          HTML & CSS
        </button>
        <button
          className={currentActive === "Node" ? "active" : ""}
          onClick={() => {
            handleClick("Node");
          }}
        >
          Node & Express
        </button>
        <button
          className={currentActive === "react" ? "active" : ""}
          onClick={() => {
            handleClick("react");
          }}
        >
          React & MUI
        </button>
        {/* <button
          className={currentActive === "Node" ? "active" : ""}
          onClick={() => {
            handleClick("Node");
          }}
        >
          Node & Express
        </button> */}
        <button
          className={currentActive === "fullstack" ? "active" : ""}
          onClick={() => {
            handleClick("fullstack");
          }}
        >
          fullstack
        </button>
      </section>

      <section className="right-section flex">
        <AnimatePresence>
          {arr.map((project) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", stiffness: 50, damping: 8 }}
                key={project.id}
                className="card"
              >
                <img width={350} height={250} src={project.img} alt="" />
                <div style={{ width: "350px" }} className="box">
                  <h1 className="title">{project.name}</h1>
                  <p className="sub-title">{project.desc.slice(0, 100)}..</p>
                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a target="_blank" href={project.live} className="icon-link"></a>
                      {/* <a href="https://github.com/OnarAstro/insta-clone" className="icon-github"></a> */}
                      <a target="_blank" href={project.github} className="icon-github"></a>
                    </div>
                    <a target="_blank" className="link flex" href={project.live}>
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
