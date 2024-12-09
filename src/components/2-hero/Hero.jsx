import Lottie from "lottie-react";
import "./Hero.css";
// import Image from "./Image";
import devAnimation from "../../animationTiefiles/dev2.json";
import { useRef } from "react";
// https://www.framer.com/motion/introduction/
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 8, type: "spring", stiffness: 100 }}
            src="./avatar.jpeg"
            className="avatar"
            alt=""
          />
          <div className="icon-verified" />
        </div>
        <div className="parent-title">
          <h1 className="title astro">
            <span></span> I'm Omar.
          </h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="title"
          >
            MERN Stack Developer | React & Node.js Specialist
          </motion.h1>
        </div>
        <p className="sub-title">
          I am a dedicated MERN Stack Developer with one year of experience.
          Proficient in building dynamic web applications with React.js,
          Node.js, Express, and MongoDB. My focus is on creating scalable and
          high-performance solutions tailored to meet client needs. While I
          haven’t worked on client-delivered projects yet, I have successfully
          developed personal and collaborative projects, including e-commerce
          platforms and content management systems.
        </p>
        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>

      <div className="right-section animation ">
        {/* <Image /> */}
        <Lottie
          className="dev-animation"
          lottieRef={lottieRef}
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
