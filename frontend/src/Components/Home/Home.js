import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Home.css";
import About from "../About/About";
import Projects from "../Projects/Projects";

const Home = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:8000/api/hello/')
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="homePage">
      <div className="home-static">
        <div className="home-static-content">
          <h1>ANGELO ALENCAR</h1>
          <h3>Fullstack Developer</h3>
          <p className="home-text">Welcome to my portfolio!</p>
        </div>
        <div className="navBar">
          <button><span className="button-text">ABOUT</span></button>
          <button><span className="button-text">PROJECTS</span></button>
          <button><span className="button-text">CONTACT</span></button>
        </div>
        <ul>
          <li>
            <a href="https://github.com/angeloabianchi" target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white-500"
            >
              <FaGithub size={24} />
            </a>
          </li>
          <li>
            <a href="angeloalencarbianchi@gmail.com" target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <MdEmail size={24} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/angeloabianchi" target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaLinkedinIn size={24} />
            </a>
          </li>
        </ul>
      </div>
      <div className="home-dynamic">
        <About />
        <Projects />
        {/* <p>{message}</p> */}

      </div>
    </div>
  );
};


export default Home;
