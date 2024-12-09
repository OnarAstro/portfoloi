import { useEffect, useState } from "react";
import "./ScrollTop.css";
const ScrollTop = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollBTN(true);
      } else {
        setShowScrollBTN(false);
      }
    });
  }, []);

  const [showScrollBTN, setShowScrollBTN] = useState(false);
  return (
    <>
        <a style={{ opacity: showScrollBTN ? 1 : 0, transition: " 1s" }} onClick={() => window.scrollTo(0, 0)} href="#up">
          <button className="icon-keyboard_arrow_up scroll2Top"></button>
        </a>
    </>
  );
};

export default ScrollTop;
