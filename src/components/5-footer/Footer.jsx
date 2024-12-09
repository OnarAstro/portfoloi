import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Speaking</a>
        </li>
        <li>
          <a href="">Uses</a>
        </li>
      </ul>
      {/* <p>Copyright &copy; 2022. All Rights Reserved</p> */}
      <p>&copy; 2024 Spencer Sharp. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
